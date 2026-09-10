# 🏛️ DECISIONS.md — Registro de Decisões de Arquitetura (ADR)
## Cliente: Dojoventura (dojoventura)

> **REGRA DE OURO:**  
> Decisões registradas aqui são imutáveis a menos que explicitamente revogadas pelo Fernando. A IA nunca deve rediscutir, sugerir reverter ou alterar tecnologias já consolidadas neste documento.

---

### ADR-001: Seleção de Framework & Estilização
- **Data:** 2026-09-09
- **Status:** Aprovado / Trancado
- **Decisão:** Astro 7.3.2 com Tailwind CSS v4.3.3 usando CSS-first em `src/styles/global.css`.
- **Motivo:** Máxima performance (100/100 Lighthouse), zero JS client-side desnecessário e build ultrarrápido com `@tailwindcss/vite`.
- **Consequência:** Proibido o uso de `tailwind.config.mjs` ou componentes client-side sem diretiva explícita (`client:visible`).

---

### ADR-002: Infraestrutura de Hospedagem & Segurança
- **Data:** 2026-09-09
- **Status:** Aprovado / Trancado
- **Decisão:** Cloudflare Pages com Cloudflare Turnstile anti-bot e headers de segurança Strict-Transport-Security.
- **Motivo:** Custo de servidor quase zero, proteção DDoS ilimitada e distribuição anycast em 330 cidades globais com TTFB < 20ms.
