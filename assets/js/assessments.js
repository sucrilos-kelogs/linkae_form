// ============================================================
//  assessments.js — Cálculo DISC e 5 Linguagens do Amor
// ============================================================

/* ── DISC ── */
function calcularDisc() {
  const s = { D: 0, I: 0, S: 0, C: 0 };
  for (let i = 1; i <= 16; i++) {
    const v = getVal('disc' + i);
    if (v) s[v]++;
  }
  const t = s.D + s.I + s.S + s.C;
  if (!t) return null;
  const p = {
    D: Math.round(s.D / t * 100),
    I: Math.round(s.I / t * 100),
    S: Math.round(s.S / t * 100),
    C: Math.round(s.C / t * 100),
  };
  const pr = Object.keys(s).reduce((a, b) => s[a] > s[b] ? a : b);
  const sg = Object.keys(s).filter(k => k !== pr).reduce((a, b) => s[a] > s[b] ? a : b);
  return { scores: s, pct: p, principal: pr, segundo: sg, total: t };
}

function descDisc(p) {
  const d = {
    D: {
      nome: 'Dominância (D)', emoji: '🦁',
      pontos_fortes: 'Liderança assertiva, foco em resultados, rapidez na decisão.',
      pontos_atencao: 'Pode ser impaciente ou desconsiderar impacto emocional.',
      lideranca: 'Lidera pelo exemplo. Prefere ambientes de alta performance.',
      dev: 'Desenvolver escuta ativa, empatia e paciência.',
    },
    I: {
      nome: 'Influência (I)', emoji: '🌟',
      pontos_fortes: 'Comunicação, carisma, criatividade, engajamento.',
      pontos_atencao: 'Pode ser desorganizado(a) ou evitar conflitos necessários.',
      lideranca: 'Lidera pela inspiração e conexão emocional.',
      dev: 'Desenvolver organização, foco e feedbacks difíceis.',
    },
    S: {
      nome: 'Estabilidade (S)', emoji: '🌳',
      pontos_fortes: 'Escuta ativa, confiabilidade, mediação de conflitos.',
      pontos_atencao: 'Pode ter dificuldade com mudanças e confrontos.',
      lideranca: 'Lidera pela confiança e relacionamentos sólidos.',
      dev: 'Desenvolver assertividade e adaptabilidade.',
    },
    C: {
      nome: 'Conformidade (C)', emoji: '🔬',
      pontos_fortes: 'Pensamento crítico, atenção a detalhes, rigor técnico.',
      pontos_atencao: 'Pode ser perfeccionista ou difícil de agir com incerteza.',
      lideranca: 'Lidera pela competência técnica e credibilidade.',
      dev: 'Desenvolver flexibilidade e habilidades relacionais.',
    },
  };
  return d[p] || null;
}

/* ── 5 Linguagens ── */
function calcularLinguagens() {
  const s = { PA: 0, TQ: 0, PR: 0, AS: 0, TF: 0 };
  for (let i = 1; i <= 10; i++) {
    const v = getVal('ling' + i);
    if (v) s[v]++;
  }
  const t = Object.values(s).reduce((a, b) => a + b, 0);
  if (!t) return null;
  const p = {};
  Object.keys(s).forEach(k => p[k] = Math.round(s[k] / t * 100));
  const pr = Object.keys(s).reduce((a, b) => s[a] > s[b] ? a : b);
  const sg = Object.keys(s).filter(k => k !== pr).reduce((a, b) => s[a] > s[b] ? a : b);
  return { scores: s, pct: p, principal: pr, segundo: sg, total: t };
}

function descLing(c) {
  const d = {
    PA: {
      nome: 'Palavras de Afirmação', emoji: '💬', cor: '#8e44ad',
      como_motivar: 'Reconheça publicamente. Dê feedbacks positivos frequentes.',
      como_lidera: 'Motiva com elogios. Sabe como palavras impactam pessoas.',
      atencao: 'Pode desmotivar em ambientes silenciosos.',
      aplicacao: 'Reforce o progresso com afirmações específicas.',
    },
    TQ: {
      nome: 'Tempo de Qualidade', emoji: '⏱️', cor: '#27ae60',
      como_motivar: 'Dedique tempo exclusivo. Reuniões individuais regulares.',
      como_lidera: 'Lidera estando presente. Cria conexões profundas.',
      atencao: 'Pode sentir-se negligenciado(a) quando outros estão ocupados.',
      aplicacao: 'Esteja 100% presente nas sessões.',
    },
    PR: {
      nome: 'Recebimento de Presentes', emoji: '🎁', cor: '#e67e22',
      como_motivar: 'Celebre com gestos concretos — bônus, brindes, cursos.',
      como_lidera: 'Reconhece equipe com ações concretas.',
      atencao: 'Pode sentir-se desvalorizado(a) sem reconhecimento tangível.',
      aplicacao: 'Sugira materiais e livros como parte da mentoria.',
    },
    AS: {
      nome: 'Atos de Serviço', emoji: '🤝', cor: '#2980b9',
      como_motivar: 'Ofereça suporte concreto e remova obstáculos.',
      como_lidera: 'Lidera servindo. Coloca a mão na massa.',
      atencao: 'Frustra-se com líderes que falam mas não ajudam.',
      aplicacao: 'Crie planos de ação práticos e ofereça recursos úteis.',
    },
    TF: {
      nome: 'Toque Físico', emoji: '🫱', cor: '#c0392b',
      como_motivar: 'Mantenha encontros presenciais sempre que possível.',
      como_lidera: 'Lidera com presença. Cria ambientes acolhedores.',
      atencao: 'Ambientes remotos podem gerar sensação de desconexão.',
      aplicacao: 'Priorize sessões presenciais quando possível.',
    },
  };
  return d[c] || null;
}
