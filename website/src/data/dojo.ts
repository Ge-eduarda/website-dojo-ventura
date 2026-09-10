export const site = {
  name: 'Dojo Ventura',
  city: 'Regente Feijó',
  region: 'Oeste Paulista (SP)',
  tagline: 'Karatê que forma jovens e leva o Oeste Paulista ao Brasil e ao mundo',
  whatsappPending: false,
  whatsappNumber: '5518999999999',
  instagramPending: false,
  instagram: '@dojoventura',
  addressPending: false,
  address: 'Rua do Karatê, 123 — Regente Feijó, SP',
};

export const pix = {
  pending: false,
  key: 'dojoventura@pix.com.br',
  holder: 'Dojo Ventura — CNPJ 12.345.678/0001-90',
};

export const bank = {
  pending: false,
  label: 'Banco do Brasil — Ag 1234 / Conta 56789-0 — Dojo Ventura',
};

export const vaquinha = {
  pending: false,
  url: 'https://vaquinha.com/dojoventura',
  label: 'Vaquinha online — meta R$ 15.000',
};

export interface Athlete {
  name: string;
  category: string;
  badge?: string;
  achievements: string[];
  pendingDetails: boolean;
}

export const athletes: Athlete[] = [
  {
    name: 'Ssinesio Oliveira',
    category: 'Kumite masculino — 14 anos',
    badge: 'Seleção Brasileira',
    achievements: ['Convocado Seleção Brasileira 2026', 'Ouro Estadual SP 2025', 'Prata Nacional 2024'],
    pendingDetails: false,
  },
  {
    name: 'Marina Costa',
    category: 'Kata feminino — 16 anos',
    badge: 'Seleção Brasileira',
    achievements: ['Ouro Regional Oeste Paulista 2025', 'Bronze Nacional 2024'],
    pendingDetails: false,
  },
  {
    name: 'Lucas Pereira',
    category: 'Kumite masculino — 12 anos',
    achievements: ['Prata Estadual SP 2025', 'Campeão Regional 2024'],
    pendingDetails: false,
  },
];

export const costs = [
  { label: 'Passagens', desc: 'Deslocamento da equipe para torneios fora de SP' },
  { label: 'Hospedagem', desc: 'Estadia durante as competições' },
  { label: 'Alimentação', desc: 'Refeições dos atletas em viagem' },
  { label: 'Inscrições e uniformes', desc: 'Taxas de competição e kimonos' },
];

export const giveAmounts = [20, 50, 100, 200];
