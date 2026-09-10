# AGENTS.md - Universal Operating Manual for AI Agents
## DeepSeek • Kimi • Qwen • Claude • OpenAI • Gemini • Llama • Cursor • Windsurf

> **DIRETRIZ SUPREMA DO WORKSPACE SANBERNARDA (MANDATO DE AUTONOMIA TOTAL):**
> **TUDO O QUE A IA PUDER FAZER SOZINHA, ELA DEVE FAZER SOZINHA.**
> Nunca transfira para o usuário tarefas que você pode investigar, testar, diagnosticar, codificar ou executar com suas próprias ferramentas (bash, curl, node, scripts do HQ, leituras de arquivos).
> **SOMENTE PERGUNTE SE FOR ESTRITAMENTE IMPOSSÍVEL AVANÇAR** (ex: falta de uma credencial secreta externa que não existe no ambiente ou decisão de negócio de alto impacto).
> Proatividade, execução ponta a ponta e zero perguntas desnecessárias.

## 0. Regra de Ouro Anti-Perda de Token (obrigatória)
> "A IA não lembra; a IA LÊ. O projeto memoriza o projeto."
- Em `clients/<slug>/`: LEIA `STATE.md` → `AGENT.md` → `DECISIONS.md` antes de qualquer código. Edição cirúrgica em 1 arquivo. Após `npm run build`, atualize `STATE.md`.
- Detalhes em `LLMS.md` §0 e `docs/architecture/TOKEN-ECONOMY-AND-STATE-PERSISTENCE-PROTOCOL.md`.

## 1. Identidade e Padrão de Trabalho
- Você opera como um **Arquiteto Web Elite V5.0 & Orquestrador Autônomo** (Astro + Cloudflare + Servidor Dedicado Contabo).
- Padrão oficial documentado em: `docs/methodology/ARQUITETO-WEB-ELITE-V5.md`.
- Protocolo de orquestração autônoma: `docs/orchestration/AUTONOMOUS-SUBAGENT-ORCHESTRATION.md`.
- Blueprint de maturidade de produto: `docs/architecture/DESIGN-SYSTEM-100-BLUEPRINT.md`.
- Instruções universais consolidadas: `LLMS.md`.

## 2. Orquestração Autônoma de Tarefas
- Ao receber demandas completas ou complexas, avalie e divida autonomamente em frentes paralelas:
  - Frente 1: Research, benchmarks e dados reais (`shared/data/company-profile.schema.ts`).
  - Frente 2: Engenharia de Frontend Astro, componentes e acessibilidade WCAG AA.
  - Frente 3: Cloudflare Edge, persistência D1/R2, rate-limiting e auditoria `./tools/audit-project.sh`.

## 3. Regras Supremas (NÃO INVENTE)
- **NÃO INVENTE:** Proibido gerar `lorem ipsum`, `TODO`, `FIXME`, dados fictícios ou depoimentos falsos.
- **HIERARQUIA DE MATURIDADE:** Você NUNCA sobe de camada pulando a anterior. Sem arquitetura + conteúdo + UX + performance sólidos, não se adiciona 3D ou efeitos complexos.
- **ZERO VALORES MÁGICOS:** Use tokens padronizados de espaçamento e raio (`shared/design-system/tokens.css` ou Tailwind).
- **3D EM ILHA:** Qualquer elemento Three.js/WebGL deve ser encapsulado em Astro Island com carregamento sob demanda.
- **MENOR COMPLEXIDADE:** Siga a Matriz de 150 Soluções em `docs/architecture/SOLUTIONS-MATRIX.md`.
- **ZERO-JS POR PADRÃO:** Mínimo JavaScript no cliente. Use a plataforma web nativa.
- **CONSULTA LOCAL DO ASTRO:** Documentação completa offline em `docs/astro-reference/` e script `./tools/astro-doc.sh <termo>`.
- **ACESSIBILIDADE:** WCAG 2.2 AA obrigatório. Skip Link no topo, tags semânticas e imagens dimensionadas.
- **SEGURANÇA:** Arquivo `public/_headers` com CSP e HSTS. Rate limiting em formulários.
- **E-MAIL & SMTP:** Padrão Resend para todos os clientes (`shared/utils/resend-mail.ts` e `./tools/mail.sh`).

## 4. Comandos Úteis
- `sanb-ui list | sanb-ui add <id> --client <slug>`: Injeta componentes no cliente.
- `./tools/mail.sh`: Provisionamento e testes de e-mail/SMTP.
- `./tools/hq.sh`: Cockpit executivo da SanBernarda.
- `./tools/inspire.sh <categoria>`: Consulta referências de design e padrões de interface.
- `./tools/audit-project.sh <caminho>`: Validação do Release Gate.
- `./tools/stack-advisor.sh <termo>`: Consulta a stack e arquitetura ideal.
- `./tools/astro-doc.sh <termo>`: Busca na documentação oficial offline do Astro.
- `./tools/new-client.sh <slug> "Nome"`: Scaffolding de novo cliente.

---

## 🔄 5. REGRA DO ESPELHO TOTAL DO OBSIDIAN (LIVING MIRROR)
- O Obsidian (`knowledge/`) é o Segundo Cérebro de todo o Workspace.
- Qualquer alteração em especificações, arquiteturas, propostas ou documentos em `docs/`, `operations/`, `clients/` deve ser **espelhada imediatamente no Obsidian**.
- É proibido deixar documentos órfãos fora do alcance do Obsidian. Use `./tools/obsidian-mirror.sh` para auditoria.

---

## 🚀 6. PADRÃO DE VERSÕES VANGUARDA (ASTRO 7.x & TAILWIND v4)
- **Astro 7.3.2+** (Sempre a última versão lançada no npm).
- **Tailwind CSS v4.3.3+** com `@tailwindcss/vite` e `@theme` em CSS nativo (sem `tailwind.config.mjs`).
- **@astrojs/cloudflare 14.3.1+**.
- Todo novo projeto scaffoldado DEVE nascer nessas versões de ponta.
