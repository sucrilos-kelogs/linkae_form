# MAPA© — Diagnóstico de Mentoria

**Metodologia CEP© · Linkae**

O MAPA© (Meu Autoconhecimento Profissional Aprofundado) é a etapa **Clareza** da Metodologia CEP©, um processo de diagnóstico aplicado antes da primeira sessão de mentoria. Ele captura quem é o mentorado, onde está e o que o move — transformando esse retrato em um relatório personalizado para o mentor.

---

## O que faz

O formulário é composto por 11 blocos que cobrem desde a identificação básica até perguntas de propósito, comportamento e presença digital. Ao ser enviado, ele executa três ações simultâneas:

1. **Exibe uma tela de confirmação personalizada para o mentorado** — a mensagem é adaptada dinamicamente com base na situação marcada (liderança, propósito, visibilidade, transição, equilíbrio, entre outras).
2. **Gera o Painel do Mentor em tempo real** — diagnóstico completo renderizado no próprio browser, com três abas: Respostas, Diagnóstico e Ferramentas.
3. **Captura o painel como PDF e envia por e-mail automaticamente** — via Google Apps Script, sem nenhuma ação manual do mentor.

---

## Os 11 blocos do formulário

| # | Bloco | O que captura |
|---|-------|---------------|
| 1 | Identificação | Nome, e-mail, WhatsApp, cargo, empresa, data de nascimento e tempo na posição |
| 2 | Objetivo da Mentoria | Intenção declarada e situações que motivaram a busca pela mentoria |
| 3 | Autoconhecimento | Nível de autoconhecimento, valores, crenças limitantes (escala 1–5) |
| 4 | Liderança e Relacionamentos | Estilo de liderança, percepção de si pelo outro, comunicação (escala 1–5) |
| 5 | Performance e Execução | Foco, clareza de prioridades e capacidade de plano de ação (escala 1–5) |
| 6 | Propósito e Visão de Futuro | Clareza de visão de 5–10 anos e alinhamento com propósito de vida |
| 7 | Estruturas de Sustentação Profissional© | 8 dilemas comportamentais que revelam motivadores e inegociáveis da carreira |
| 8 | LinkedIn e Currículo | Status do perfil, URL, situação do currículo e upload do arquivo |
| 9 | Perfil Comportamental DISC | 16 situações que calculam o perfil D, I, S ou C com percentuais |
| 10 | 5 Linguagens do Amor (no trabalho) | 10 dilemas que identificam como o mentorado se motiva e se conecta profissionalmente |
| 11 | Contexto Adicional | Ponto forte, maior desafio atual e observações livres |

---

## Painel do Mentor

Após o envio, o painel é gerado automaticamente no browser com três abas:

**Aba Respostas** — espelho fiel de tudo que foi preenchido, organizado por bloco. Inclui perfil DISC com gráfico de barras e resultado das 5 Linguagens.

**Aba Diagnóstico** — análise gerada a partir da combinação entre DISC, linguagens, situações marcadas, escalas de autoavaliação e dados de contexto (idade, cargo, tempo na posição). Inclui:
- Perfil comportamental com arquétipo, animal símbolo, forças, pontos de atenção, ritmo, estilo de comunicação, decisão sob pressão, o que energiza e o que drena
- Análise das linguagens aplicadas ao trabalho: como motivar, como esse mentorado lidera, o que desengaja
- Padrão de carreira derivado da data de nascimento
- Fase de carreira com base na idade
- Mapeamento de cenário principal (um dos sete: Liderança, Visibilidade, Execução, Energia, Direção, Mercado ou Entrevista) com problema identificado, causa-raiz, desperdício atual, potencial represado e risco se não endereçado

**Aba Ferramentas** — trilha de desenvolvimento de 6 meses com ferramentas base fixas por mês e até 3 ferramentas adicionais escolhidas com base no cenário do mentorado. Cada ferramenta inclui nome, classificação (Base ou Adicional) e uma frase de conexão com o problema específico desse mentorado.

---

## Geração e envio do PDF

A função `gerarEEnviarPDFMentor` executa a seguinte sequência após o envio do formulário:

1. Clona o `#telaMentor` em um container off-screen de 800px (garante o visual correto mesmo em dispositivos móveis)
2. Expande todas as abas no clone para que o PDF contenha o painel inteiro
3. Substitui gradientes SVG por cor sólida — contorna uma limitação do html2canvas com `fill="url(#...)"
4. Injeta estilos de normalização que removem `background-image` e `-webkit-text-fill-color` para compatibilidade com canvas
5. Aguarda 600ms para que o browser renderize fontes e layout
6. Captura o clone em `scale: 2` com `html2canvas`
7. Converte para PDF A0 via `jsPDF`, com divisão inteligente de páginas quando o conteúdo excede uma única folha
8. Envia o PDF em base64 para um endpoint do Google Apps Script via `FormData`

O envio acontece em background — o mentorado vê a tela de confirmação imediatamente, sem esperar o PDF terminar.

---

## Construção técnica

O projeto é inteiramente client-side — HTML, CSS e JavaScript puros, sem framework, sem build step e sem dependências locais.

**Fontes** — Montserrat (títulos e labels), Dancing Script (destaques cursivos), Nunito (corpo de texto) — todas via Google Fonts.

**Dependências externas via CDN**

| Biblioteca | Versão | Uso |
|------------|--------|-----|
| html2canvas | 1.4.1 | Captura o DOM como imagem para gerar o PDF |
| jsPDF | 2.5.1 | Converte a imagem capturada em arquivo PDF |

**Estrutura de arquivos**

```
index.html              ← Formulário e painel em uma única página
assets/
  css/
    main.css            ← Todos os estilos com variáveis CSS
  js/
    assessments.js      ← Cálculo e descrições DISC e 5 Linguagens
    form.js             ← Estado, progresso, upload de arquivo e envio
    painel.js           ← Render do painel: respostas, diagnóstico e ferramentas
    pdf.js              ← Captura, geração do PDF e envio via Google Apps Script
    mentor.js           ← Controle de abas e acesso ao painel
```

**Paleta de cores (variáveis CSS)**

```css
--verde:  #ABD905   /* Ações, confirmações, ferramentas adicionais */
--azul:   #21C4F7   /* Interações, foco, ferramentas base */
--roxo:   #540094   /* Marca, destaques editoriais, painel do mentor */
--texto:  #1a1a2e   /* Corpo principal */
--muted:  #7a7a8c   /* Labels, metadados, texto secundário */
```

---

## Benefícios para o processo de mentoria

**Para o mentorado** — o formulário não parece um cadastro. Cada bloco tem uma introdução contextual que explica por que aquela pergunta importa. A confirmação ao final é personalizada com base na situação declarada — não é genérica.

**Para o mentor** — ao invés de chegar à primeira sessão sem referência, o mentor recebe antes da sessão um PDF completo com o diagnóstico do mentorado, a análise comportamental, o cenário identificado e a trilha de desenvolvimento recomendada.

**Para a jornada** — a trilha de 6 meses é gerada com ferramentas nomeadas, mês a mês, com uma frase específica conectando cada ferramenta ao problema real daquele mentorado. Não é uma lista genérica — é um ponto de partida construído a partir das respostas.

**Para a escala** — por rodar inteiramente no browser e ser publicado via GitHub Pages, não exige servidor, banco de dados, autenticação de backend ou manutenção de infraestrutura. O mentor consegue operar o processo com zero custo operacional.

---

## Metodologia CEP©

O MAPA© é a primeira etapa da Metodologia CEP©, desenvolvida pela Linkae:

**C — Clareza** · onde está este formulário. Diagnóstico de ponto de partida, autoconhecimento, valores e cenário atual.

**E — Estratégia** · próxima etapa. Definição de objetivos, plano de desenvolvimento e alinhamento de expectativas.

**P — Posicionamento** · etapa final. Construção de presença, narrativa profissional e posicionamento de mercado.

---

© Linkae · Todos os direitos reservados · Metodologia CEP© e MAPA© são marcas da Linkae