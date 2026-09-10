# 🎨 Estudo de Design — Branco dominante + cantos retos (Dojo Ventura)

> **Data:** 2026-09-09
> **Status:** Proposta para aprovação do Fernando
> **Escopo:** nova definição de cores e linguagem de formas do site Astro.
> **Direção pedida:** site **predominantemente branco** + **formas retas, sem cantos arredondados** em todos os elementos.

---

## 1. Diagnóstico do estado atual

| Item | Hoje | Problema |
|------|------|----------|
| Cantos arredondados | 69 ocorrências (`rounded-xl` 23 · `rounded-lg` 18 · `rounded-full` 16 · `rounded-2xl` 12) | contraria a nova direção |
| Superfícies escuras | `bg-dojo-black` 10 · `dark:bg-slate-*` ~42 | o site "pesa" no preto, não é branco predominante |
| Header / Footer | fundo preto (`dojo-black`) | destoa do pedido |
| Hero (home) | faixa preta com textura | pode virar branco com tipografia forte |
| Header das páginas `/atletas` e `/apoiar` | `bg-dojo-black` | idem |

**Conclusão:** a identidade (vermelho `#E30613` + dourado `#D9A027`) é boa e deve **permanecer como acento**. O que muda é o **papel do preto** (de fundo → texto/apoio) e a **geometria** (de cantos macios → arestas vivas).

---

## 2. Nova paleta de cores (branco dominante)

### 2.1 Superfícies e neutros
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-surface` | `#ffffff` | fundo principal (predominante) |
| `--color-surface-alt` | `#f7f8fa` | seções alternadas / cards de apoio |
| `--color-line` | `#e5e7eb` | bordas finas (1px), separadores |
| `--color-line-strong` | `#cbd5e1` | bordas em hover/foco |
| `--color-ink` | `#0f172a` | texto principal (slate-900) |
| `--color-ink-soft` | `#475569` | texto secundário (slate-600) |
| `--color-ink-muted` | `#64748b` | legendas/microcopy (slate-500) |

### 2.2 Acentos (identidade preservada)
| Token | Valor | Uso | Contraste sobre branco |
|-------|-------|-----|------------------------|
| `--color-brand-500` | `#e30613` | vermelho vivo (grandes áreas, ícones, linha) | 4.2:1 (AA texto grande / UI) |
| `--color-brand-600` | `#c00511` | **CTA / botões / links** | 5.9:1 (AA) |
| `--color-brand-700` | `#9a040e` | hover do vermelho | 8.4:1 (AAA) |
| `--color-gold-500` | `#d9a027` | acento dourado decorativo / linha | 2.1:1 (só decorativo/linha) |
| `--color-gold-600` | `#b07d14` | texto dourado pequeno / badges | 3.5:1 (AA texto grande) |
| `--color-dojo-black` | `#0a0a0a` | **texto forte / rodapé opcional** (não mais fundo de seções) | 20:1 |

> Regra de ouro: **branco domina (≥ 85% da área)**; vermelho é ação (CTA/links), dourado é acento/linha, preto é tipografia. Nada de seções inteiras pretas, exceto o rodapé (opcional, pequeno).

---

## 3. Sistema de formas — cantos retos (radius 0)

- **Raio global:** `0px` em **todos** os elementos (botões, cards, inputs, badges, pills, avatares, thumbnails).
- **Sem** `rounded-full`: badges/chips viram **etiquetas quadradas**; os "pontinhos" de status viram **quadrados de 4px**.
- **Hierarquia visual por borda/luz**, não por raio:
  - Cards: `border: 1px solid --color-line` + fundo branco; hover `border-color: --color-brand-600`.
  - Ênfase lateral: `border-left: 4px solid --color-brand-600` ou `--color-gold-500`.
- **Sombra:** dura e mínima (efeito "brutal limpo"): `box-shadow: 4px 4px 0 rgba(15,23,42,.08)` — sombra deslocada reta, coerente com arestas vivas.
- **Foco acessível:** `outline: 2px solid --color-brand-600; outline-offset: 2px` (quadrado, nunca arredondado).

---

## 4. Mapeamento por componente (antes → depois)

| Componente | Hoje | Depois (branco + reto) |
|-----------|------|------------------------|
| **Header** | preto, filete dourado, `rounded-xl` no logo/botões | branco, filete vermelho/dourado, logo em **quadrado** vermelho, nav cinza-escuro, CTA vermelho reto |
| **Footer** | `bg-dojo-black` | branco/`surface-alt`, topo com filete vermelho→dourado, texto ink, colunas idem |
| **Hero (home)** | faixa preta + glow | **branco**, H1 em `dojo-black` com palavra em `brand-600`, bloco/línea dourada reta, chips quadrados |
| **Button** | `rounded-lg` | raio 0; primary vermelho `brand-600`, outline borda 1px, sem `rounded-*` |
| **Cards de atleta** | `rounded-2xl` + fundo cinza | branco, borda 1px, thumbnail quadrado, badge `Seleção Brasileira` em tag **quadrada** dourada |
| **Cards PIX/Vaquinha/Banco** | `rounded-2xl` | branco, borda 1px, `border-l-4` de cor por tipo (PIX verde? manter vermelho/dourado da identidade) |
| **Chips do hero / valores sugeridos** | `rounded-full` / `rounded-lg` | etiquetas quadradas (`0px`), borda ou fundo vermelho/dourado |
| **QR / placeholders de foto** | `rounded-xl` | quadrados com borda tracejada + texto "aguardando material" |
| **Sticky Mobile CTA** | `rounded-xl` no botão | botão reto; barra branca com borda superior |

---

## 5. Tokens no `global.css` (proposta concreta para `@theme`)

```css
@theme {
  /* Cores de identidade (mantidas) */
  --color-brand-500: #e30613;
  --color-brand-600: #c00511;
  --color-brand-700: #9a040e;
  --color-gold-500:  #d9a027;
  --color-gold-600:  #b07d14;
  --color-dojo-black:#0a0a0a;

  /* Superfícies e neutros (nova base branca) */
  --color-surface:      #ffffff;
  --color-surface-alt:  #f7f8fa;
  --color-line:         #e5e7eb;
  --color-line-strong:  #cbd5e1;
  --color-ink:          #0f172a;
  --color-ink-soft:     #475569;
  --color-ink-muted:    #64748b;
}
```

**Convenção de classes** (padrão daqui pra frente):
- Nunca usar `rounded-*`; quando precisar de "pill", usar `<span class="bg-brand-600 px-3 py-1 text-white">` (quadrado).
- `shadow` dura: `shadow-[4px_4px_0_rgba(15,23,42,0.08)]` no lugar de sombras difusas.
- Bordas finas `border border-line` definem os blocos; acento lateral `border-l-4 border-l-brand-600`.

---

## 6. Plano de implementação (após aprovação)

1. Atualizar `global.css` (`@theme`) com os tokens acima (novos `--color-surface/line/ink`).
2. Remover globalmente as 69 ocorrências de `rounded-*` → raio 0.
3. Trocar fundos escuros (`bg-dojo-black`, `dark:bg-slate-*`) por branco/`surface-alt` (mantendo o preto só como texto).
4. Ajustar Header, Footer, Hero e cards seguindo a tabela §4.
5. Rodar `astro check` + revisão visual página a página.
6. Atualizar `STATE.md`.

---

## 7. Decisões que ficam abertas (1 linha de resposta)

1. **Rodapé** pode ter fundo **preto pequeno** como assinatura (contraste no fim da página) ou fica **branco** também? (sugestão: branco, com filete vermelho/dourado)
2. **Hero** fica **branco com tipografia gigante vermelha** (direção "pôster esportivo") ou mantém faixa escura só no hero?
3. **Cartões PIX/Vaquinha/Banco** mantêm cor funcional (verde PIX) ou tudo na identidade vermelho/dourado?
