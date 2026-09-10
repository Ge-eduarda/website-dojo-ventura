import type { APIRoute } from 'astro';
import { verifyTurnstileToken } from '../../lib/cloudflare';
import { checkRateLimit } from '../../lib/rate-limiter';

// Obriga o Astro a tratar esta rota como SSR dinâmica na Cloudflare
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const clientIp = request.headers.get('cf-connecting-ip') || '127.0.0.1';

  try {
    // 1. Rate Limiting de Segurança (Máximo 5 envios por 10 minutos por IP)
    const rateCheck = checkRateLimit(clientIp, { maxRequests: 5, windowSeconds: 600 });
    if (!rateCheck.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          message: `Muitas tentativas de envio. Por favor, aguarde ${rateCheck.resetInSeconds} segundos antes de tentar novamente.`,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': rateCheck.resetInSeconds.toString(),
          },
        }
      );
    }

    const formData = await request.formData();
    const name = formData.get('name')?.toString()?.trim();
    const email = formData.get('email')?.toString()?.trim();
    const message = formData.get('message')?.toString()?.trim();
    const turnstileToken = formData.get('cf-turnstile-response')?.toString();

    // 2. Validação básica e higienização
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'Todos os campos são obrigatórios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Endereço de e-mail inválido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Validação Cloudflare Turnstile (Anti-Bot invisível)
    if (turnstileToken) {
      const verification = await verifyTurnstileToken(turnstileToken, undefined, clientIp);
      if (!verification.success) {
        return new Response(
          JSON.stringify({ success: false, message: 'Falha na verificação de segurança (Turnstile).' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 4. Auditoria de sucesso
    console.log(`[LEAD_RECEBIDO] IP: ${clientIp} | Nome: ${name} | Email: ${email}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error(`[ERRO_CONTATO] IP: ${clientIp} -`, error?.message || error);
    return new Response(
      JSON.stringify({ success: false, message: 'Erro interno ao processar mensagem.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
