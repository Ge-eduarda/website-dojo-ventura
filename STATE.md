# STATE: Dojo Ventura

## Status Atual: Metodologia 5 Camadas (Em Andamento)
* **Diretriz:** Extrema Performance & Cloudflare-First (Astro removido).
* **Arquitetura:** HTML5 Semântico Puro + DaisyUI 4 + Cloudflare Pages.
* **Fase Atual:** Camada 1 Concluída com Sucesso. Pronto para Camada 2.
* **Ambiente Local Ativo:** `http://localhost:4340` (porta isolada, sem conflito com 4321/4322/4325).

---

### 🪜 Progresso das 5 Camadas
- [x] **Camada 1: Lo-Fi Estrutural Monocromático (Esqueleto)**
  - Arquivo: `website/index.html`
  - Servidor local ativo: `http://localhost:4340`
  - Estrutura semântica completa: Header com navegação + Hero da Causa + Barra PIX rápido + Quick Access (3 cards AAU) + 3 Pilares morciais/sociais + 4 Públicos + Grade de Atletas + Transparência/Custos de viagem + Novidades + FAQ com acordeões nativos + Formulário estrutural + Rodapé 3 colunas.
  - WCAG 2.2 AA (Skip Link, aria-labels, touch targets >= 44px).
  - Estritamente monocromático (preto, cinzas, branco) sem fontes externas pesadas.
- [ ] **Camada 2: Design System & Identidade Visual**
  - Próximo passo: Injetar paleta oficial do Dojo Ventura (Vermelho `#E30613`, Dourado `#D9A027`, Preto `#0A0A0A`, Branco), tema DaisyUI semântico (`data-theme`) e tipografia oficial.
- [ ] **Camada 3: Copywriting Real & Eliminação de Placeholders**
  - Substituir dados provisórios conforme confirmação dos contatos e dados reais do sensei/atletas.
- [ ] **Camada 4: Micro-interações, Acessibilidade & Ergonomia**
  - Transições suaves, máscaras de formulário e interações táticas.
- [ ] **Camada 5: Handoff de Backend & Cloudflare Functions**
  - Turnstile real, Cloudflare Pages Function `/functions/api/contact.js` e webhook de notificação.
