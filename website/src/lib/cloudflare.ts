/**
 * Helpers para integração com a plataforma Cloudflare
 */

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

/**
 * Valida o token gerado pelo widget Cloudflare Turnstile no servidor
 * @param token Token retornado pelo formulário (campo 'cf-turnstile-response')
 * @param secretKey Chave secreta do Turnstile (ou variável de ambiente TURNSTILE_SECRET_KEY)
 * @param remoteIp IP do visitante (opcional, extraído dos headers do request)
 */
export async function verifyTurnstileToken(
  token: string,
  secretKey?: string,
  remoteIp?: string
): Promise<{ success: boolean; errors?: string[] }> {
  const secret = secretKey || import.meta.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA'; // Secret de teste Cloudflare

  if (!token) {
    return { success: false, errors: ['missing-input-response'] };
  }

  const formData = new FormData();
  formData.append('secret', secret);
  formData.append('response', token);
  if (remoteIp) {
    formData.append('remoteip', remoteIp);
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const data = (await response.json()) as TurnstileVerifyResponse;
    return {
      success: data.success,
      errors: data['error-codes'],
    };
  } catch (error) {
    console.error('Erro ao verificar Cloudflare Turnstile:', error);
    return { success: false, errors: ['network-error'] };
  }
}
