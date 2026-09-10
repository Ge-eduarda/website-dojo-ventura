# Briefing de Projeto: Dojo Ventura — Centro de Treinamento de Karatê

- **Cliente:** Dojo Ventura
- **Slug:** dojoventura
- **Cidade:** Regente Feijó — Oeste Paulista (SP)
- **Data de Início:** 2026-09-09
- **Status:** Discovery (Fase 2)
- **Fonte:** Relato por voz do Fernando em 2026-09-09 (transcrição fonética tolerada)

## 1. Objetivo do Projeto
Site institucional + plataforma de apoio financeiro para:
1. Apresentar a escola de karatê (aulas, filosofia, ação social com jovens de Regente Feijó).
2. Captar apoio financeiro regional/nacional para viagens dos atletas a torneios fora de SP, Brasil e mundo — meta: Seleção Brasileira.
3. Dar visibilidade aos atletas de alto desempenho (página/seção dedicada com medalhas representando o Oeste Paulista).

## 2. Público-Alvo & Posicionamento
- **Público 1 — Alunos/famílias locais:** jovens de Regente Feijó e região; tom acolhedor, disciplinado, formativo.
- **Público 2 — Apoiadores/patrocinadores:** pessoas físicas e empresas da região + qualquer apoiador do Brasil; tom de causa social + esporte de alto rendimento.
- **Diferencial:** papel social real na cidade + equipe competitiva com atleta na Seleção Brasileira (Ssinesio — confirmar grafia).
- **Proibido inventar:** nenhum resultado, medalha, depoimento ou número sem confirmação do responsável.

## 3. Identidade Visual (extraída da logo enviada)
- Vermelho vivo: `#E30613` (escudo)
- Preto: `#0A0A0A` (faixa + tipografia)
- Dourado: `#D9A027` (borda do escudo)
- Branco: `#FFFFFF` (fundo + pictograma atleta)
- Contorno vermelho na tipografia + sombra cinza.
- Logo original: guardar em `assets/brand/logo-dojo-ventura.png` (PENDENTE — salvar imagem enviada no chat).
- Tipografia: display condensada estilo esportivo (a definir; fallback Plus Jakarta Sans + Space Grotesk do template).

## 4. Arquitetura de Informação (proposta)
- `/` Home: hero da causa (atletas precisam viajar) + CTA Apoiar + escola + atletas destaque + como ajudar + contato.
- `/atletas` — Atletas de Alto Desempenho: cards com foto, categoria, conquistas confirmadas, selo "Seleção Brasileira" (Ssinesio).
- `/apoiar` — Apoie a Equipe: PIX (chave PENDENTE), depósito/transferência (dados PENDENTES), botão vaquinha online (URL PENDENTE), transparência (prestação de contas).
- `/escola` ou seções na home: aulas/horários (PENDENTE), responsável/sensei (nome PENDENTE), ação social.
- `/contato`: WhatsApp (PENDENTE), endereço do dojo (PENDENTE), formulário Turnstile + Resend.

## 5. Seções & Funcionalidades Obrigatórias
- [ ] Hero da causa + CTA duplo (Quero Apoiar / Conhecer Atletas)
- [ ] Barra PIX sempre visível (copia-e-cola + QR quando houver chave)
- [ ] Cards de atletas via Content Collection `athletes` (foto, categoria, títulos confirmados)
- [ ] Botão vaquinha online (link externo — PENDENTE)
- [ ] Depoimentos reais apenas com autorização
- [ ] Formulário de contato/apadrinhamento com Turnstile + rate limiting + Resend
- [ ] Sticky Mobile CTA WhatsApp + Apoiar
- [ ] SEO local (Regente Feijó, Oeste Paulista, karatê) + Schema.org SportsClub/Donation
- [ ] Acessibilidade WCAG 2.2 AA, `_headers` CSP/HSTS, Core Web Vitals

## 6. Dados PENDENTES (impossível avançar sem eles — perguntar ao responsável)
1. Nome do sensei/dono + bio curta + foto
2. WhatsApp/telefone, e-mail, endereço do dojo, Instagram, CNPJ (se houver)
3. Chave PIX (tipo + valor) + dados bancários p/ depósito + titular
4. URL da vaquinha online + meta/arrecadado (números reais)
5. Lista de atletas: nome, categoria, foto, títulos confirmados (ano/torneio/medalha) + grafia correta "Ssinesio"
6. Horários/planos das aulas + como se matricular
7. Logo em alta resolução (PNG/SVG sem fundo) + fotos reais do dojo/treinos
