# Astro + Cloudflare Starter Template

Starter padronizado para desenvolvimento de websites rápidos, seguros e escaláveis na rede edge da Cloudflare.

## Recursos Incluídos

- **Astro 4/5** com modo Híbrido (`hybrid`: SSG para páginas institucionais, SSR para endpoints dinâmicos).
- **Adaptador Oficial Cloudflare** (`@astrojs/cloudflare`) pronto para Pages e Workers.
- **Tailwind CSS** com sistema de cores e tipografia personalizáveis.
- **Cloudflare Turnstile** para proteção invisível contra bots em formulários de contato.
- **Endpoint API SSR** pronto em `/api/contact`.
- **Tipagens completas TypeScript** para bindings Cloudflare (`D1`, `R2`, `KV`).

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção e checagem de tipos
npm run build

# Deploy direto via Wrangler CLI
npm run deploy
```

## Configurações no Cloudflare Dashboard

1. Crie um projeto em **Cloudflare Pages** conectado ao repositório Git.
2. Defina os comandos:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Adicione as variáveis de ambiente necessárias em **Settings > Environment variables**.
