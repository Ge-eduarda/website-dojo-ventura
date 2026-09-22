# 🏛️ DECISIONS.md — Registro de Decisões de Arquitetura (ADR)
## Cliente: Dojoventura (dojoventura)

> **REGRA DE OURO:**
> Decisões registradas aqui são imutáveis a menos que explicitamente revogadas pelo Fernando. A IA nunca deve rediscutir, sugerir reverter ou alterar tecnologias já consolidadas neste documento.

---

### ADR-001: Seleção de Framework & Estilização (Revogado pelo Fernando)
- **Data:** 2026-09-09
- **Status:** Substituído por ADR-003
- **Decisão Inicial:** Astro 7.3.2 com Tailwind CSS v4.3.3.

---

### ADR-002: Infraestrutura de Hospedagem & Segurança
- **Data:** 2026-09-09
- **Status:** Aprovado / Trancado
- **Decisão:** Cloudflare Pages com Cloudflare Turnstile anti-bot e headers de segurança Strict-Transport-Security.
- **Motivo:** Custo de servidor quase zero, proteção DDoS ilimitada e distribuição anycast em 330 cidades globais com TTFB < 20ms.

---

### ADR-003: Transição para HTML5 Semântico Puro + DaisyUI 4 (Metodologia 5 Camadas)
- **Data:** 2026-09-15
- **Status:** Aprovado / Trancado
- **Decisão:** Transição para HTML5 Semântico Puro + DaisyUI 4 (via CDN) com Cloudflare Pages, seguindo rigorosamente a Metodologia das 5 Camadas Progressivas:
  - Camada 1: Lo-Fi Monocromático Estrutural (grids, blocos e hierarquia sem cores ou fontes externas).
  - Camada 2: Design System & Identidade Visual (injeção de tema DaisyUI e tipografia).
  - Camada 3: Copywriting de Alta Conversão & Dados Reais (sem placeholders).
  - Camada 4: Micro-interações, Acessibilidade WCAG 2.2 AA & Ergonomia.
  - Camada 5: Handoff de Backend, APIs Edge (Pages Functions) & Turnstile.
- **Motivo:** Eliminar overhead de compilação, resolver dependência pesada desnecessária, simplificar manutenção e garantir tempo de resposta < 30ms na borda com custo zero.
