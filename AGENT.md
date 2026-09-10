# 🤖 AGENT.md — Instruções de Execução para este Projeto
## Cliente: Dojoventura (dojoventura)
## Regra de Ouro: "A IA não lembra; a IA LÊ antes de qualquer código."

---

### 1. 🛡️ Identidade & Regras Inegociáveis deste Projeto
- **Cliente Formal:** Dojoventura
- **Stack Obrigatória:** Astro 7.3.2 (Bleeding Edge) + Tailwind CSS v4.3.3 (CSS-first `@theme`) + Cloudflare Pages & Turnstile.
- **Proibições Absolutas:**
  - ❌ NUNCA use `tailwind.config.mjs` ou Tailwind v3. Tudo é `@import "tailwindcss";` em `src/styles/global.css`.
  - ❌ NUNCA invente números, estatísticas falsas ou depoimentos fictícios.
  - ❌ NUNCA use `Lorem Ipsum` ou placeholders genéricos.
  - ❌ NUNCA instale bibliotecas pesadas sem autorização. Zero JavaScript por padrão.

---

### 2. ⚡ Protocolo de Economia de Token (Modelo Pequeno ou Grande)
Antes de escrever qualquer linha de código:
1. **LEIA** `STATE.md` (apenas 50 linhas) para saber exatamente a fase atual e a tarefa ativa.
2. **LEIA** `docs/briefing.md` para coletar os dados reais da empresa (cores, telefones, CNPJ).
3. **LEIA** `DECISIONS.md` para nunca rediscutir ou reverter decisões técnicas já tomadas.
4. **EXECUTE** a alteração cirurgicamente apenas nos arquivos necessários.
5. **ATUALIZE** `STATE.md` com a tarefa concluída e o resultado do build.
