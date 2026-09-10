import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 🚀 Astro 7.x + Cloudflare Pages/Workers
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  // 🎨 Tailwind CSS v4 via Vite Plugin de alta velocidade (Oxide Engine)
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // O runtime local do Wrangler (platformProxy) grava telemetria SQLite
        // continuamente em .wrangler/state — sem ignorar, o watcher dispara
        // 'program reload'/'full-reload' em loop e a página nunca termina de carregar.
        ignored: ['**/.wrangler/**', '**/.astro/**'],
      },
    },
  },

  // 🌐 i18n Nativo: Estratégia de prefixo para outros idiomas (pt-BR na raiz, /en para inglês)
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    routing: {
      strategy: 'prefix-other-locales',
    },
  },

  // 🖼️ Otimização de Imagens Remotas com Cloudflare R2 como Origin
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.sanbernarda.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});
