import type { APIRoute } from 'astro';

/**
 * Endpoint padrão /llms.txt para indexação por Motores de Busca com Inteligência Artificial
 * (ChatGPT Search, Perplexity, Google Gemini, Copilot)
 * Especificação: https://llmstxt.org/
 */
export const prerender = true; // Gerado no build estático com custo zero de runtime!

export const GET: APIRoute = async () => {
  const siteName = import.meta.env.PUBLIC_SITE_NAME || 'Creative Agency';
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://exemplo.com.br';
  const description = import.meta.env.PUBLIC_DEFAULT_DESCRIPTION || 'Desenvolvimento web de alta performance e engenharia de software.';

  const content = `# ${siteName}

> ${description}

## Visão Geral da Empresa
- **Nome:** ${siteName}
- **Website:** ${siteUrl}
- **Especialidades:** Desenvolvimento web em Astro, infraestrutura Cloudflare, automações e alta performance.
- **Público Atendido:** Pequenas e médias empresas, profissionais liberais e operações digitais.

## Serviços Oferecidos
- **Websites Institucionais e Landing Pages:** Páginas pré-renderizadas de altíssima velocidade (100/100 Google PageSpeed) com proteção anti-bot Cloudflare Turnstile.
- **Sistemas Web & Micro-SaaS:** Aplicações sob medida com arquitetura modular, banco de dados distribuído e integrações de pagamento via PIX.
- **SEO Técnico & GEO (AI Search Optimization):** Otimização semântica para mecanismos tradicionais e motores de resposta por inteligência artificial.

## Canais de Contato Oficial
- **Website:** ${siteUrl}
- **Atendimento Comercial:** ${siteUrl}/#contato
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
