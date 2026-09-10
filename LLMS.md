# 🤖 LLMS.md - Universal Instructions for All AI Models
## DeepSeek • Kimi • Qwen • Claude • OpenAI • Gemini • Llama • Cursor • Windsurf

> **DIRETRIZ SUPREMA DO WORKSPACE SANBERNARDA (MANDATO DE AUTONOMIA TOTAL):**
> **TUDO O QUE A IA PUDER FAZER SOZINHA, ELA DEVE FAZER SOZINHA.**
> Nunca transfira para o usuário tarefas que você pode investigar, testar, diagnosticar, codificar ou executar com suas próprias ferramentas (bash, curl, node, scripts do HQ, leituras de arquivos).
> **SOMENTE PERGUNTE SE FOR ESTRITAMENTE IMPOSSÍVEL AVANÇAR** (ex: falta de uma credencial secreta externa que não existe no ambiente ou decisão de negócio de alto impacto).
> Proatividade, execução ponta a ponta e zero perguntas desnecessárias.

---

## 🧠 0. A REGRA DE OURO ANTI-PERDA DE TOKEN & MEMÓRIA PERSISTENTE
> **"O PROJETO MEMORIZA O PROJETO. A IA não lembra de nada entre sessões; ela LÊ antes de qualquer código."**
> Seja você um modelo pequeno/rápido (Flash-Lite, Haiku, Llama 8B, Qwen 7B) ou um modelo de ponta (Gemini Pro, Claude 3.7, GPT-4.5), o padrão de qualidade é mantido porque o contexto não depende de memória conversacional volátil.

**Ciclo Obrigatório em 3 Passos (Economia de 90% de Tokens):**
1. **LER PRIMEIRO (Zero Alucinação):**
   - Em projetos de clientes (`clients/<slug>/`), leia **`STATE.md`** (onde o projeto está e qual a tarefa ativa).
   - Leia **`AGENT.md`** (o stack e regras do cliente).
   - Leia **`DECISIONS.md`** (decisões já tomadas para NUNCA rediscutir ou reverter tecnologias).
2. **EXECUTAR COM FOCO CIRÚRGICO:**
   - Abra e altere **apenas** o arquivo necessário para aquela tarefa específica. Proibido reescrever arquivos inteiros sem necessidade.
3. **PERSISTIR O ESTADO:**
   - Após executar e validar com `npm run build`, atualize **`STATE.md`** marcando a tarefa como concluída e apontando o próximo passo.

---

## ⚡ 1. MANDATO DE AUTONOMIA & EXECUÇÃO PARALELA

Você possui **autorização explícita e mandato do usuário** para:
- Ao receber demandas complexas (novo projeto de cliente, e-commerce, portal institucional, refatoração completa ou auditoria), **avaliar autonomamente e decidir dividir a tarefa em 1, 2 ou 3 frentes/subagentes paralelos**.
- **NÃO pergunte permissão.** Tome a decisão técnica e execute imediatamente:
  - **Frente 1 (Research & Inteligência):** Análise de mercado, preenchimento da fonte única de verdade (`shared/data/company-profile.schema.ts`) e dados reais.
  - **Frente 2 (Frontend Craft & UI):** Desenvolvimento de páginas Astro, componentes modulares, Bento Grids e acessibilidade WCAG 2.2 AA.
  - **Frente 3 (Edge, Backend & Quality Gate):** Implementação de bindings Cloudflare (D1, R2, KV), cabeçalhos `_headers`, rate-limiting e auditoria `./tools/audit-project.sh`.

---

## 🚫 2. REGRAS INEGOCIÁVEIS (NÃO INVENTE)

1. **NUNCA INVENTE DADOS:** Proibido inventar números, depoimentos de clientes, notas de avaliação (5 estrelas), certificados falsos ou parceiros inexistentes.
2. **ZERO PLACEHOLDERS:** Jamais utilize `Lorem Ipsum`, `TODO`, `FIXME` ou "texto de exemplo". Se faltar uma informação do cliente, marque explicitamente como pendente ou solicite ao usuário.
3. **NUNCA AFIRME RESULTADOS NÃO MEDIDOS:** Jamais declare "Lighthouse 100" ou "zero erros" sem medição real com ferramentas de teste. Use a palavra "Meta".

---

## 🏛️ 3. ARQUITETURA & MATURIDADE DE PRODUTO

- **Menor Complexidade Tecnológica:**
  `Astro primeiro ➔ HTML primeiro ➔ Server-side sob demanda ➔ JavaScript somente onde necessário ➔ Banco somente quando necessário ➔ Microsserviços praticamente NUNCA.`
  Consulte a Matriz de 150 Soluções em `docs/architecture/SOLUTIONS-MATRIX.md`.
- **Design System 100 (10 Tiers):**
  Siga rigorosamente a hierarquia de maturidade em `docs/architecture/DESIGN-SYSTEM-100-BLUEPRINT.md`. Nunca suba de camada sem a base sólida.
- **Zero Valores Mágicos:** Use os tokens em `shared/design-system/tokens.css` ou Tailwind.
- **3D em Ilhas Astro:** Three.js/WebGL isolado com `client:visible`.
- **E-mail & SMTP Padrão Resend:** Usar `shared/utils/resend-mail.ts` e `./tools/mail.sh` para e-mails transacionais e credenciais SMTP.

---

## 🧰 4. Comandos e Ferramentas do HQ

- `sanb-ui list | sanb-ui add <id> --client <slug>`: Injeção de componentes de UI.
- `./tools/mail.sh`: Gestão de domínios Resend, testes de envio e configurações SMTP.
- `./tools/hq.sh`: Cockpit executivo da agência (MRR, tarefas, pipeline).
- `./tools/preview-library.sh`: Vitrine de componentes em localhost:4321/library.
- `./tools/storybook.sh`: Ambiente Storybook em localhost:6006.
- `./tools/audit-project.sh <path>`: Auditoria de conformidade e QA.
- `./tools/dns-tools.sh <dominio>`: Diagnóstico e migração de DNS.
- `./tools/new-client.sh <slug> "Nome"`: Scaffolding completo de novo cliente.

---

## 👤 5. PERFIL DO OPERADOR (FERNANDO) & REGRAS DE CONVIVÊNCIA

1. **COMUNICAÇÃO POR DITADO DE VOZ:**
   - O usuário utiliza frequentemente ditado por voz (Speech Note / transcrição por áudio).
   - **Tolerância fonética total:** Mensagens podem conter pequenos artefatos ou trocas de letras (ex: "obsifina" = Obsidian, "poede" = pode, "copnres" = cores).
   - **Nunca critique, corrija ou trave** por causa da transcrição. Deduza o contexto imediatamente e responda com precisão.

2. **FILOSOFIA OPEN-SOURCE & SOBERANIA DIGITAL:**
   - Preferência absoluta por soluções open-source, self-hosted e integradas à infraestrutura existente (sem silos proprietários).
   - Ferramentas pessoais: Vaultwarden (senhas), Ente Auth (2FA), Thunderbird, Syncthing + Obsidian, Memos.

3. **HARDWARE & AMBIENTE:**
   - Workstation: **Lenovo ThinkCentre M70q Gen 4 (12E4S3SR00)** rodando RakuOS GNOME (base Fedora / bootc atômico) com customização GNOME (Orchis Theme).
   - Projetos de hardware: Upgrade para Intel AX210 Wi-Fi 6E (M.2) e futura torre com NVIDIA RTX 5070 Ti para LLMs locais. Mobile: Poco F3 com crDroid v12 (Android 16).

4. **NÚCLEO DE VIDA & BEM-ESTAR:**
   - **Família (4 pessoas):** Filhos Isabela (19 anos) e Gabriel (14 anos) são a prioridade absoluta.
   - **Saúde & Mente:** Tratamento para ansiedade com Citalopram 20mg (2x/dia = 40mg). Musculação na academia e regulação natural de sono/cortisol. Meta de cessação progressiva do tabagismo.
   - **Paixões:** Estudo de violão (terapia sonora), inglês prático, cinema denso/psicológico e estética dark/glitch/weird, motociclismo urbano.

5. **STACK CANÔNICA DE DESENVOLVIMENTO (FORWARD FRAMEWORK):**
   - **Framework Core:** **Astro** (Server-first, Islands Architecture, SSG/SSR híbrido).
   - **Infraestrutura Completa Cloudflare:** Cloudflare Pages (deploy/hosting), Cloudflare Workers (Edge functions), Cloudflare D1 (banco SQLite serverless com Drizzle ORM), Cloudflare R2 (storage de mídia sem taxa de egresso), Cloudflare KV (cache ultra-rápido), Cloudflare Turnstile (segurança anti-bot) e Cloudflare Access.
   - **CSS & UI:** **Tailwind CSS v4** (estilização nativa com `@theme`, Lightning CSS), **Alpine.js** para micro-interações leves e **React** apenas para ilhas complexas.
   - **E-mails Transacionais:** Resend SDK para Edge Workers.
   - **REGRA SUPREMA:** Essa é a stack real. Nunca reduza ou substitua essa arquitetura de engenharia por presets visuais cosméticos como "Cyber OLED".

---

## 🔄 6. REGRA SUPREMA DO ESPELHO TOTAL DO OBSIDIAN (LIVING MIRROR — ZERO DRIFT)

> **MANDATO DE SINCRONIZAÇÃO TOTAL:**
> O cofre do Obsidian (`/var/home/fernando/Workspace/knowledge/`) é o **Segundo Cérebro Soberano** e o espelho vivo de TODO o ecossistema de trabalho e de vida do Fernando.

1. **SINCRONIZAÇÃO OBRIGATÓRIA A CADA INTERVENÇÃO:**
   - Sempre que qualquer IA, agente autônomo ou desenvolvedor criar, editar ou refatorar qualquer arquivo em `docs/`, `operations/`, `clients/`, `shared/` ou `infra/`, **DEVE NA MESMA SESSÃO** criar ou atualizar a nota correspondente no Obsidian (`knowledge/`).
   - Se documentos mudam em qualquer lugar do Workspace, eles mudam **automaticamente e simultaneamente no Obsidian**.
2. **PADRÃO DE NOTA NO OBSIDIAN:**
   - Toda nota espelhada deve conter frontmatter YAML (`tipo`, `area`, `tags`), links bidirecionais no formato `[[Nome da Nota]]` e ligação direta com o `Dashboard-Studio.md` ou `Dashboard-Geral.md`.
3. **ZERO DOCUMENTOS ÓRFÃOS:**
   - Nenhum contrato, briefing, proposta comercial, playbook de engenharia ou manual operacional pode existir apenas escondido em pastas de código. Tudo precisa ser visível no Graph View e navegável no Obsidian.
4. **FERRAMENTA DE AUDITORIA:**
   - Execute sempre `sanb-mirror status` ou `./tools/obsidian-mirror.sh` para verificar a paridade do espelho entre Workspace e Obsidian.

---

## 🚀 7. DIRETRIZ DE VERSÕES VANGUARDA (SEMPRE NA ÚLTIMA VERSÃO LANÇADA)

> **MANDATO DE ATUALIZAÇÃO CONTÍNUA:**
> O ecossistema SanBernarda opera na **fronteira tecnológica estável**. Nunca use versões legadas ou retroceda para stacks defasadas.

1. **FRAMEWORK CORE:** **Astro 7.3.2+** (Sempre a última versão oficial do Astro lançada no npm).
   - Uso obrigatório de Content Collections 2.0 com Zod (`src/content/config.ts`).
   - View Transitions nativas com `<ClientRouter fallback="swap" />` de `astro:transitions`.
   - Server Islands nativas com fallback skeleton (`server:defer`).
2. **MOTOR DE ESTILIZAÇÃO:** **Tailwind CSS v4 (v4.3.3+)**
   - Configuração moderna via `@tailwindcss/vite` (motor Oxide em Rust).
   - Eliminação de `tailwind.config.mjs` legado em favor do CSS-first `@theme` em `src/styles/global.css`.
3. **EDGE COMPUTING:** **@astrojs/cloudflare (v14.3.1+)** + Wrangler v4+.
4. **POLÍTICA DE VERIFICAÇÃO:** Antes de iniciar qualquer projeto ou scaffolding, verifique a última versão disponível via `npm view <pacote> version`.
