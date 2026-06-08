# Linkae — Diagnóstico de Mentoria (MAPA©)

Formulário de diagnóstico de mentoria baseado na **Metodologia CEP©** da Linkae.  
Publicado via **GitHub Pages** — sem backend, sem build step, deploy imediato.

---

## O que é

O **MAPA©** (Metodologia CEP — etapa Clareza) é um formulário com 11 blocos de perguntas que gera, ao final, um **Painel do Mentor** automatizado com:

- Diagnóstico completo das respostas
- Análise DISC + 5 Linguagens do Amor
- Trilha de desenvolvimento de 6 meses personalizada
- Geração de PDF e envio por e-mail via Google Apps Script

---

## Estrutura do repositório

```
linkae-diagnostico/
├── index.html                  ← Página principal (formulário + painel)
├── README.md
└── assets/
    ├── css/
    │   └── main.css            ← Todos os estilos
    └── js/
        ├── assessments.js      ← Cálculo DISC + 5 Linguagens
        ├── form.js             ← Estado, progresso, upload, envio
        ├── painel.js           ← Render do Painel do Mentor
        ├── pdf.js              ← Geração de PDF + envio via GAS
        └── mentor.js           ← Controle de abas e senha
```

---

## Publicando no GitHub Pages

1. Faça upload ou fork deste repositório.
2. Acesse **Settings → Pages**.
3. Em **Source**, selecione branch `main`, pasta `/ (root)`.
4. Clique **Save**.

A URL pública será:
```
https://<seu-usuario>.github.io/<nome-do-repo>/
```

> HTML/CSS/JS puros — sem build, sem dependências locais.

---

## Configuração

### Endpoint Google Apps Script

Em `assets/js/pdf.js`, substitua a URL pela do seu GAS:

```js
await fetch('https://script.google.com/macros/s/SEU_ID/exec', { method: 'POST', body: formPDF });
```

### Senha do Painel do Mentor

Em `assets/js/mentor.js`, implemente a lógica em `verificarSenha()`:

```js
function verificarSenha() {
  const senha = document.getElementById('inputSenha').value;
  if (senha !== 'SUA_SENHA') {
    document.getElementById('erroSenha').style.display = 'block';
    return;
  }
  document.getElementById('modalSenha').classList.remove('open');
  abrirPainelMentor();
}
```

---

## Cores (CSS variables)

Edite em `assets/css/main.css`:

```css
:root {
  --verde:  #ABD905;
  --azul:   #21C4F7;
  --roxo:   #540094;
}
```

---

## Dependências (CDN)

| Lib | Versão |
|-----|--------|
| Google Fonts | — |
| html2canvas | 1.4.1 |
| jsPDF | 2.5.1 |

---

© Linkae — Todos os direitos reservados.
