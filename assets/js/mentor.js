// ============================================================
//  mentor.js — Controle do Painel do Mentor (abas, senha)
// ============================================================

/* ── Abre o painel ── */
function abrirPainelMentor(gerarPDF) {
  if (!dadosFormulario.nome) return;
  const d = dadosFormulario;

  document.getElementById('painelNome').textContent = d.nome;
  document.getElementById('separadorMentor').style.display = 'flex';
  document.getElementById('telaMentor').style.display = 'block';

  renderRespostas(d);
  renderDiagnostico(d);
  renderFerramentas(d);

  setTimeout(() =>
    document.getElementById('separadorMentor').scrollIntoView({ behavior: 'smooth', block: 'start' }),
    400
  );

  if (gerarPDF) {
    setTimeout(() => gerarEEnviarPDFMentor(d), 800);
  }
}

/* ── Troca de abas ── */
function trocarAba(id, el) {
  document.querySelectorAll('.aba').forEach(a => a.classList.remove('ativa'));
  document.querySelectorAll('.aba-content').forEach(c => c.classList.remove('ativa'));
  el.classList.add('ativa');
  document.getElementById('tab' + id.charAt(0).toUpperCase() + id.slice(1)).classList.add('ativa');
}

/* ── Verificação de senha (desativada para testes) ── */
function verificarSenha() {
  document.getElementById('modalSenha').classList.remove('open');
  abrirPainelMentor();
}
