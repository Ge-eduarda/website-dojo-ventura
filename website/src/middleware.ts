import { defineMiddleware } from 'astro:middleware';

/**
 * Middleware Global de Observabilidade e Segurança
 * Registra tempos de resposta, detecta anomalias e captura erros não tratados na Edge
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const startTime = performance.now();
  const { pathname } = context.url;
  const clientIp = context.request.headers.get('cf-connecting-ip') || 'unknown';

  try {
    const response = await next();
    const duration = Math.round(performance.now() - startTime);

    // Registra métricas em endpoints sensíveis (como APIs de formulário ou checkout)
    if (pathname.startsWith('/api/')) {
      console.log(
        `[AUDIT] ${context.request.method} ${pathname} | Status: ${response.status} | IP: ${clientIp} | ${duration}ms`
      );
    }

    // Injeta cabeçalho com o tempo de processamento do servidor (Server-Timing)
    response.headers.set('Server-Timing', `edge;dur=${duration}`);

    return response;
  } catch (error: any) {
    const duration = Math.round(performance.now() - startTime);
    console.error(`[FATAL_ERROR] ${context.request.method} ${pathname} falhou após ${duration}ms:`, error?.message || error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Erro interno ao processar a requisição na Edge.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
});
