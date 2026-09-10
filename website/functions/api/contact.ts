/**
 * Pages Function — POST /api/contact
 * Recebe o formulário de contato do Dojo Ventura (Cloudflare Pages, sem worker Astro).
 * Mantém as mesmas regras da antiga rota Astro: rate-limit 5/10min por IP,
 * validação básica, verificação Turnstile (quando houver token) e resposta JSON.
 */

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
}

const hits = new Map<string, number[]>();

function checkRateLimit(key: string, max = 5, windowSeconds = 600): { allowed: boolean; resetInSeconds: number } {
  const win = windowSeconds * 1000;
  const now = Date.now();
  const arr = (hits.get(key) ?? []).filter((t) => now - t < win);
  if (arr.length >= max) {
    const oldest = arr[0] ?? now;
    return { allowed: false, resetInSeconds: Math.ceil((oldest + win - now) / 1000) };
  }
  arr.push(now);
  hits.set(key, arr);
  return { allowed: true, resetInSeconds: 0 };
}

async function verifyTurnstile(token: string, secret: string, remoteIp?: string): Promise<boolean> {
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (remoteIp) form.append('remoteip', remoteIp);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    });
    const data = (await res.json()) as TurnstileVerifyResponse;
    return data.success === true;
  } catch {
    return false;
  }
}

export const onRequestPost: PagesFunction<Record<string, string>> = async (context) => {
  const { request, env } = context;
  const clientIp = request.headers.get('cf-connecting-ip') || '127.0.0.1';

  const json = (body: unknown, status: number, extraHeaders: Record<string, string> = {}) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json', ...extraHeaders },
    });

  try {
    const rate = checkRateLimit(clientIp, 5, 600);
    if (!rate.allowed) {
      return json(
        {
          success: false,
          message: `Muitas tentativas de envio. Por favor, aguarde ${rate.resetInSeconds} segundos antes de tentar novamente.`,
        },
        429,
        { 'Retry-After': rate.resetInSeconds.toString() }
      );
    }

    const formData = await request.formData();
    const name = formData.get('name')?.toString()?.trim();
    const email = formData.get('email')?.toString()?.trim();
    const message = formData.get('message')?.toString()?.trim();
    const turnstileToken = formData.get('cf-turnstile-response')?.toString();

    if (!name || !email || !message) {
      return json({ success: false, message: 'Todos os campos são obrigatórios.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, message: 'Endereço de e-mail inválido.' }, 400);
    }

    if (turnstileToken) {
      const secret = env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
      const ok = await verifyTurnstile(turnstileToken, secret, clientIp);
      if (!ok) {
        return json({ success: false, message: 'Falha na verificação de segurança (Turnstile).' }, 403);
      }
    }

    console.log(`[LEAD_RECEBIDO] IP: ${clientIp} | Nome: ${name} | Email: ${email}`);

    return json({ success: true, message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' }, 200);
  } catch (err) {
    console.error(`[ERRO_CONTATO] IP: ${clientIp} -`, (err as Error)?.message || err);
    return json({ success: false, message: 'Erro interno ao processar mensagem.' }, 500);
  }
};
