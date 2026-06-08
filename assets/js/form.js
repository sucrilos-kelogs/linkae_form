// ============================================================
//  form.js — Estado, progresso, escala, upload e envio
// ============================================================

/* ── Estado global ── */
const scaleValues = {};
let dadosFormulario = {};
let cvBase64Data = '';
let cvFileName = '';

/* ── Seleção de escala ── */
function selectScale(btn, group) {
  document.querySelectorAll(`#${group} .scale-btn`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  scaleValues[group] = parseInt(btn.dataset.val);
  updateProgress();
}

/* ── Estilo de opções selecionadas ── */
document.querySelectorAll('.option input').forEach(inp => {
  inp.addEventListener('change', () => {
    updateProgress();
    inp.closest('.option').classList.toggle('selected', inp.checked);
    if (inp.type === 'radio') {
      document.querySelectorAll(`input[name="${inp.name}"]`).forEach(r => {
        if (r !== inp) r.closest('.option').classList.remove('selected');
      });
    }
  });
});

document.querySelectorAll('input[type="text"], textarea').forEach(i =>
  i.addEventListener('input', updateProgress)
);

/* ── Barra de progresso ── */
function updateProgress() {
  const c = [
    document.getElementById('nome').value.trim(),
    document.querySelector('input[name="tempoCargo"]:checked'),
    document.getElementById('objetivo').value.trim(),
    document.querySelector('input[name="situacao"]:checked'),
    scaleValues['autoconhecimento'],
    document.querySelector('input[name="valores"]:checked'),
    document.querySelector('input[name="crencas"]:checked'),
    document.querySelector('input[name="lidera"]:checked'),
    scaleValues['comunicacao'],
    scaleValues['foco'],
    document.querySelector('input[name="visao"]:checked'),
    document.querySelector('input[name="proposito"]:checked'),
  ];
  document.getElementById('progressFill').style.width =
    (c.filter(Boolean).length / c.length * 100) + '%';
}

/* ── Upload de currículo ── */
function handleFile(input, targetId) {
  if (input.files?.[0]) {
    const file = input.files[0];
    cvFileName = file.name;
    document.getElementById(targetId).innerHTML =
      `<span class="file-tag">📎 ${file.name}</span>`;
    const reader = new FileReader();
    reader.onload = e => { cvBase64Data = e.target.result.split(',')[1]; };
    reader.readAsDataURL(file);
  }
}

/* ── Helpers de leitura do formulário ── */
function getVal(name) {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || null;
}
function getCheckboxVals(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(e => e.value);
}

/* ── Enviar formulário ── */
async function enviarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  if (!nome) { alert('Por favor, informe seu nome antes de enviar.'); return; }

  const emailMentorado = document.getElementById('email').value.trim();
  if (!emailMentorado) { alert('Por favor, informe seu e-mail antes de enviar.'); return; }

  const btn = document.querySelector('.submit-btn');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  dadosFormulario = {
    nome,
    email: emailMentorado,
    whatsapp: document.getElementById('whatsapp').value.trim(),
    cargo: document.getElementById('cargo').value.trim(),
    dataNasc: document.getElementById('dataNasc').value || '',
    tempoCargo: getVal('tempoCargo'),
    objetivo: document.getElementById('objetivo').value.trim(),
    situacoes: getCheckboxVals('situacao'),
    autoconhecimento: scaleValues['autoconhecimento'] || 3,
    valores: getVal('valores'),
    crencas: getVal('crencas'),
    lidera: getVal('lidera'),
    comunicacao: scaleValues['comunicacao'] || 3,
    percepcao: getVal('percepcao'),
    foco: scaleValues['foco'] || 3,
    planoacao: getVal('planoacao'),
    visao: getVal('visao'),
    proposito: getVal('proposito'),
    linkedin: getVal('linkedin'),
    linkedinUrl: document.getElementById('linkedinUrl').value.trim(),
    cv: getVal('cv'),
    disc: calcularDisc(),
    linguagens: calcularLinguagens(),
    sustentacao: {
      sust1: getVal('sust1'),
      sust2: getVal('sust2'),
      sust3: getVal('sust3'),
      sust4: getVal('sust4'),
      sustInegociavel: document.getElementById('sustInegociavel').value.trim(),
      sust6: getVal('sust6'),
      sust7: getVal('sust7'),
      sust8: getVal('sust8'),
      sustDesgaste: document.getElementById('sustDesgaste').value.trim(),
    },
    pontoForte: document.getElementById('pontoForte').value.trim(),
    desafio: document.getElementById('desafio').value.trim(),
    extra: document.getElementById('extra').value.trim(),
  };

  // Exibe confirmação ao mentorado
  mostrarObrigado(dadosFormulario);

  // Renderiza painel do mentor + gera PDF
  abrirPainelMentor(true);
}

/* ── Mensagem de confirmação para o mentorado ── */
function mostrarObrigado(d) {
  document.getElementById('obgNome').textContent = d.nome.split(' ')[0];
  const sits = d.situacoes || [];
  let msg = '';
  if (sits.includes('proposito'))
    msg = 'Sentir que falta algo — mesmo quando tudo parece estar no lugar — é um sinal que vale ouvir. <span class="destaque">É exatamente aí que vamos trabalhar.</span>';
  else if (sits.includes('lideranca'))
    msg = 'Liderança se desenvolve na prática, e o fato de você já ter identificado isso como prioridade é um ótimo ponto de partida. <span class="destaque">Vamos trabalhar isso juntos.</span>';
  else if (sits.includes('visibilidade'))
    msg = 'Ter bons resultados e não ser reconhecido(a) é uma das situações mais frustrantes na carreira. Isso tem solução. <span class="destaque">A gente vai construir isso com você.</span>';
  else if (sits.includes('transicao'))
    msg = 'Mudar de carreira traz incerteza, mas também abre possibilidades que a gente nem imagina. <span class="destaque">Você já deu o primeiro passo.</span>';
  else if (sits.includes('equilibrio'))
    msg = 'Perceber que precisa de mais equilíbrio já é meio caminho andado. <span class="destaque">Vamos trabalhar nisso com calma e consistência.</span>';
  else
    msg = 'Suas respostas mostram muito sobre onde você está e para onde quer ir. <span class="destaque">Tenho bastante para trabalhar com você.</span>';

  document.getElementById('obgMsg').innerHTML = `
    <p>Recebi tudo com atenção${d.objetivo ? ' — o que você compartilhou sobre seus objetivos vai guiar toda a nossa conversa' : ''}.</p>
    <p>${msg}</p>
    <p>Vou analisar o seu MAPA© antes da nossa primeira conversa. <strong>A partir daqui, tudo é construído especialmente para você.</strong></p>
    <p style="color:var(--muted);font-size:14px">Fique de olho no WhatsApp. <span class="destaque">Em breve entro em contato para dar início à jornada.</span></p>
  `;

  document.getElementById('telaFormulario').style.display = 'none';
  document.getElementById('telaObrigado').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
