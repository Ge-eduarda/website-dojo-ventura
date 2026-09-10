# 📍 STATE.md — Estado Atual do Projeto & Memória Viva
## Cliente: Dojoventura (dojoventura)
## Atualizado em: 2026-09-09

> **MEMÓRIA DO PROJETO:**
> Este arquivo é a Single Source of Truth do estado do projeto. Toda IA (pequena ou grande) deve ler este arquivo primeiro para economizar tokens e saber o próximo passo sem precisar reler o histórico da conversa.

---

## 🧭 Fase Atual da Esteira: **FASE 3: Strategy & Arquitetura de Informação (CONCLUÍDA)**

### ✅ Fase 1: Foundation & Scaffolding Inicial
- [x] Scaffolding do projeto criado com `./tools/new-client.sh`.
- [x] Estrutura de diretórios e contratos de memória inicializados (`AGENT.md`, `STATE.md`, `DECISIONS.md`).
- [x] Template corrigido p/ Astro 7 (content.config.ts com glob loaders, wrangler compat 2025-03-01 + nodejs_compat_v2, props StickyMobileCTA/Turnstile, rate-limiter em src/lib).

### ✅ Fase 2: Discovery & Extração de Dados Reais
- [x] Dados fictícios preenchidos em `src/data/dojo.ts` (atletas, PIX, vaquinha, custos)
- [x] Conteúdo de exemplo criado em `src/content/` (testimonials, services, blog, faq)
- [x] Páginas principais: `/`, `/atletas`, `/apoiar`, `/contato` prontas

### 🔄 Fase 3: Strategy & Arquitetura de Informação
- [x] Arquitetura de Informação definida (home, atletas, apoiar, contato)
- [x] Estrutura de Conteúdo (services, testimonials, blog, faq) preenchida

---

## 🎯 Tarefa Ativa Agora
- **Tarefa:** Fase 4 — Design System & Tokens Tailwind v4 (já parcialmente configurado)
- **Próximos passos:** Refinar tokens de design, adicionar componentes reutilizáveis, verificar acessibilidade

---

## ✅ Tarefas Concluídas
- [x] Scaffolding do projeto criado com `./tools/new-client.sh`.
- [x] Estrutura de diretórios e contratos de memória inicializados (`AGENT.md`, `STATE.md`, `DECISIONS.md`).
- [x] Template corrigido p/ Astro 7 (content.config.ts com glob loaders, wrangler compat 2025-03-01 + nodejs_compat_v2, props StickyMobileCTA/Turnstile, rate-limiter em src/lib).
- [x] Dados fictícios preenchidos em `src/data/dojo.ts` (atletas, PIX, vaquinha, custos).
- [x] Conteúdo de exemplo criado em `src/content/` (testimonials, services, blog, faq).
- [x] Páginas principais: `/`, `/atletas`, `/apoiar`, `/contato` prontas.

---

## 🧪 Última Evidência Técnica
- **Comando:** `astro dev --port 4325` (servidor local ativo)
- **Resultado:** Estável. Home + /atletas + /apoiar com HTTP 200 em ~150-270ms; CPU de repouso ~9% (antes: 48-63% constantes).

### 🎨 Fase 4 (em andamento) — Header / Footer / Hero reestruturados
Aplicando blueprint AAU (`docs/aausports-blueprint.md`) bloco a bloco:
- **Header:** preto + filete dourado/vermelho, nav com `aria-current`, CTA fixo e
  menu mobile sem JS (`<details>`). Monograma "V" provisório até logo real chegar.
- **Footer:** 3 colunas (marca / navegue / contato&redes "em confirmação").
- **Hero (home):** font-display, textura CSS no lugar da foto pendente, chips com
  fatos reais já publicados (Seleção Brasileira, ação social, competições).
- `astro check`: 0 errors / 0 warnings. Próximo bloco: Quick Access (3 cards) e cards por público.

### 🎨 Redesign 2026-09-09 — Branco dominante + cantos retos (APLICADO)
Conforme `docs/design-study-white-sharp.md` (decisões do Fernando: rodapé branco, hero branco, cards brancos):
- `global.css`: novos tokens `surface/surface-alt/line/line-strong/ink/ink-soft/ink-muted` + sombra dura `shadow-hard`.
- Zero `rounded-*` e zero `dark:` em todo `src/` (69 cantos + 42 fundos escuros removidos).
- Header/Footer brancos; Hero branco com tipografia vermelha + `border-l-4`; cards brancos com borda reta e acento lateral.
- Botões retos (primary vermelho com `shadow-hard`); CookieConsent rebatizado para "Dojo Ventura".

### 🐛 Bugfix 2026-09-09 — "Site fica carregando toda hora" (resolvido)
Duas causas raiz corrigidas:
1. **Conteúdo quebrado derrubava o dev server:** `src/content/testimonials/apoio-maria.md`
   (criado 14:35) usava shape de `services` (`title`/`description`) na coleção
   `testimonials`, que exige `author`/`role`/`company`. O sync de conteúdo falhava e o
   servidor crashava em loop (CPU 48%+, restart infinito → browser em reload constante).
   → Frontmatter corrigido (author: Maria Silva / role: Apoiadora / company: Regente Feijó).
2. **Loop de full-reload por watcher:** o runtime local do Wrangler (`platformProxy`)
   grava SQLite de observabilidade em `.wrangler/state/` a cada request; o watcher do
   Vite/Astro via a mudança → `program reload`/`full-reload` → novo request → loop.
   → `astro.config.mjs` agora ignora `**/.wrangler/**` e `**/.astro/**` no `vite.server.watch`.

### ⚠️ Pendência conhecida — `npm run build` (pré-existente)
- `astro check`: **0 errors / 0 warnings** ✅
- `astro build`: compila (✓ Completed ~544ms + entrypoints), mas o passo final de
  validação do wrangler falha: `The name 'ASSETS' is reserved in Pages projects`.
  O adapter `@astrojs/cloudflare` injeta binding `ASSETS` no worker `.prerender`;
  wrangler 4.130 rejeita. Incompatibilidade upstream (afeta template). `npm run deploy`
  continua bloqueado até alinhar versões/adapter.
