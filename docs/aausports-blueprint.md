# 🔬 Blueprint — Estrutura do site AAU Karate (aausports.org/karate) → aplicável ao Dojo Ventura

> **Fonte raspada:** https://www.aausports.org/karate/ (2026-09-09)
> **Objetivo:** extrair a arquitetura de blocos da landing de karatê da AAU para reaplicar
> a *estrutura* (não o visual corporativo) no site do Dojo Ventura, respeitando a regra
> de ouro: **nada de números/depoimentos inventados**.
> **Stack alvo:** Astro 7.3.2 + Tailwind v4 (CSS-first) + zero JS por padrão.

---

## 1. Anatomia da landing AAU Karate (ordem real dos blocos no `<main>`)

Plataforma: Umbraco (block grid — classes `umb-block-grid__layout-item`,
`umb-block-grid--item-column-span-*`). Página servida com menus duplicados (desktop/mobile)
e mega-menu de esportes; abaixo, a sequência **visual real** da página:

| # | Bloco | Título/Conteúdo | Estrutura (evidência no HTML) | Links reais |
|---|-------|-----------------|-------------------------------|-------------|
| 1 | **Hero esporte** | "Karate" sobre banner de fundo | H4 título sobre imagem full-width | — |
| 2 | **Quick Access** (overline "Quick Access") | 3 cards de atalho com imagem | `.quick-access-cards--overline-text` + cards `.quick-access-card bg-image` | shop equipamento; evento JO Games 2026; scholarship |
| 3 | **Pillars Educação** | 3 tiles grandes | `.quick-access-card bg-image` (3x): Coaches Education & Certification / Officials Education & Certification / Getting Started | `/karate/coaches-officials-course/` etc. |
| 4 | **Cards por público** | 4 cards: Athletes / Parents / Coaches / Clubs | `.card-background` (4x), cada um com cópia curta + CTA "Learn more" | páginas de membership |
| 5 | **#WeAreAAU Highlights** | Carrossel de notícias datadas (thumbnail + data + título + resumo) + "All news →" | `.article-banner-*` + paginação Prev/Next | `/karate/news/` + `/karate/news/article?id=N` |
| 6 | **Newsletter** | "What's the AAU Word?" — input e-mail + botão "Join mail list" | 2 variantes (desktop/mobile) | — |
| 7 | **Banda causa + contadores** | "AAU CARES ABOUT OUR ATHLETES" + 4 stats (170k refeições, 10k itens, 3k roupas, 5k águas) + "Learn more" | `.highlighted-number--numeral` (4x) | `/aau-cares/` |
| 8 | **Barra de parceiros/patrocinadores** | Logos SVG (Molten, NCSA, Positive Coaching Alliance…) | img `*.svg` | — |
| 9 | **Footer** | Endereço HQ (2 caixas: overnight/regular mail), "Navigate", "Stay connected #WeAreAAU" (social), idioma, copyright | — | — |

Padrões de grid observados: colunas 12 (spans 3/4/6/12); seções alternam fundo claro/cinza;
cada bloco tem overline (rótulo pequeno em caps), H2 e CTA.

---

## 2. IA do "microsite" Karatê (páginas internas que alimentam a landing)

Coletado dos menus/links do sub-site Karate (adaptável para um dojo):

- **Sobre:** About Karate · Karate Complete Rules · Getting Started
- **Educação/licenças:** Coaches & Officials Course · Meet the Masters · Coaches · Officials
- **Eventos:** 2026 AAU Karate Nationals · Junior Olympic Games · Licensed Events · Livestream
- **Resultados:** National Championships · Virtual Results
- **Notícias:** News (listing + artigo)
- **Reconhecimento:** AAU Karate Scholarship · Hall of Fame
- **Contatos:** District Directors · Executive Committee · Regional Contacts
- **Loja:** Approved Equipment · Medals/Ribbons/Banners

Padrão de template de artigo/lista: título + data + thumbnail + resumo → "All news".

---

## 3. Mapeamento → Dojo Ventura (estrutura preservada, conteúdo real)

| Bloco AAU | Adaptação Dojo Ventura | Fonte de dados (real/pendente) |
|-----------|------------------------|-------------------------------|
| 1 Hero esporte | **Hero da causa** (já existe): "Nossos atletas vencem no tatame. Fora dele, precisam de você." + CTA duplo | `index.astro` (ok) |
| 2 Quick Access | 3 atalhos: **Conhecer os atletas** `/atletas` · **Apoiar via PIX** `/apoiar` · **Aulas & matrículas** `/#escola` | atletas: `data/dojo.ts`; PIX pendente real; horários pendentes |
| 3 Pillars | 3 pilares do dojo: **A Escola** (ação social/filosofia) · **Alto rendimento** (Seleção Brasileira/competição) · **Ação social/como começar** | texto real do briefing |
| 4 Cards público | 4 públicos: **Alunos & Pais** (matrícula) · **Atletas** (competição) · **Apoiadores PF** (PIX/vaquinha) · **Empresas** (patrocínio) | `data/dojo.ts` + seções `#escola` / `#contato` |
| 5 Highlights | **Novidades do dojo** — lista de posts da Content Collection `blog` (existe 1 post real) + link "ver todas" quando houver 2+ | `src/content/blog/` |
| 6 Newsletter | **Fique por dentro** → CTA WhatsApp/Instagram/contato (não há e-mail marketing real) | WhatsApp/Instagram pendentes reais |
| 7 Banda causa+stats | **Transparência da vaquinha**: "para onde vai cada real" (4 custos reais: passagens/hospedagem/alimentação/inscrições) — **sem contadores inventados**; contadores só com números confirmados pelo responsável | `costs` em `data/dojo.ts` |
| 8 Parceiros | Espaço reservado para **apoiadores/patrocinadores** (quando existirem) | pendente |
| 9 Footer | Footer atual + redes sociais + endereço (pendente real) | `site` em `data/dojo.ts` |

---

## 4. O que NÃO copiar (anti-padrão p/ um dojo local)

- Mega-menu nacional de 50+ esportes, membership/insurance/licenças — peso e IA de
  federação americana, não de dojo de bairro.
- Contadores "AAU Cares" (170k etc.) — números de causa **reais da AAU**; no dojo
  equivaleriam a dados que o briefing proíbe inventar.
- Carrossel de notícias com JS — no dojo, preferir lista estática (zero JS por padrão).

## 5. Ordem de implementação sugerida (quando aprovada)

1. Quick Access (3 cards) na home — usa dados já existentes. ✅ baixo risco
2. Cards por público (4) — textos curtos reais. ✅ baixo risco
3. Seção "Novidades" (blog) na home — 1 post real já existe. ✅ baixo risco
4. Pillars reorganizados + banda transparência (estrutura de costs já presente). 🔶 médio
5. Hero foto real + logo → quando responsável enviar mídia. ⏳ depende de dados reais
6. Bloco parceiros/patrocinadores real. ⏳ depende de dados reais
