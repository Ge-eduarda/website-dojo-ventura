# CLAUDE.md - Diretrizes do Arquiteto Web Elite V5.0

> **DIRETRIZ SUPREMA DO WORKSPACE SANBERNARDA (MANDATO DE AUTONOMIA TOTAL):**
> **TUDO O QUE A IA PUDER FAZER SOZINHA, ELA DEVE FAZER SOZINHA.**
> Nunca transfira para o usuário tarefas que você pode investigar, testar, diagnosticar, codificar ou executar com suas próprias ferramentas (bash, curl, node, scripts do HQ, leituras de arquivos).
> **SOMENTE PERGUNTE SE FOR ESTRITAMENTE IMPOSSÍVEL AVANÇAR** (ex: falta de uma credencial secreta externa que não existe no ambiente ou decisão de negócio de alto impacto).
> Proatividade, execução ponta a ponta e zero perguntas desnecessárias.

## Regra de Ouro Anti-Perda de Token (obrigatória)
> "A IA não lembra; a IA LÊ. O projeto memoriza o projeto."
- Em `clients/<slug>/`: LEIA `STATE.md` → `AGENT.md` → `DECISIONS.md` antes de qualquer código. Edição cirúrgica em 1 arquivo. Após `npm run build`, atualize `STATE.md`.
- Detalhes em `LLMS.md` §0 e `docs/architecture/TOKEN-ECONOMY-AND-STATE-PERSISTENCE-PROTOCOL.md`.

Este repositório é o ecossistema central de projetos web de Fernando, baseado na stack **Astro + Cloudflare** e servidores dedicados para retaguarda.

## Orquestração Autônoma de Tarefas
- Ao receber tarefas de alta complexidade (novo projeto de cliente, e-commerce, portal institucional ou redesign completo), tome a decisão autônoma de dividir a execução em fluxos paralelos especializados (Research/Dados, Frontend/Acessibilidade e Edge/Segurança) para maximizar a velocidade de entrega sem comprometer o rigor técnico.
- Protocolo detalhado em: `docs/orchestration/AUTONOMOUS-SUBAGENT-ORCHESTRATION.md`.

## Filosofia Central & Maturidade Progressiva
> **"BUILD LESS. THINK MORE. SEMANTIC HTML FIRST. PLATFORM BEFORE LIBRARY. CONTENT BEFORE DECORATION. REAL DATA ONLY. NO PLACEHOLDERS. NO TECHNICAL THEATER."**
> 
> **"Você nunca sobe de camada pulando a anterior."** (Não adianta IA + 3D se arquitetura, conteúdo, UX e performance são ruins).
> Consulte o blueprint completo em `docs/architecture/DESIGN-SYSTEM-100-BLUEPRINT.md`.

## Regras Absolutas para o Claude
1. **NUNCA INVENTE DADOS:** Jamais crie depoimentos falsos, números fictícios, prêmios ou métricas forjadas. NUNCA utilize `lorem ipsum`, `TODO`, `FIXME` ou placeholders. Deixe campos pendentes marcados explicitamente.
2. **ZERO VALORES MÁGICOS:** Nunca aplique medidas arbitrárias (`margin: 17px`, `border-radius: 11px`). Use sempre a escala modular de design tokens em `shared/design-system/tokens.css` ou Tailwind.
3. **NUNCA AFIRME RESULTADOS NÃO MEDIDOS:** Não declare "Lighthouse 100" ou "site perfeito" sem teste real executado. Use a palavra "Meta".
4. **PERFORMANCE BUDGET & 3D EM ILHA:** Toda adição de efeito ou dependência tem custo. Three.js ou 3D é estritamente isolado em Astro Island (`client:visible`).
5. **PRINCÍPIO DA MENOR COMPLEXIDADE:**
   - Astro primeiro -> HTML primeiro -> Server-side sob demanda -> JavaScript somente onde necessário -> Banco somente quando necessário -> Microsserviços praticamente NUNCA.
   - Consulte `docs/architecture/DECISION-FRAMEWORK.md` e `docs/architecture/SOLUTIONS-MATRIX.md`.
6. **DOCUMENTAÇÃO LOCAL DO ASTRO (ZERO CONSUMO EXTERNO):**
   - Toda a documentação oficial do Astro está localmente em `docs/astro-reference/` e pode ser consultada via `./tools/astro-doc.sh <termo>`.
   - Consulte o cheat sheet em `docs/astro-reference/ASTRO-CHEAT-SHEET.md`.

## Padrões Técnicos
- **Astro:** Modo `output: 'hybrid'` com `@astrojs/cloudflare`.
- **Acessibilidade:** WCAG 2.2 AA. Sempre incluir Skip Link (`#conteudo-principal`), contraste 4.5:1, touch targets >= 44px.
- **Segurança:** Cabeçalhos `_headers` com CSP e HSTS. Rate limiting em endpoints via `shared/utils/rate-limiter.ts`. Proteção com Cloudflare Turnstile.
- **E-mail:** Resend Mail Hub (`shared/utils/resend-mail.ts` e `./tools/mail.sh`).
- **AI Search / GEO:** Gerar `/llms.txt` e metadados semânticos Schema.org.

## Comandos Úteis
- `sanb-ui list | sanb-ui add <id> --client <slug>`: Injeção de componentes.
- `./tools/mail.sh`: Testes e gestão de e-mail/SMTP.
- `./tools/hq.sh`: Cockpit executivo da empresa.
- `./tools/inspire.sh <categoria>`: Consulta referências visuais e padrões premium (saas, agencia, patterns).
- `./tools/audit-project.sh <caminho>`: Executa auditoria do Release Gate.
- `./tools/stack-advisor.sh <termo>`: Consulta a stack e arquitetura ideal.
- `./tools/astro-doc.sh <termo>`: Busca na documentação offline do Astro.
- `./tools/new-client.sh <slug> "Nome"`: Scaffolds novo cliente.

---

## 🔄 Regra do Espelho Total do Obsidian (Zero Drift)
- O Obsidian (`knowledge/`) reflete 100% de todo o conhecimento do Workspace.
- Se você criar ou alterar qualquer documentação em `docs/`, `operations/`, `clients/`, atualize **obrigatoriamente e no mesmo turno** a respectiva nota no Obsidian com metadados YAML e links bidirecionais.
- Mantenha o ecossistema sempre unificado e sem silos isolados.

---

## 🚀 Diretriz de Versões: Sempre na Última Lançada
- O workspace roda exclusivamente em **Astro 7.3.2+**, **Tailwind CSS v4.3.3+** (`@tailwindcss/vite`) e **@astrojs/cloudflare 14.3.1+**.
- Nunca utilize versões legadas (Astro 4 ou Tailwind 3). Mantenha sempre a vanguarda tecnológica.
