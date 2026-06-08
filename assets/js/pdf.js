// ============================================================
//  pdf.js — Geração de PDF e envio por e-mail
// ============================================================

/* ── Gera PDF do Painel do Mentor e envia via Google Apps Script ── */
async function gerarEEnviarPDFMentor(d) {
  const painelOriginal = document.getElementById('telaMentor');
  if (!painelOriginal) {
    console.warn('Painel do mentor não encontrado no DOM.');
    return;
  }

  try {
    // 1. Cria container off-screen com largura fixa (evita bugs de scroll/animação)
    const printContainer = document.createElement('div');
    printContainer.style.cssText =
      'position:absolute;top:-99999px;left:0;width:800px;background:#fff;z-index:-100;';
    printContainer.innerHTML = painelOriginal.outerHTML;
    const painelClone = printContainer.firstElementChild;

    // 2. Prepara o clone (abre abas, esconde botões)
    const abasMenu = painelClone.querySelector('.abas');
    const abasContent = painelClone.querySelectorAll('.aba-content');
    const botoes = painelClone.querySelectorAll('.print-btn, .mentor-link');

    if (abasMenu) abasMenu.style.display = 'none';
    botoes.forEach(btn => btn.style.display = 'none');
    abasContent.forEach(aba => {
      aba.style.display = 'block';
      aba.style.opacity = '1';
      aba.style.visibility = 'visible';
    });

    // 3. Corrige SVGs com gradientes (html2canvas bug)
    painelClone.querySelectorAll('svg').forEach(svg => {
      svg.querySelectorAll('[fill^="url("]').forEach(p => p.setAttribute('fill', '#21C4F7'));
    });

    // 4. Injeta estilos de normalização para o PDF
    const styleFix = document.createElement('style');
    styleFix.textContent = `
      * { background-image: none !important; -webkit-text-fill-color: initial !important; }
      .painel-wrap, .painel-header, .respostas-wrap, .ferramentas-wrap, .resp-bloco, .mes-card { background-color: #ffffff !important; }
      .tag.base, .section-num, .mes-badge, .painel-badge, .obrigado-icon { background-color: #21C4F7 !important; color: #fff !important; }
      .tag.extra { background-color: #ABD905 !important; color: #fff !important; }
      .painel-header::before { background: #21C4F7 !important; }
      .ferramenta-item.base { border-left-color: #21C4F7 !important; }
      .ferramenta-item.extra { border-left-color: #ABD905 !important; }
    `;
    painelClone.appendChild(styleFix);

    // 5. Insere no DOM invisível e aguarda renderização
    document.body.appendChild(printContainer);
    await new Promise(r => setTimeout(r, 600));

    // 6. Captura com html2canvas
    const canvas = await html2canvas(painelClone, {
      useCORS: true,
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
    });

    document.body.removeChild(printContainer);

    if (canvas.width === 0 || canvas.height === 0) {
      throw new Error('Canvas vazio. O clone off-screen não renderizou corretamente.');
    }

    // 7. Cria PDF com divisão inteligente de páginas
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a0' });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const margin = 0;
    const imgW = pageW - margin * 2;
    const ratio = canvas.width / canvas.height;
    const imgH = imgW / ratio;
    const imgData = canvas.toDataURL('image/jpeg', 0.85);

    if (imgH <= (pageH - margin * 2)) {
      pdf.addImage(imgData, 'JPEG', margin, margin, imgW, imgH);
    } else {
      const pxPorPagina = (canvas.width / imgW) * (pageH - margin * 2);
      let offsetY = 0;
      while (offsetY < canvas.height) {
        const fatia = document.createElement('canvas');
        fatia.width = canvas.width;
        fatia.height = Math.min(pxPorPagina, canvas.height - offsetY);
        const ctx = fatia.getContext('2d');
        ctx.drawImage(canvas, 0, -offsetY);
        const fatiaData = fatia.toDataURL('image/jpeg', 0.85);
        const fatiaH = (fatia.height / canvas.width) * imgW;
        pdf.addImage(fatiaData, 'JPEG', margin, margin, imgW, fatiaH);
        offsetY += pxPorPagina;
        if (offsetY < canvas.height) pdf.addPage();
      }
    }

    // 8. Envia para o Google Apps Script
    const pdfBase64 = pdf.output('datauristring').split(',')[1];
    const formPDF = new FormData();
    formPDF.append('nome', d.nome);
    formPDF.append('email', d.email);
    formPDF.append('acao', 'enviar_pdf_mentor');
    formPDF.append('painel_pdf_base64', pdfBase64);
    formPDF.append('painel_pdf_nome', `Painel_Mentor_${d.nome.replace(/\s+/g, '_')}.pdf`);

    await fetch(
      'https://script.google.com/macros/s/AKfycbxa4tSXa_Zv0R5LlcbOpIWWD18Y4ZLB-r3-PcqL04wrAkomYDD7li4sQsmaXSoivI_rqg/exec',
      { method: 'POST', body: formPDF }
    );

    console.log('✅ PDF do Painel gerado e enviado com sucesso.');

  } catch (e) {
    console.error('Erro ao gerar/enviar PDF:', e);
  }
}

/* ── Envio do painel por e-mail (botão do painel) ── */
async function enviarPainelPorEmail() {
  const d = dadosFormulario;
  if (!d || !d.nome) {
    alert('Nenhum diagnóstico disponível para enviar.');
    return;
  }
  await gerarEEnviarPDFMentor(d);
  alert('Relatório enviado por e-mail com sucesso!');
}

/* ── Imprimir / salvar como PDF (janela limpa) ── */
function imprimirPainelLimpo() {
  const painel = document.getElementById('telaMentor');
  if (!painel) { alert('Painel não disponível.'); return; }

  const estilos = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
    .map(el => el.outerHTML)
    .join('\n');

  const janela = window.open('', '_blank', 'width=900,height=700');
  janela.document.write(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Painel do Mentor — Linkae</title>
  ${estilos}
  <style>
    body { margin: 0; padding: 20px; background: #fff; }
    #telaMentor { display: block !important; }
    .print-btn, #btnEnviarEmailMentor, .mentor-link { display: none !important; }
    @media print {
      body { padding: 0; }
      @page { margin: 15mm; }
    }
  </style>
</head>
<body>
  <div id="telaMentor">
    ${painel.innerHTML}
  </div>
  <script>
    window.onload = function(){ window.print(); }
  <\/script>
</body>
</html>`);
  janela.document.close();
}
