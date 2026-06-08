// ============================================================
//  painel.js — Renderização do Painel do Mentor
//  renderDiscPainel · renderLingPainel · renderRespostas
//  renderDiagnostico · renderFerramentas
// ============================================================

function renderDiscPainel(disc){
  if(!disc)return'<div class="resp-item"><span class="resp-label">DISC</span><span class="resp-valor">Não preenchido</span></div>';
  const desc=descDisc(disc.principal),desc2=descDisc(disc.segundo);
  const cores={D:'#e74c3c',I:'#f39c12',S:'#27ae60',C:'#2980b9'};
  const cor=cores[disc.principal],cor2=cores[disc.segundo];
  const barras=['D','I','S','C'].map(k=>`<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:11px;font-family:'Montserrat',sans-serif;font-weight:600;margin-bottom:3px"><span style="color:${cores[k]}">${{D:'Dominância',I:'Influência',S:'Estabilidade',C:'Conformidade'}[k]} (${k})</span><span style="color:var(--muted)">${disc.pct[k]}% — ${disc.scores[k]} resp.</span></div><div style="background:var(--borda);border-radius:4px;height:8px"><div style="background:${cores[k]};width:${disc.pct[k]}%;height:100%;border-radius:4px"></div></div></div>`).join('');
  return`<div style="background:var(--bg-soft);border-radius:10px;padding:18px;border:1px solid var(--borda);margin-bottom:12px"><div style="display:flex;align-items:center;gap:12px;margin-bottom:16px"><div style="width:48px;height:48px;background:${cor};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">${desc.emoji}</div><div><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:15px;color:${cor}">${desc.nome}</div><div style="font-size:12px;color:var(--muted);margin-top:2px">Perfil secundário: <strong style="color:${cor2}">${desc2.nome}</strong></div></div></div><div style="margin-bottom:16px">${barras}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px"><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--verde);margin-bottom:6px">✅ Pontos Fortes</div><div style="color:var(--texto);line-height:1.6">${desc.pontos_fortes}</div></div><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#e74c3c;margin-bottom:6px">⚠️ Pontos de Atenção</div><div style="color:var(--texto);line-height:1.6">${desc.pontos_atencao}</div></div><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--azul);margin-bottom:6px">👥 Estilo de Liderança</div><div style="color:var(--texto);line-height:1.6">${desc.lideranca}</div></div><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--roxo);margin-bottom:6px">🎯 Desenvolvimento</div><div style="color:var(--texto);line-height:1.6">${desc.dev}</div></div></div></div>`;
}

// ===== RENDER LINGUAGENS NO PAINEL =====
function renderLingPainel(ling){
  if(!ling)return'<div class="resp-item"><span class="resp-label">5 Linguagens</span><span class="resp-valor">Não preenchido</span></div>';
  const desc=descLing(ling.principal),desc2=descLing(ling.segundo);
  if(!desc)return'';
  const nomes={PA:'Palavras de Afirmação',TQ:'Tempo de Qualidade',PR:'Recebimento de Presentes',AS:'Atos de Serviço',TF:'Toque Físico'};
  const cores={PA:'#8e44ad',TQ:'#27ae60',PR:'#e67e22',AS:'#2980b9',TF:'#c0392b'};
  const barras=['PA','TQ','PR','AS','TF'].map(k=>`<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;font-size:11px;font-family:'Montserrat',sans-serif;font-weight:600;margin-bottom:3px"><span style="color:${cores[k]}">${nomes[k]}</span><span style="color:var(--muted)">${ling.pct[k]}% — ${ling.scores[k]} resp.</span></div><div style="background:var(--borda);border-radius:4px;height:8px"><div style="background:${cores[k]};width:${ling.pct[k]}%;height:100%;border-radius:4px"></div></div></div>`).join('');
  return`<div style="background:var(--bg-soft);border-radius:10px;padding:18px;border:1px solid var(--borda);margin-top:16px"><div style="display:flex;align-items:center;gap:12px;margin-bottom:16px"><div style="width:48px;height:48px;background:${desc.cor};border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">${desc.emoji}</div><div><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:15px;color:${desc.cor}">${desc.nome}</div><div style="font-size:12px;color:var(--muted);margin-top:2px">Secundária: <strong style="color:${desc2.cor}">${desc2.nome}</strong></div></div></div><div style="margin-bottom:16px">${barras}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px"><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:${desc.cor};margin-bottom:6px">💡 Como Motivar</div><div style="color:var(--texto);line-height:1.6">${desc.como_motivar}</div></div><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:${desc.cor};margin-bottom:6px">👥 Como Lidera</div><div style="color:var(--texto);line-height:1.6">${desc.como_lidera}</div></div><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#e74c3c;margin-bottom:6px">⚠️ Ponto de Atenção</div><div style="color:var(--texto);line-height:1.6">${desc.atencao}</div></div><div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--borda)"><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--roxo);margin-bottom:6px">🎯 Na Mentoria</div><div style="color:var(--texto);line-height:1.6">${desc.aplicacao}</div></div></div></div>`;
}

// ===== RENDER RESPOSTAS =====
function renderRespostas(d){
  const sits={crescimento:'Crescer na empresa',transicao:'Mudar de área',lideranca:'Desenvolver liderança',visibilidade:'Ganhar visibilidade',proposito:'Buscar propósito',performance:'Melhorar performance',equilibrio:'Buscar equilíbrio',mudar_empresa:'Mudar de empresa',sem_entrevistas:'Não consigo entrevistas',nao_passa_entrevistas:'Não passo em entrevistas'};
  const lM={nao:'Não lidera',informal:'Influência informal',pequena:'Equipe pequena (≤5)',media:'Equipe média (5–20)',grande:'Operação grande (+20)'};
  const esc=v=>v?'⭐'.repeat(v)+` (${v}/5)`:'—';

  // Idade e signo
  let idadeStr='—', signoStr='—';
  if(d.dataNasc){
    const nasc=new Date(d.dataNasc);
    const hoje=new Date();
    const idade=hoje.getFullYear()-nasc.getFullYear()-((hoje.getMonth()<nasc.getMonth()||(hoje.getMonth()===nasc.getMonth()&&hoje.getDate()<nasc.getDate()))?1:0);
    idadeStr=idade+' anos';
    const m=nasc.getMonth()+1, dia=nasc.getDate();
    const signos=[{n:'Capricórnio',s:12,e:21},{n:'Capricórnio',s:1,e:19},{n:'Aquário',s:1,e:20},{n:'Aquário',s:2,e:18},{n:'Peixes',s:2,e:19},{n:'Peixes',s:3,e:20},{n:'Áries',s:3,e:21},{n:'Áries',s:4,e:19},{n:'Touro',s:4,e:20},{n:'Touro',s:5,e:20},{n:'Gêmeos',s:5,e:21},{n:'Gêmeos',s:6,e:20},{n:'Câncer',s:6,e:21},{n:'Câncer',s:7,e:22},{n:'Leão',s:7,e:23},{n:'Leão',s:8,e:22},{n:'Virgem',s:8,e:23},{n:'Virgem',s:9,e:22},{n:'Libra',s:9,e:23},{n:'Libra',s:10,e:22},{n:'Escorpião',s:10,e:23},{n:'Escorpião',s:11,e:21},{n:'Sagitário',s:11,e:22},{n:'Sagitário',s:12,e:21}];
    // Tabela exata: cada signo ocupa [início, fim] dentro do mesmo mês — usar tabela de intervalos por mês
    // Áries: 21/03–19/04 · Touro: 20/04–20/05 · Gêmeos: 21/05–20/06 · Câncer: 21/06–22/07
    // Leão: 23/07–22/08 · Virgem: 23/08–22/09 · Libra: 23/09–22/10 · Escorpião: 23/10–21/11
    // Sagitário: 22/11–21/12 · Capricórnio: 22/12–19/01 · Aquário: 20/01–18/02 · Peixes: 19/02–20/03
    const tabelaSignos=[
      {nome:'Capricórnio', inicioMes:12, inicioDia:22, fimMes:1,  fimDia:19},
      {nome:'Aquário',     inicioMes:1,  inicioDia:20, fimMes:2,  fimDia:18},
      {nome:'Peixes',      inicioMes:2,  inicioDia:19, fimMes:3,  fimDia:20},
      {nome:'Áries',       inicioMes:3,  inicioDia:21, fimMes:4,  fimDia:19},
      {nome:'Touro',       inicioMes:4,  inicioDia:20, fimMes:5,  fimDia:20},
      {nome:'Gêmeos',      inicioMes:5,  inicioDia:21, fimMes:6,  fimDia:20},
      {nome:'Câncer',      inicioMes:6,  inicioDia:21, fimMes:7,  fimDia:22},
      {nome:'Leão',        inicioMes:7,  inicioDia:23, fimMes:8,  fimDia:22},
      {nome:'Virgem',      inicioMes:8,  inicioDia:23, fimMes:9,  fimDia:22},
      {nome:'Libra',       inicioMes:9,  inicioDia:23, fimMes:10, fimDia:22},
      {nome:'Escorpião',   inicioMes:10, inicioDia:23, fimMes:11, fimDia:21},
      {nome:'Sagitário',   inicioMes:11, inicioDia:22, fimMes:12, fimDia:21},
    ];
    // Converter data para número mmdd para comparação direta
    const mmdd = m * 100 + dia;
    signoStr = '—';
    for(const s of tabelaSignos){
      const inicio = s.inicioMes * 100 + s.inicioDia;
      const fim    = s.fimMes   * 100 + s.fimDia;
      if(inicio <= fim){
        // signo dentro do mesmo mês (ex: Áries 321–419)
        if(mmdd >= inicio && mmdd <= fim){ signoStr = s.nome; break; }
      } else {
        // signo cruza virada de ano (Capricórnio: 1222–119)
        if(mmdd >= inicio || mmdd <= fim){ signoStr = s.nome; break; }
      }
    }
  }

  // Cenário (mapeamento fixo)
  const mapeamento={crescimento:'LIDERANÇA',lideranca:'LIDERANÇA',visibilidade:'VISIBILIDADE',performance:'EXECUÇÃO',equilibrio:'ENERGIA',transicao:'DIREÇÃO',proposito:'DIREÇÃO',mudar_empresa:'MERCADO',sem_entrevistas:'MERCADO',nao_passa_entrevistas:'ENTREVISTA'};
  const sitP=d.situacoes.find(s=>mapeamento[s])||d.situacoes[0]||'';
  const cenarioStr=mapeamento[sitP]||'—';

  // Resumo por dimensão (baseado nas respostas)
  const baixoFoco=d.foco<=2;
  const semVisao=d.visao==='nao'||d.visao==='nebulosa';
  const semProp=d.proposito==='nao'||d.proposito==='incerto';
  const naoExecuta=d.planoacao==='nao'||d.planoacao==='parcial';
  const linkedinFraco=d.linkedin==='nao'||d.linkedin==='basico';
  const cvFraco=d.cv==='nao'||d.cv==='parcial';
  const sobrecarreg=d.situacoes.includes('equilibrio');
  const lideraAtivo=d.lidera==='pequena'||d.lidera==='media'||d.lidera==='grande'||d.lidera==='informal';

  const dim=(label,status,detail)=>`<div class="resp-item"><span class="resp-label">${label}</span><span class="resp-valor" style="color:${status==='⚠️'?'#e74c3c':status==='✅'?'#27ae60':'var(--muted)'}">${status} ${detail}</span></div>`;

  document.getElementById('respostasWrap').innerHTML=`
    <div class="resp-bloco"><h4>Identificação</h4>
      <div class="resp-item"><span class="resp-label">Nome</span><span class="resp-valor">${d.nome||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Idade</span><span class="resp-valor">${idadeStr}</span></div>
      <div class="resp-item"><span class="resp-label">Data de nascimento</span><span class="resp-valor">${d.dataNasc?new Date(d.dataNasc+'T12:00:00').toLocaleDateString('pt-BR'):'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Signo</span><span class="resp-valor" style="color:var(--muted);font-style:italic">${signoStr} (não usado na análise)</span></div>
      <div class="resp-item"><span class="resp-label">E-mail</span><span class="resp-valor">${d.email||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">WhatsApp</span><span class="resp-valor">${d.whatsapp||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Cargo / Empresa</span><span class="resp-valor">${d.cargo||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Tempo na função</span><span class="resp-valor">${d.tempoCargo||'—'}</span></div>
    </div>

    <div class="resp-bloco"><h4>Resposta Principal e Justificativa</h4>
      <div class="resp-item"><span class="resp-label">Situação marcada</span><span class="resp-valor">${d.situacoes.map(s=>sits[s]).filter(Boolean).join(' · ')||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Cenário definido</span><span class="resp-valor" style="color:var(--roxo);font-weight:700">${cenarioStr}</span></div>
      <div class="resp-item"><span class="resp-label">Objetivo declarado</span><span class="resp-valor">${d.objetivo||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Ponto forte</span><span class="resp-valor">${d.pontoForte||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Maior desafio</span><span class="resp-valor">${d.desafio||'—'}</span></div>
      ${d.extra?`<div class="resp-item"><span class="resp-label">Contexto extra</span><span class="resp-valor">${d.extra}</span></div>`:''}
    </div>

    <div class="resp-bloco"><h4>Resumo por Dimensão</h4>
      ${dim('Direção', semVisao||semProp?'⚠️':'✅', semVisao&&semProp?'Sem visão e sem propósito claro':semVisao?'Sem visão de futuro':semProp?'Propósito não identificado':'Visão e propósito presentes')}
      ${dim('Execução', baixoFoco||naoExecuta?'⚠️':'✅', baixoFoco&&naoExecuta?'Foco baixo e execução inconsistente':baixoFoco?'Foco baixo ('+d.foco+'/5)':naoExecuta?'Planeja mas não executa com consistência':'Execução razoável ('+d.foco+'/5)')}
      ${dim('Visibilidade', d.situacoes.includes('visibilidade')||(d.percepcao==='nao')?'⚠️':'✅', d.situacoes.includes('visibilidade')?'Falta reconhecimento pelas entregas':d.percepcao==='nao'?'Não sabe como é percebido(a)':'Sem sinal crítico')}
      ${dim('Mercado', linkedinFraco||cvFraco?'⚠️':'✅', linkedinFraco&&cvFraco?'LinkedIn e currículo desatualizados':linkedinFraco?'LinkedIn fraco ou inexistente':cvFraco?'Currículo desatualizado':'Presença digital razoável')}
      ${dim('Energia', sobrecarreg||baixoFoco?'⚠️':'✅', sobrecarreg?'Sobrecarga relatada':baixoFoco?'Foco baixo — possível desgaste':'Energia preservada')}
      ${dim('Liderança', lideraAtivo&&d.comunicacao<=3?'⚠️':'✅', lideraAtivo?'Lidera '+(d.lidera==='informal'?'informalmente':'equipe')+' — comunicação '+d.comunicacao+'/5':'Não lidera atualmente')}
    </div>

    <div class="resp-bloco"><h4>Autoconhecimento</h4>
      <div class="resp-item"><span class="resp-label">Autoconhecimento</span><span class="resp-valor">${esc(d.autoconhecimento)}</span></div>
      <div class="resp-item"><span class="resp-label">Valores claros?</span><span class="resp-valor">${{nao:'Não',parcial:'Parcialmente',sim:'Sim'}[d.valores]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Identifica crenças?</span><span class="resp-valor">${{nao:'Não',suspeita:'Suspeita que existam',sei:'Sabe mas não sabe mudar',trabalhando:'Já trabalha nisso'}[d.crencas]||'—'}</span></div>
    </div>

    <div class="resp-bloco"><h4>Performance e Propósito</h4>
      <div class="resp-item"><span class="resp-label">Foco</span><span class="resp-valor">${esc(d.foco)}</span></div>
      <div class="resp-item"><span class="resp-label">Plano de ação</span><span class="resp-valor">${{nao:'Fica na intenção',parcial:'Às vezes sem método',sim:'Planeja bem — falta consistência',muito:'Muito organizado(a)'}[d.planoacao]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Visão de futuro</span><span class="resp-valor">${{nao:'Não enxerga',nebulosa:'Sensação vaga',parcial:'Tem direção pouco clara',clara:'Visão clara'}[d.visao]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Propósito</span><span class="resp-valor">${{nao:'Desalinhamento claro',incerto:'Não sabe qual é',parcial:'Parcialmente alinhado',sim:'Sente alinhamento'}[d.proposito]||'—'}</span></div>
    </div>

    <div class="resp-bloco"><h4>Liderança e Comunicação</h4>
      <div class="resp-item"><span class="resp-label">Perfil</span><span class="resp-valor">${lM[d.lidera]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Comunicação</span><span class="resp-valor">${esc(d.comunicacao)}</span></div>
      <div class="resp-item"><span class="resp-label">Percepção externa</span><span class="resp-valor">${{nao:'Não tem ideia',parcial:'Tem pistas parciais',sim:'Recebeu feedbacks'}[d.percepcao]||'—'}</span></div>
    </div>

    <div class="resp-bloco"><h4>Estruturas de Sustentação Profissional©</h4>
      ${d.sustentacao?`
      <div class="resp-item"><span class="resp-label">Q1 — Competência vs Autonomia</span><span class="resp-valor">${{competencia:'Competência técnica',autonomia:'Autonomia'}[d.sustentacao.sust1]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Q2 — Gestão vs Estilo de vida</span><span class="resp-valor">${{gestao:'Gestão e liderança',estilovida:'Estilo de vida'}[d.sustentacao.sust2]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Q3 — Empreendedorismo vs Serviço</span><span class="resp-valor">${{empreendedorismo:'Empreendedorismo',servico:'Serviço / Impacto'}[d.sustentacao.sust3]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Q4 — Segurança vs Desafio</span><span class="resp-valor">${{seguranca:'Segurança / Estabilidade',desafio:'Desafio'}[d.sustentacao.sust4]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">O que é inegociável</span><span class="resp-valor">${d.sustentacao.sustInegociavel||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Q6 — Competência vs Estilo de vida</span><span class="resp-valor">${{competencia:'Competência técnica',estilovida:'Estilo de vida'}[d.sustentacao.sust6]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Q7 — Desafio vs Empreendedorismo</span><span class="resp-valor">${{desafio:'Desafio',empreendedorismo:'Empreendedorismo'}[d.sustentacao.sust7]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">Q8 — Autonomia vs Serviço</span><span class="resp-valor">${{autonomia:'Autonomia',servico:'Serviço / Impacto'}[d.sustentacao.sust8]||'—'}</span></div>
      <div class="resp-item"><span class="resp-label">O que desgasta</span><span class="resp-valor">${d.sustentacao.sustDesgaste||'—'}</span></div>
      `:'<span style="color:var(--muted);font-size:13px">Bloco não preenchido</span>'}
    </div>
    <div class="resp-bloco"><h4>LinkedIn e Currículo</h4>
      <div class="resp-item"><span class="resp-label">LinkedIn</span><span class="resp-valor">${{nao:'Não tem',basico:'Desatualizado',ok:'Razoável',ativo:'Completo e ativo'}[d.linkedin]||'—'}</span></div>
      ${d.linkedinUrl?`<div class="resp-item"><span class="resp-label">URL</span><span class="resp-valor"><a href="${d.linkedinUrl}" target="_blank" style="color:var(--azul)">${d.linkedinUrl}</a></span></div>`:''}
      <div class="resp-item"><span class="resp-label">Currículo</span><span class="resp-valor">${{nao:'Desatualizado',parcial:'Parcialmente atualizado',sim:'Atualizado'}[d.cv]||'—'}</span></div>
    </div>`;
}

// ===== RENDER DIAGNÓSTICO INTEGRADO =====
function renderDiagnostico(d){
  const disc=d.disc, ling=d.linguagens, sits=d.situacoes||[];
  const{cargo,objetivo,pontoForte,desafio,comunicacao:com,foco,planoacao,visao,proposito,lidera,percepcao,linkedin,cv,dataNasc,tempoCargo}=d;

  if(!disc){
    document.getElementById('diagnosticoWrap').innerHTML='<div class="resp-bloco"><p style="color:var(--muted);font-size:14px">DISC não preenchido — responda o questionário comportamental para gerar o diagnóstico.</p></div>';
    return;
  }

  // ══════════════════════════════════
  // REFERÊNCIAS
  // ══════════════════════════════════
  const dNome={D:'Dominância',I:'Influência',S:'Estabilidade',C:'Conformidade'};
  const dCor={D:'#e74c3c',I:'#f39c12',S:'#27ae60',C:'#2980b9'};
  const dp=disc.principal, ds=disc.segundo;
  const pctD=disc.pct[dp]||0, pctS=disc.pct[ds]||0;

  const dRef={
    D:{
      ritmo:'Rápido, direto e orientado a resultado.',
      comunicacao:'Assertiva e objetiva — vai ao ponto sem rodeios.',
      decisao:'Rápida e autônoma, baseada em objetivos e resultados.',
      pressao:'Torna-se mais controlador(a) e inflexível — aumenta a pressão sobre si e os outros.',
      forcas:['Liderança assertiva e foco em resultado','Alta capacidade de execução sob pressão','Iniciativa e autonomia acima da média','Resiliência e tolerância a risco'],
      atencao:['Impaciência com processos e pessoas mais lentas','Pode desconsiderar o impacto emocional das decisões','Tendência a centralizar e dificuldade de delegar'],
      onde_trava:'Relacionamentos e processos colaborativos — tende a avançar sem considerar as pessoas no caminho.',
      vantagem:'Toma decisões rápidas em cenários de alta pressão onde outros travam.',
      animal:'🦈 Tubarão', arq:'O Executor',
      arq_perfil:'Age com intensidade, foca no resultado e não perde tempo com o que não move o ponteiro.',
      arq_impacto:'Performa acima da média em ambientes de alta performance — perde em ambientes que exigem paciência relacional.',
      energiza:'Desafios, autonomia, metas ambiciosas e posição de liderança.',
      drena:'Burocracia, lentidão, tarefas repetitivas e perda de controle.',
      talento_p:'Liderança orientada a resultados e execução sob pressão.',
      talento_s:'Tomada de decisão estratégica e mobilização de equipes.'
    },
    I:{
      ritmo:'Dinâmico e variado — funciona melhor com projetos diferentes e interações frequentes.',
      comunicacao:'Expressiva, entusiasta e persuasiva — conecta pessoas com facilidade.',
      decisao:'Intuitiva e baseada no impacto sobre as pessoas e o ambiente.',
      pressao:'Busca apoio emocional, pode perder o foco e ficar ansioso(a) com cobranças.',
      forcas:['Comunicação persuasiva e carisma natural','Facilidade de engajamento e construção de conexões','Criatividade e capacidade de inspirar','Alta energia e presença em grupo'],
      atencao:['Dificuldade com follow-up e consistência na entrega','Tende a evitar conflitos necessários','Pode se comprometer além da capacidade de entrega'],
      onde_trava:'Execução e consistência — começa muitas coisas e sustenta poucas.',
      vantagem:'Comunicação, influência e criação de conexões de alto impacto em pouco tempo.',
      animal:'🦅 Águia', arq:'O Conector',
      arq_perfil:'Inspira, engaja e abre portas com naturalidade — funciona como catalisador de pessoas.',
      arq_impacto:'Performa acima da média em ambientes relacionais e criativos — perde sem estrutura e método.',
      energiza:'Interação social, reconhecimento, projetos criativos e variedade.',
      drena:'Trabalho isolado, rotinas rígidas e ausência de feedback positivo.',
      talento_p:'Comunicação persuasiva e criação de conexões genuínas.',
      talento_s:'Engajamento de equipes e construção de narrativas de impacto.'
    },
    S:{
      ritmo:'Constante e previsível — prefere estabilidade, processo claro e ambiente de confiança.',
      comunicacao:'Empática e cuidadosa — ouve antes de falar e evita confronto desnecessário.',
      decisao:'Ponderada e coletiva — busca consenso antes de avançar.',
      pressao:'Absorve o estresse internamente e pode evitar enfrentamentos necessários.',
      forcas:['Confiabilidade e consistência na entrega','Escuta ativa e construção de relações sólidas','Mediação de conflitos e estabilização de ambientes','Lealdade e comprometimento de longo prazo'],
      atencao:['Dificuldade com mudanças abruptas','Evita confrontos necessários — pode ceder quando não deveria','Tende a ficar invisível por não se posicionar'],
      onde_trava:'Visibilidade e posicionamento estratégico — prefere fazer a aparecer.',
      vantagem:'Constrói relações de confiança e entrega com consistência ao longo do tempo.',
      animal:'🐺 Lobo', arq:'O Guardião',
      arq_perfil:'Leal, consistente e confiável — é a âncora que sustenta equipes e processos.',
      arq_impacto:'Performa acima da média em ambientes colaborativos — perde quando precisa se impor ou se promover.',
      energiza:'Harmonia, previsibilidade, ambientes colaborativos e ajudar pessoas.',
      drena:'Conflitos diretos, mudanças abruptas e exposição excessiva.',
      talento_p:'Consistência, confiabilidade e construção de relações profundas.',
      talento_s:'Suporte estruturado e mediação de conflitos.'
    },
    C:{
      ritmo:'Metódico e detalhista — prefere qualidade à velocidade e processo à improvisação.',
      comunicacao:'Precisa e factual — baseia-se em dados e evita superficialidade.',
      decisao:'Analítica e criteriosa — precisa de dados e tempo para decidir com segurança.',
      pressao:'Fecha-se, aumenta o nível de exigência e pode travar por buscar a solução perfeita.',
      forcas:['Análise crítica e pensamento sistêmico','Rigor técnico e atenção a detalhes','Planejamento detalhado e garantia de qualidade','Capacidade de resolver problemas complexos'],
      atencao:['Paralisia por análise — dificuldade de agir com incerteza','Pode ser percebido(a) como distante ou excessivamente crítico(a)','Lentidão decisória em cenários que exigem velocidade'],
      onde_trava:'Velocidade de ação e exposição — analisa demais e age de menos.',
      vantagem:'Precisão, estrutura e resolução de problemas que outros não conseguem endereçar.',
      animal:'🐱 Gato', arq:'O Analista',
      arq_perfil:'Independente, meticuloso e estratégico — observa antes de agir e executa com precisão.',
      arq_impacto:'Performa acima da média em ambientes técnicos e complexos — perde em ambientes que exigem velocidade e exposição.',
      energiza:'Qualidade, dados, problemas complexos e autonomia técnica.',
      drena:'Improvisação, pressão por velocidade e trabalho superficial.',
      talento_p:'Análise crítica e resolução de problemas complexos.',
      talento_s:'Planejamento detalhado e garantia de qualidade.'
    }
  };
  const di=dRef[dp], dsi=dRef[ds]||dRef[dp];

  // Linguagens
  const lNome={PA:'Palavras de Afirmação',TQ:'Tempo de Qualidade',PR:'Recebimento de Presentes',AS:'Atos de Serviço',TF:'Toque Físico'};
  const lp=ling?ling.principal:null, ls=ling?ling.segundo:null;
  const pctL=ling&&lp?ling.pct[lp]:0, pctL2=ling&&ls?ling.pct[ls]:0;
  const lRef={
    PA:{eng:'Reconhecimento verbal específico, elogios diretos e feedbacks positivos frequentes.',des:'Silêncio, ausência de retorno e críticas sem nenhum reconhecimento.',leitura:'Engaja através do que é dito — a forma como o mentor se comunica tem impacto direto na motivação.'},
    TQ:{eng:'Atenção exclusiva, reuniões individuais genuínas e presença real sem distrações.',des:'Reuniões superficiais e sensação de ser mais um número no processo.',leitura:'Engaja quando se sente visto — sessões com foco total geram mais comprometimento.'},
    PR:{eng:'Reconhecimento concreto e tangível, investimento em desenvolvimento, gestos que mostram valor.',des:'Esforço não reconhecido de forma concreta e promessas sem entrega.',leitura:'Marcos claros e recursos práticos funcionam como combustível para manter o engajamento.'},
    AS:{eng:'Suporte prático real, remoção de obstáculos e líderes que colocam a mão na massa.',des:'Discurso sem ação prática e falta de apoio nos momentos críticos.',leitura:'Engaja quando recebe ajuda concreta — planos de ação detalhados são uma forma de cuidado.'},
    TF:{eng:'Presença física, encontros presenciais e calor humano genuíno.',des:'Ambientes 100% remotos e relações frias e distantes.',leitura:'Sessões presenciais têm impacto diferente — a proximidade física aumenta o engajamento.'}
  };
  const li=lp?lRef[lp]:null;

  // Cenário
  const mapeamento={crescimento:'LIDERANCA',lideranca:'LIDERANCA',visibilidade:'VISIBILIDADE',performance:'EXECUCAO',equilibrio:'ENERGIA',transicao:'DIRECAO',proposito:'DIRECAO',mudar_empresa:'MERCADO',sem_entrevistas:'MERCADO',nao_passa_entrevistas:'ENTREVISTA'};
  const sitP=sits.find(s=>mapeamento[s])||sits[0]||'';
  const cenario=mapeamento[sitP]||'DIRECAO';
  const cNomes={LIDERANCA:'Liderança',VISIBILIDADE:'Visibilidade',EXECUCAO:'Execução',ENERGIA:'Energia / Sobrecarga',DIRECAO:'Direção / Propósito',MERCADO:'Mercado',ENTREVISTA:'Entrevista'};
  const cNome=cNomes[cenario]||'—';

  // Sinais
  const baixoFoco=foco<=2;
  const semVisao=visao==='nao'||visao==='nebulosa';
  const semProp=proposito==='nao'||proposito==='incerto';
  const naoExecuta=planoacao==='nao'||planoacao==='parcial';
  const linkedinFraco=linkedin==='nao'||linkedin==='basico';
  const cvFraco=cv==='nao'||cv==='parcial';
  const lideraAtivo=lidera==='pequena'||lidera==='media'||lidera==='grande'||lidera==='informal';
  const sobrecarreg=sits.includes('equilibrio');
  const semFeedback=percepcao==='nao';
  const energiaDesalinhada=sobrecarreg||baixoFoco;

  // Evidências por cenário
  const evMap={
    LIDERANCA:[
      lideraAtivo?{ok:true,txt:'Lidera pessoas ativamente'}:{ok:false,txt:'Não lidera formalmente — desenvolvimento para liderança'},
      com<=3?{ok:false,txt:'Comunicação abaixo do esperado para liderança ('+com+'/5)'}:{ok:true,txt:'Comunicação compatível com liderança ('+com+'/5)'},
      semFeedback?{ok:false,txt:'Não sabe como é percebido(a) — ponto crítico para liderança'}:{ok:true,txt:'Recebe feedback externo'},
    ],
    VISIBILIDADE:[
      {ok:false,txt:'Falta reconhecimento pelas entregas realizadas'},
      com<=3?{ok:false,txt:'Comunicação baixa limita o posicionamento ('+com+'/5)'}:{ok:true,txt:'Boa comunicação — visibilidade é questão de estratégia'},
      semFeedback?{ok:false,txt:'Não tem clareza de como é percebido(a)'}:{ok:true,txt:'Tem referência de percepção externa'},
    ],
    EXECUCAO:[
      baixoFoco?{ok:false,txt:'Foco baixo confirmado ('+foco+'/5)'}:{ok:true,txt:'Foco razoável ('+foco+'/5)'},
      naoExecuta?{ok:false,txt:'Dificuldade em transformar planos em ação consistente'}:{ok:true,txt:'Executa com alguma consistência'},
    ],
    ENERGIA:[
      sobrecarreg?{ok:false,txt:'Sobrecarga relatada diretamente'}:{ok:false,txt:'Foco baixo — sinal de desgaste energético'},
      semProp?{ok:false,txt:'Propósito desalinhado — agrava o desgaste'}:{ok:true,txt:'Propósito presente'},
      {ok:false,txt:'Trabalho atual consome mais do que energiza'},
    ],
    DIRECAO:[
      semVisao?{ok:false,txt:'Sem visão clara de futuro'}:{ok:true,txt:'Tem alguma visão de futuro'},
      semProp?{ok:false,txt:'Propósito não identificado ou desalinhado'}:{ok:true,txt:'Tem algum senso de propósito'},
      sits.includes('transicao')?{ok:false,txt:'Quer mudar de área sem ter clareza do destino'}:null,
    ].filter(Boolean),
    MERCADO:[
      linkedinFraco?{ok:false,txt:'LinkedIn fraco ou inexistente'}:{ok:true,txt:'LinkedIn presente'},
      cvFraco?{ok:false,txt:'Currículo desatualizado'}:{ok:true,txt:'Currículo atualizado'},
      sits.includes('sem_entrevistas')?{ok:false,txt:'Não está recebendo entrevistas — invisibilidade no mercado'}:null,
      sits.includes('mudar_empresa')?{ok:true,txt:'Objetivo de mudar de empresa confirmado'}:null,
    ].filter(Boolean),
    ENTREVISTA:[
      com<=3?{ok:false,txt:'Comunicação baixa — impacta diretamente na conversão ('+com+'/5)'}:{ok:true,txt:'Comunicação presente — ajuste de método pode resolver'},
      linkedinFraco?{ok:false,txt:'LinkedIn fraco pode estar filtrando oportunidades antes da entrevista'}:null,
    ].filter(Boolean)
  };
  const evs=evMap[cenario]||[];

  // Alinhamento
  const sinaisNeg=[];
  if(sits.includes('transicao')||sits.includes('mudar_empresa'))sinaisNeg.push('Quer mudar de área ou empresa');
  if(semProp)sinaisNeg.push('Propósito desalinhado');
  if(semVisao)sinaisNeg.push('Sem visão de futuro');
  if(energiaDesalinhada)sinaisNeg.push('Trabalho drena energia');
  let alinhamento,corAli,aliText;
  if(sinaisNeg.length>=3){alinhamento='Baixo alinhamento';corAli='#e74c3c';aliText='Múltiplos vetores de desalinhamento entre perfil e cargo atual. O ambiente não atende o que a pessoa precisa para performar no seu melhor.';}
  else if(sinaisNeg.length>=1){alinhamento='Alinhamento parcial';corAli='#f39c12';aliText='Parte do cargo está alinhada com o perfil, mas há pontos de tensão que consomem energia de forma desnecessária.';}
  else{alinhamento='Alto alinhamento';corAli='#27ae60';aliText='O cargo atual atende os principais vetores do perfil. O foco deve ser no próximo nível, não na mudança de direção.';}

  // Diagnóstico estratégico
  const dgMap={
    LIDERANCA:{
      prob:'Crescimento ou liderança em desenvolvimento sem pilares de comunicação e influência consolidados.',
      causa:'Gap comportamental — perfil '+dp+' '+(dp==='D'?'avança sem construir consensus, gerando resistência':dp==='C'?'lidera pelo técnico, não pelo relacional — perde engajamento da equipe':dp==='S'?'lidera por consistência mas evita posicionamento assertivo quando necessário':'comunicação não calibrada para o contexto de gestão de pessoas')+'.',
      desp:'Energia gasta em conflitos e desalinhamentos que poderiam ser evitados com comunicação calibrada.',
      pot:'Com desenvolvimento intencional de comunicação e influência, multiplica o impacto sem aumentar esforço.',
      risco:'Perda de credibilidade e eficácia sem desenvolvimento dos pilares relacionais — pode ser afastado(a) de posições de liderança.'
    },
    VISIBILIDADE:{
      prob:'Entrega resultado mas não é reconhecido(a) pelo valor que gera.',
      causa:'Perfil '+dp+' '+(dp==='S'?'prefere fazer a aparecer — invisibilidade estratégica por natureza':dp==='C'?'foca na qualidade técnica e negligencia o posicionamento':'tende a priorizar entrega em detrimento da comunicação do valor')+'.',
      desp:'Competência real não comunicada = competência invisível para quem decide promoções.',
      pot:'Pequenos ajustes de posicionamento estratégico podem gerar grande salto de reconhecimento.',
      risco:'Ser preterido(a) por profissionais menos competentes, mas mais visíveis e estratégicos.'
    },
    EXECUCAO:{
      prob:'Gap entre intenção e ação — planos existem, execução consistente não.',
      causa:'Perfil '+dp+' '+(dp==='I'?'começa muito e sustenta pouco — ritmo inicial alto, follow-up baixo':dp==='C'?'trava na busca pelo plano perfeito antes de agir':dp==='D'?'avança rápido mas perde disciplina de processo':'falta sistema de execução compatível com o perfil')+'.',
      desp:'Potencial represado — energia investida em planejamento sem conversão em resultado.',
      pot:'Com método certo e estrutura de accountability, os resultados escalam sem aumentar esforço.',
      risco:'Frustração crônica por sentir que poderia estar mais avançado(a) — sensação de estagnação.'
    },
    ENERGIA:{
      prob:'Trabalho atual consome mais do que energiza — desgaste progressivo.',
      causa:'Desalinhamento entre o que o cargo exige e o que o perfil entrega com naturalidade — o esforço é alto, o sentido é baixo.',
      desp:'Energia consumida para sustentar o que não é natural — sobra pouco para crescimento e inovação.',
      pot:'Realinhar atividades ao perfil natural libera performance sem aumentar esforço.',
      risco:'Burnout progressivo se o desalinhamento não for endereçado — ponto de inflexão próximo.'
    },
    DIRECAO:{
      prob:'Sem propósito ou visão claros, as ações não constroem nada concreto — esforço sem direção.',
      causa:'Falta de processo estruturado de autoconhecimento — a pessoa nunca parou para definir com clareza o que quer e por quê.',
      desp:'Competência e energia aplicadas sem destino = esforço sem alavancagem real.',
      pot:'Quando a direção for clara, a execução já existe — o potencial está represado, não ausente.',
      risco:'Tomada de decisões erradas por ausência de critério interno ou burnout por falta de sentido.'
    },
    MERCADO:{
      prob:'Invisível no mercado antes mesmo de chegar à entrevista.',
      causa:'LinkedIn e/ou currículo não comunicam o valor real para o mercado atual — presença digital abaixo do potencial.',
      desp:'Não receber convites para vagas para as quais tem qualificação real.',
      pot:'Posicionamento digital correto pode aumentar o volume de oportunidades de forma significativa e rápida.',
      risco:'Ficar fora do radar enquanto o mercado avança e as melhores oportunidades passam.'
    },
    ENTREVISTA:{
      prob:'Boa qualificação, baixa conversão — o problema está na comunicação, não na competência.',
      causa:'Falta de método para estruturar narrativa de impacto e adaptar a comunicação ao contexto da seleção.',
      desp:'Tempo e energia investidos em processos seletivos sem resultado por falha de apresentação.',
      pot:'Com estrutura de pitch e storytelling, a competência que já existe começa a aparecer nas entrevistas.',
      risco:'Desgaste e desmotivação progressivos por rejeições que poderiam ser evitadas com ajustes pontuais.'
    }
  };
  const dg=dgMap[cenario]||dgMap['DIRECAO'];

  // Padrão complementar (sem usar "numerologia")
  let padrao=null;
  if(dataNasc){
    const soma=[...dataNasc.replace(/-/g,'')].reduce((a,c)=>a+parseInt(c),0);
    let n=soma;
    while(n>9&&n!==11&&n!==22&&n!==33){n=[...String(n)].reduce((a,c)=>a+parseInt(c),0);}
    const pm={
      1:{n:'Liderança',exp:'Padrão voltado para autonomia, iniciativa e abertura de caminhos.',f:'Capacidade de liderar, empreender e agir com independência.',a:'Tendência ao isolamento — pode prescindir da colaboração quando deveria buscá-la.'},
      2:{n:'Colaboração',exp:'Padrão voltado para parceria, mediação e construção de pontes.',f:'Empatia natural, mediação eficaz e construção de relações sólidas.',a:'Tendência a ceder demais — pode abrir mão do que é certo para manter a harmonia.'},
      3:{n:'Comunicação',exp:'Padrão voltado para expressão, criatividade e conexão com pessoas.',f:'Expressividade, criatividade e facilidade de gerar engajamento.',a:'Tendência à dispersão — precisa de foco e profundidade para sustentar resultados.'},
      4:{n:'Estrutura',exp:'Padrão voltado para método, consistência e construção sólida.',f:'Capacidade de construir com solidez, método e visão de longo prazo.',a:'Tendência à rigidez — pode travar diante do que foge do planejado.'},
      5:{n:'Movimento',exp:'Padrão voltado para adaptabilidade, variedade e transformação.',f:'Facilidade com mudanças, adaptabilidade e geração de novas possibilidades.',a:'Tendência à instabilidade — começa muito e termina pouco.'},
      6:{n:'Responsabilidade',exp:'Padrão voltado para cuidado, comprometimento e senso de propósito coletivo.',f:'Comprometimento, cuidado genuíno e capacidade de se responsabilizar.',a:'Tendência a carregar o que não é seu — excesso de responsabilidade gera desgaste.'},
      7:{n:'Análise',exp:'Padrão voltado para profundidade, rigor e busca por verdade.',f:'Profundidade analítica, rigor e capacidade de enxergar o que outros não veem.',a:'Tendência ao isolamento e ao perfeccionismo — pode travar por buscar certeza total.'},
      8:{n:'Resultado',exp:'Padrão voltado para conquista, materialização e reconhecimento concreto.',f:'Ambição, foco em conquista e capacidade de materializar grandes metas.',a:'Tendência a priorizar resultado sobre relações — gera desgaste no longo prazo.'},
      9:{n:'Propósito',exp:'Padrão voltado para impacto coletivo, visão ampla e contribuição.',f:'Visão ampla, capacidade de inspirar e busca genuína por impacto.',a:'Tendência a se esquecer do próprio crescimento — coloca o outro sempre à frente.'},
      11:{n:'Intuição',exp:'Padrão voltado para sensibilidade elevada, visão e percepção apurada.',f:'Capacidade de enxergar além do óbvio e antecipar cenários.',a:'Tendência ao idealismo excessivo — pode se frustrar com o ritmo da realidade.'},
      22:{n:'Legado',exp:'Padrão voltado para construção de impacto duradouro e visão de longo prazo.',f:'Visão grande e capacidade de unir visão e execução em escala.',a:'Tendência à sobrecarga — pode se paralisar diante da magnitude do que quer construir.'},
      33:{n:'Serviço',exp:'Padrão voltado para cuidado elevado, generosidade e propósito de servir.',f:'Entrega generosa e conexão profunda com propósito de contribuição.',a:'Tendência a se esquecer de si — precisa aprender a receber tanto quanto dá.'}
    };
    if(pm[n])padrao={num:n,...pm[n]};
  }

  // Fase de carreira
  let faseCar='',idadeNum=0;
  if(dataNasc){
    const nasc=new Date(dataNasc),hoje=new Date();
    idadeNum=hoje.getFullYear()-nasc.getFullYear()-((hoje.getMonth()<nasc.getMonth()||(hoje.getMonth()===nasc.getMonth()&&hoje.getDate()<nasc.getDate()))?1:0);
  }

  // ══════════════════════════════════
  // HELPERS
  // ══════════════════════════════════
  const sec=(num,titulo,cor,icone,conteudo)=>`
    <div class="resp-bloco" style="margin-bottom:14px">
      <h4 style="display:flex;align-items:center;gap:8px;color:${cor};font-size:11px;font-family:'Montserrat',sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.12em;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--borda)">
        <span style="font-size:15px">${icone}</span>${num}. ${titulo}
      </h4>
      ${conteudo}
    </div>`;

  const row=(label,val,vc)=>`
    <div class="resp-item">
      <span class="resp-label">${label}</span>
      <span class="resp-valor" style="${vc?'color:'+vc+';font-weight:600':''}">${val||'—'}</span>
    </div>`;

  const pill=(txt,cor)=>`<span style="display:inline-block;background:${cor}18;color:${cor};border:1px solid ${cor}40;border-radius:20px;padding:3px 12px;font-size:11px;font-weight:600;font-family:'Montserrat',sans-serif;margin:2px 3px">${txt}</span>`;

  const caixa=(titulo,corT,texto)=>`
    <div style="background:white;border:1px solid var(--borda);border-left:3px solid ${corT};border-radius:0 8px 8px 0;padding:11px 14px;margin-bottom:7px">
      <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:${corT};margin-bottom:4px">${titulo}</div>
      <div style="font-size:13px;color:var(--texto);line-height:1.65">${texto}</div>
    </div>`;

  const bullet=(items,cor)=>`<div style="display:flex;flex-direction:column;gap:4px">`+items.map(i=>`<div style="display:flex;gap:8px;font-size:13px;color:var(--texto);line-height:1.5"><span style="color:${cor};flex-shrink:0;font-size:11px;margin-top:3px">▸</span>${i}</div>`).join('')+`</div>`;

  const barra=(label,pct,cor)=>`
    <div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;font-size:12px;font-family:'Montserrat',sans-serif;font-weight:600;margin-bottom:3px">
        <span style="color:${cor}">${label}</span><span style="color:var(--muted)">${pct}%</span>
      </div>
      <div style="background:var(--borda);border-radius:4px;height:7px">
        <div style="background:${cor};width:${pct}%;height:100%;border-radius:4px"></div>
      </div>
    </div>`;

  let html='';

  // ──────────────────────────────────
  // 1. RESUMO EXECUTIVO
  // ──────────────────────────────────
  const nomeP=d.nome?d.nome.split(' ')[0]:'O mentorado';
  const resumoTexto=`${nomeP}${cargo?' atua como '+cargo:''} e apresenta perfil comportamental predominante <strong>${dp} — ${dNome[dp]} (${pctD}%)</strong>, com secundário <strong>${ds} — ${dNome[ds]} (${pctS}%)</strong>. ${energiaDesalinhada?'Há sinais claros de desgaste energético que impactam a performance atual.':'A energia está preservada.'} O cenário principal identificado é <strong>${cNome}</strong>. ${dg.prob} O maior potencial: ${dg.pot}`;
  html+=sec(1,'Resumo Executivo','#540094','📋',
    `<div style="background:linear-gradient(135deg,rgba(84,0,148,.06),rgba(33,196,247,.04));border:1px solid rgba(84,0,148,.15);border-radius:8px;padding:16px;font-size:14px;color:var(--texto);line-height:1.85">${resumoTexto}</div>`
  );

  // ──────────────────────────────────
  // 2. PERFIL COMPORTAMENTAL — DISC
  // ──────────────────────────────────
  const cores={D:'#e74c3c',I:'#f39c12',S:'#27ae60',C:'#2980b9'};
  const nomeDisc={D:'Dominância',I:'Influência',S:'Estabilidade',C:'Conformidade'};
  html+=sec(2,'Perfil Comportamental — DISC',dCor[dp],'🧠',
    `<div style="margin-bottom:14px">`+
      ['D','I','S','C'].map(k=>barra(k+' — '+nomeDisc[k],disc.pct[k]||0,cores[k])).join('')+
    `</div>`+
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">`+
      `<div style="background:var(--bg-soft);border-radius:8px;padding:12px">
        <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:8px">Ritmo</div>
        <div style="font-size:13px;color:var(--texto)">${di.ritmo}</div>
      </div>`+
      `<div style="background:var(--bg-soft);border-radius:8px;padding:12px">
        <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:8px">Comunicação</div>
        <div style="font-size:13px;color:var(--texto)">${di.comunicacao}</div>
      </div>`+
      `<div style="background:var(--bg-soft);border-radius:8px;padding:12px">
        <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:8px">Tomada de Decisão</div>
        <div style="font-size:13px;color:var(--texto)">${di.decisao}</div>
      </div>`+
      `<div style="background:var(--bg-soft);border-radius:8px;padding:12px">
        <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:8px">Sob Pressão</div>
        <div style="font-size:13px;color:var(--texto)">${di.pressao}</div>
      </div>`+
    `</div>`+
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">`+
      `<div style="background:white;border:1px solid var(--borda);border-radius:8px;padding:12px">
        <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#27ae60;margin-bottom:8px">✅ Forças</div>
        ${bullet(di.forcas,'#27ae60')}
      </div>`+
      `<div style="background:white;border:1px solid var(--borda);border-radius:8px;padding:12px">
        <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#e74c3c;margin-bottom:8px">⚠️ Pontos de Atenção</div>
        ${bullet(di.atencao,'#e74c3c')}
      </div>`+
    `</div>`+
    caixa('Onde tende a travar','#e74c3c',di.onde_trava)+
    caixa('Onde tem vantagem natural','#27ae60',di.vantagem)
  );

  // ──────────────────────────────────
  // 3. ARQUÉTIPO
  // ──────────────────────────────────
  html+=sec(3,'Arquétipo',dCor[dp],'🐾',
    `<div style="background:${dCor[dp]}10;border:1px solid ${dCor[dp]}30;border-radius:10px;padding:16px;display:flex;align-items:flex-start;gap:14px;margin-bottom:10px">`+
      `<div style="font-size:38px;flex-shrink:0;line-height:1">${di.animal.split(' ')[0]}</div>`+
      `<div>`+
        `<div style="font-family:'Montserrat',sans-serif;font-size:14px;font-weight:700;color:${dCor[dp]};margin-bottom:6px">${di.arq} (${di.animal})</div>`+
        `<div style="font-size:13px;color:var(--texto);line-height:1.65;margin-bottom:6px">${di.arq_perfil}</div>`+
        `<div style="font-size:12px;color:var(--muted);line-height:1.6;border-top:1px solid ${dCor[dp]}20;padding-top:8px;margin-top:4px">Impacto na carreira: ${di.arq_impacto}</div>`+
      `</div>`+
    `</div>`
  );

  // ──────────────────────────────────
  // 4. VALIDAÇÃO COM EVIDÊNCIAS
  // ──────────────────────────────────
  html+=sec(4,'Validação com Evidências','#21C4F7','🔎',
    `<div style="background:#21C4F710;border:1px solid #21C4F730;border-radius:8px;padding:10px 14px;margin-bottom:12px;font-size:12px;color:#0a9bc4;font-family:'Montserrat',sans-serif;font-weight:700">`+
      `Cenário identificado: <strong>${cNome}</strong>`+
    `</div>`+
    `<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">`+
      evs.map(e=>`<div style="display:flex;align-items:flex-start;gap:10px;background:white;border:1px solid var(--borda);border-left:3px solid ${e.ok?'#27ae60':'#e74c3c'};border-radius:0 8px 8px 0;padding:9px 12px"><span style="font-size:13px;flex-shrink:0">${e.ok?'✔':'⚠'}</span><span style="font-size:13px;color:var(--texto)">${e.txt}</span></div>`).join('')+
    `</div>`+
    (objetivo?caixa('Objetivo declarado','#21C4F7',objetivo):'')
  );

  // ──────────────────────────────────
  // 5. MOTIVAÇÃO — PERFIL DE ENGAJAMENTO
  // ──────────────────────────────────
  if(li&&lp){
    html+=sec(5,'Motivação — Perfil de Engajamento','#8e44ad','💡',
      `<div style="margin-bottom:12px">`+
        barra(lNome[lp]+' (principal)',pctL,'#8e44ad')+
        (ls?barra(lNome[ls]+' (secundária)',pctL2,'#aaa'):'')+
      `</div>`+
      caixa('O que engaja','#27ae60',li.eng)+
      caixa('O que desengaja','#e74c3c',li.des)+
      caixa('Leitura estratégica','#8e44ad',li.leitura)
    );
  }

  // ──────────────────────────────────
  // 6. TALENTO
  // ──────────────────────────────────
  html+=sec(6,'Talento','#540094','⚡',
    row('Talento principal',di.talento_p)+
    row('Talento secundário',di.talento_s)+
    (pontoForte?caixa('Ponto forte declarado','#27ae60',pontoForte):'')+
    (desafio?caixa('Principal desafio declarado','#e74c3c',desafio):'')
  );

  // ──────────────────────────────────
  // 7. ENERGIA
  // ──────────────────────────────────
  const eCor=energiaDesalinhada?'#e74c3c':'#27ae60';
  const eClass=energiaDesalinhada?'⚠️ Energia em esforço':'✅ Energia preservada';
  const eImpacto=energiaDesalinhada
    ?'O desgaste reduz capacidade de execução, decisão e criatividade — antes de acelerar, é necessário recuperar energia.'
    :'O perfil energético está compatível com as demandas atuais — o foco pode ser no crescimento.';
  html+=sec(7,'Energia',eCor,'🔋',
    `<div style="display:inline-flex;align-items:center;background:${eCor}15;border:1px solid ${eCor}40;border-radius:20px;padding:4px 14px;margin-bottom:12px">`+
      `<span style="font-family:'Montserrat',sans-serif;font-size:12px;font-weight:700;color:${eCor}">${eClass}</span>`+
    `</div>`+
    row('O que energiza',di.energiza)+
    row('O que drena',di.drena)+
    `<div style="margin-top:8px;font-size:12px;color:var(--muted);background:var(--bg-soft);border-radius:8px;padding:10px;line-height:1.6">${eImpacto}</div>`+
    (sobrecarreg?caixa('Alerta crítico','#e74c3c','Sobrecarga relatada diretamente — sinal de que o limite foi atingido.'):'')
  );

  // ──────────────────────────────────
  // 8. LEITURA COMPLEMENTAR DE PERFIL
  // ──────────────────────────────────
  if(padrao){
    html+=sec(8,'Leitura Complementar de Perfil','#888','📊',
      `<div style="background:#f9f9f9;border:1px solid #e0e0e0;border-radius:8px;padding:14px">`+
        `<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">`+
          `<div style="width:36px;height:36px;border-radius:50%;background:#54009415;border:2px solid #54009430;display:flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:15px;font-weight:800;color:#540094;flex-shrink:0">${padrao.num}</div>`+
          `<div><div style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:700;color:var(--texto)">${padrao.n}</div><div style="font-size:11px;color:var(--muted)">${padrao.exp}</div></div>`+
        `</div>`+
        row('✔ Pontos fortes',padrao.f)+
        row('⚠ Ponto de atenção',padrao.a,'')+
      `</div>`
    );
  }

  // ──────────────────────────────────
  // 9. ALINHAMENTO COM O CARGO
  // ──────────────────────────────────
  html+=sec(9,'Alinhamento com o Cargo',corAli,'🎯',
    `<div style="display:inline-flex;align-items:center;background:${corAli}15;border:1px solid ${corAli}40;border-radius:20px;padding:5px 16px;margin-bottom:12px">`+
      `<span style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:700;color:${corAli}">${alinhamento}</span>`+
    `</div>`+
    `<div style="font-size:13px;color:var(--texto);line-height:1.65;background:var(--bg-soft);border-radius:8px;padding:12px;margin-bottom:8px">${aliText}</div>`+
    (sinaisNeg.length?`<div style="display:flex;flex-wrap:wrap;gap:6px">${sinaisNeg.map(s=>pill(s,'#e74c3c')).join('')}</div>`:'')
  );

  // ──────────────────────────────────
  // 10. DIAGNÓSTICO ESTRATÉGICO
  // ──────────────────────────────────
  html+=sec(10,'Diagnóstico Estratégico','#540094','🔍',
    `<div style="background:#54009408;border:1px solid #54009422;border-radius:8px;padding:6px 0;margin-bottom:10px">`+
      `<div style="padding:4px 14px 8px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#540094">Cenário: ${cNome}</div>`+
      row('Problema principal',dg.prob)+
      row('Causa principal',dg.causa)+
      row('Desperdício de energia',dg.desp)+
      row('Potencial não explorado',dg.pot,'#27ae60')+
      row('Risco se nada mudar',dg.risco,'#e74c3c')+
    `</div>`+
    `<div style="background:linear-gradient(135deg,rgba(33,196,247,.08),rgba(84,0,148,.05));border:1px solid rgba(33,196,247,.25);border-radius:8px;padding:14px 16px">`+
      `<div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#21C4F7;margin-bottom:8px">Direcionamento</div>`+
      `<div style="font-size:14px;font-weight:600;color:var(--texto);line-height:1.7"><span style="color:#21C4F7;margin-right:8px">→</span>${{LIDERANCA:'Desenvolver comunicação e influência para consolidar a liderança que já existe na prática.',VISIBILIDADE:'Construir presença estratégica para que o valor entregue seja visto por quem importa.',EXECUCAO:'Criar um sistema de execução alinhado ao perfil para transformar intenção em resultado consistente.',ENERGIA:'Mapear o que drena e o que energiza para parar de sustentar o que não é natural.',DIRECAO:'Definir direção com clareza antes de qualquer ação — sem bússola, esforço vira desperdício.',MERCADO:'Construir presença digital que comunique o valor real e abra as portas certas.',ENTREVISTA:'Estruturar narrativa de impacto para converter qualificação em aprovação.'}[cenario]||'—'}</div>`+
    `</div>`
  );

    // ── TENDÊNCIAS DE SUSTENTAÇÃO PROFISSIONAL© ──
  if(d.sustentacao){
    const sust=d.sustentacao;
    // Contar ocorrências de cada âncora
    const contagem={competencia:0,autonomia:0,gestao:0,estilovida:0,empreendedorismo:0,servico:0,seguranca:0,desafio:0};
    ['sust1','sust2','sust3','sust4','sust6','sust7','sust8'].forEach(k=>{if(sust[k])contagem[sust[k]]++;});
    const ordenado=Object.entries(contagem).filter(([,v])=>v>0).sort((a,b)=>b[1]-a[1]);
    const nomes={competencia:'Excelência Técnica',autonomia:'Autonomia e Autenticidade',gestao:'Liderança e Influência',estilovida:'Equilíbrio e Estilo de Vida',empreendedorismo:'Criação e Empreendedorismo',servico:'Impacto e Serviço',seguranca:'Segurança e Estabilidade',desafio:'Desafio e Superação'};
    const cores_s={competencia:'#2980b9',autonomia:'#8e44ad',gestao:'#e74c3c',estilovida:'#27ae60',empreendedorismo:'#e67e22',servico:'#16a085',seguranca:'#7f8c8d',desafio:'#c0392b'};
    const leituras={
      competencia:'Há uma necessidade clara de aprofundamento técnico e reconhecimento pela especialidade. Ambientes que subvalorizam o domínio técnico ou que exigem generalismo excessivo tendem a gerar desgaste e sensação de estagnação.',
      autonomia:'Autonomia e autenticidade são estruturas fundamentais de sustentação. Ambientes excessivamente controladores, hierárquicos ou que limitam a liberdade de decisão tendem a gerar desgaste progressivo, mesmo quando os demais indicadores estão positivos.',
      gestao:'A liderança e a influência são vetores centrais de motivação. Cargos que não oferecem espaço de decisão ou impacto sobre pessoas tendem a gerar subaproveitamento e frustração.',
      estilovida:'O equilíbrio entre vida profissional e pessoal não é um desejo — é uma condição estrutural de sustentação. Ambientes que ignoram esse critério tendem a gerar desgaste crescente ao longo do tempo.',
      empreendedorismo:'A criação e a construção de algo próprio são fontes profundas de energia. Ambientes excessivamente operacionais ou que não oferecem espaço para inovação tendem a esgotar a motivação rapidamente.',
      servico:'O impacto em pessoas e causas é um motivador central. Trabalhos desconectados de propósito ou contribuição tendem a gerar vazio, mesmo quando bem remunerados.',
      seguranca:'Estabilidade e previsibilidade são necessidades legítimas e importantes. Mudanças abruptas, ambientes instáveis ou incerteza excessiva tendem a gerar tensão e dificultar a performance.',
      desafio:'O desafio contínuo é combustível. Ambientes acomodados, sem crescimento ou que não exigem o melhor da pessoa tendem a gerar tédio e desmotivação progressiva.'
    };

    const cruzamentos=[];
    if(d.situacoes?.includes('equilibrio')&&sust.sust2==='estilovida')cruzamentos.push('Sinaliza sobrecarga com necessidade de equilíbrio confirmada — ambiente atual está estruturalmente desalinhado com o que sustenta a motivação.');
    if((d.situacoes?.includes('transicao')||d.situacoes?.includes('mudar_empresa'))&&sust.sust1==='autonomia')cruzamentos.push('Busca por mudança combinada com necessidade de autonomia sugere que o ambiente atual limita a liberdade de atuação — não apenas o cargo.');
    if(d.situacoes?.includes('proposito')&&(sust.sust3==='servico'||sust.sust8==='servico'))cruzamentos.push('Sensação de falta de propósito alinhada com alta necessidade de impacto — o trabalho atual não conecta contribuição com identidade.');
    if((d.visao==='nao'||d.visao==='nebulosa')&&sust.sust3==='empreendedorismo')cruzamentos.push('Sem visão clara de futuro e com forte necessidade criativa — pode indicar repressão do potencial empreendedor por falta de espaço ou clareza.');

    if(ordenado.length){
      html+=sec(11,'Tendências de Sustentação Profissional©','#540094','🧭',
        `<div style="font-size:13px;color:var(--texto);line-height:1.7;margin-bottom:14px;background:var(--bg-soft);padding:12px 16px;border-radius:8px">As escolhas deste bloco revelam padrões de motivação e pertencimento que influenciam diretamente a sustentação da carreira. A lógica existe invisivelmente — o que aparece no resultado é uma leitura estratégica, não uma classificação.</div>`+
        ordenado.slice(0,3).map(([k,v])=>
          `<div style="margin-bottom:10px;background:white;border:1px solid var(--borda);border-left:3px solid ${cores_s[k]||'#540094'};border-radius:0 8px 8px 0;padding:12px 16px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <span style="font-family:'Montserrat',sans-serif;font-size:11px;font-weight:700;color:${cores_s[k]||'#540094'}">${nomes[k]||k}</span>
              <span style="font-size:11px;color:var(--muted)">${v} ${v===1?'escolha':'escolhas'}</span>
            </div>
            <div style="font-size:13px;color:var(--texto);line-height:1.65">${leituras[k]||''}</div>
          </div>`
        ).join('')+
        (sust.sustInegociavel?`<div style="background:#54009408;border:1px solid #54009422;border-radius:8px;padding:12px 16px;margin-bottom:10px"><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#540094;margin-bottom:6px">O que é inegociável (resposta livre)</div><div style="font-size:13px;color:var(--texto);line-height:1.65;font-style:italic">"${sust.sustInegociavel}"</div></div>`:'')+
        (sust.sustDesgaste?`<div style="background:#e74c3c08;border:1px solid #e74c3c22;border-radius:8px;padding:12px 16px;margin-bottom:10px"><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#e74c3c;margin-bottom:6px">O que desgasta (resposta livre)</div><div style="font-size:13px;color:var(--texto);line-height:1.65;font-style:italic">"${sust.sustDesgaste}"</div></div>`:'')+
        (cruzamentos.length?`<div style="margin-top:10px"><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#f39c12;margin-bottom:8px">⚡ Cruzamentos com o diagnóstico</div>${cruzamentos.map(c=>`<div style="display:flex;gap:8px;font-size:13px;color:var(--texto);line-height:1.5;margin-bottom:6px"><span style="color:#f39c12;flex-shrink:0">▸</span>${c}</div>`).join('')}</div>`:'')+
        `<div style="font-size:11px;color:var(--muted);margin-top:12px;padding:10px;background:var(--bg-soft);border-radius:6px;font-style:italic">Nota: A análise de Estruturas de Sustentação é interpretativa, não classificatória. Ela enriquece a leitura do diagnóstico e orienta a condução da mentoria.</div>`
      );
    }
  }
  document.getElementById('diagnosticoWrap').innerHTML=html;
}




// ===== PARTE 2 — TRILHA DE DESENVOLVIMENTO =====
function renderFerramentas(d){
  const sits=d.situacoes||[];
  const{lidera,percepcao,planoacao,visao,proposito,linkedin,cv,comunicacao:com,foco}=d;

  // ══════════════════════════════════════════════════════════
  // ETAPA 1 — CENÁRIO PRINCIPAL (mapeamento fixo da situação marcada)
  // ══════════════════════════════════════════════════════════
  const mapeamento={
    crescimento:'LIDERANCA', lideranca:'LIDERANCA',
    visibilidade:'VISIBILIDADE',
    performance:'EXECUCAO',
    equilibrio:'ENERGIA',
    transicao:'DIRECAO', proposito:'DIRECAO',
    mudar_empresa:'MERCADO', sem_entrevistas:'MERCADO',
    nao_passa_entrevistas:'ENTREVISTA',
  };
  const sitPrincipal=sits.find(s=>mapeamento[s])||sits[0]||'';
  const cenario=mapeamento[sitPrincipal]||'DIRECAO';
  const cNome={LIDERANCA:'Liderança',VISIBILIDADE:'Visibilidade',EXECUCAO:'Execução',ENERGIA:'Energia / Sobrecarga',DIRECAO:'Direção / Propósito',MERCADO:'Mercado',ENTREVISTA:'Entrevista'}[cenario];

  // ══════════════════════════════════════════════════════════
  // ETAPA 2 — VALIDAÇÃO DE MERCADO (regra crítica)
  // Ativar se: situação mercado marcada OU LinkedIn/CV fracos
  // ══════════════════════════════════════════════════════════
  const linkedinFraco=linkedin==='nao'||linkedin==='basico';
  const cvFraco=cv==='nao'||cv==='parcial';
  // Se o próprio checkbox mercado foi marcado → validado automaticamente
  const marcouMercado=sits.includes('mudar_empresa')||sits.includes('sem_entrevistas');
  const mercadoValidado=cenario==='MERCADO'&&(marcouMercado||linkedinFraco||cvFraco);

  // ── Estrutura de meses ──
  const meses=[
    {mes:1,titulo:'Mês 1 — Clareza',        sub:'Roda da Vida · Valores · Metas SMART',          obj:'Definir onde está e para onde quer ir', f:[]},
    {mes:2,titulo:'Mês 2 — Autoconhecimento',sub:'Crenças · Ampliação da percepção',              obj:'Identificar padrões e bloqueios internos', f:[]},
    {mes:3,titulo:'Mês 3 — Posicionamento',  sub:'Feedback 360 · Perguntas poderosas',            obj:'Ajustar percepção e posicionamento', f:[]},
    {mes:4,titulo:'Mês 4 — Execução',        sub:'5W2H · Foco na alavancagem',                   obj:'Transformar metas em execução consistente', f:[]},
    {mes:5,titulo:'Mês 5 — Estratégia',      sub:'Propósito · Discurso de 80 anos',              obj:'Definir crescimento e posicionamento de longo prazo', f:[]},
    {mes:6,titulo:'Mês 6 — Consolidação',    sub:'Roda da Vida comparativa · Relatório · Valor invisível', obj:'Consolidar evolução e planejar o próximo ciclo', f:[]},
  ];
  const add=(i,n,t,m)=>meses[i].f.push({nome:n,tag:t,motivo:m});
  const dN={D:'Dominância (D)',I:'Influência (I)',S:'Estabilidade (S)',C:'Conformidade (C)'};
  const lN={PA:'Palavras de Afirmação',TQ:'Tempo de Qualidade',PR:'Recebimento de Presentes',AS:'Atos de Serviço',TF:'Toque Físico'};

  // ══════════════════════════════════════════════════════════
  // BASE FIXA — nomes e descrições exatas do documento
  // ══════════════════════════════════════════════════════════

  // Mês 1 — Clareza
  const dp=d.disc?d.disc.principal:null;
  if(dp) add(0,'DISC — Perfil Comportamental','base',`Perfil ${dN[dp]} — base de todo o processo de autoconhecimento`);
  else   add(0,'DISC — Perfil Comportamental','base','Aplicar na primeira sessão — base do autoconhecimento');
  add(0,'Roda da Vida','base','Traz visão clara do momento atual e áreas que precisam de atenção');
  add(0,'Valores','base','Identifica o que realmente guia suas decisões');
  add(0,'Metas SMART','base','Define objetivos claros e alcançáveis');

  // Mês 2 — Autoconhecimento
  if(d.linguagens&&d.linguagens.principal) add(1,'Linguagens do Amor (aplicado ao trabalho)','base',`Linguagem principal: ${lN[d.linguagens.principal]} — revela o que motiva e o que desmotiva no trabalho`);
  else add(1,'Linguagens do Amor (aplicado ao trabalho)','base','Revela o que motiva e o que desmotiva no trabalho');
  add(1,'Crenças','base','Identifica padrões que podem estar limitando seu crescimento');
  add(1,'Ampliação da percepção','base','Desenvolve consciência sobre comportamentos e escolhas');

  // Mês 3 — Posicionamento
  add(2,'Feedback 360','base',percepcao==='nao'?'Mostra como você é percebido pelos outros — ponto de partida essencial':'Mostra como você é percebido pelos outros');
  add(2,'Perguntas poderosas','base','Gera reflexões que destravam decisões importantes');

  // Mês 4 — Execução
  add(3,'5W2H','base','Estrutura ações de forma clara e organizada');
  add(3,'Foco na alavancagem','base','Direciona energia para o que gera mais resultado');

  // Mês 5 — Estratégia
  add(4,'Propósito','base','Conecta sua carreira com significado');
  add(4,'Discurso de 80 anos','base','Amplia visão de longo prazo');

  // Mês 6 — Consolidação
  add(5,'Roda da Vida comparativa','base','Mostra evolução ao longo da jornada');
  add(5,'Relatório','base','Consolida aprendizados e resultados');
  add(5,'Valor invisível','base','Identifica pontos fortes que ainda não estão sendo utilizados');

  // ══════════════════════════════════════════════════════════
  // FERRAMENTAS ADICIONAIS
  // Máx. 3 · mês correto · 1 frase de conexão com o problema
  // ══════════════════════════════════════════════════════════
  const nu=new Set(meses.flatMap(m=>m.f.map(f=>f.nome.toLowerCase())));
  let nAdd=0;
  function addExtra(i,nome,motivo){
    if(nAdd>=3)return;
    if(nu.has(nome.toLowerCase()))return;
    add(i,nome,'extra',motivo);
    nu.add(nome.toLowerCase());
    nAdd++;
  }

  if(cenario==='VISIBILIDADE'){
    addExtra(2,'PVP','Define seu posicionamento e como comunicar seu valor');
    addExtra(2,'Mapa de Visibilidade','Estrutura ações para aumentar reconhecimento');

  } else if(cenario==='EXECUCAO'){
    addExtra(3,'OKR','Cria metas claras com acompanhamento');
    addExtra(3,'Método 12 semanas','Aumenta foco e consistência na execução');

  } else if(cenario==='MERCADO' && mercadoValidado){
    addExtra(4,'Currículo','Ajusta apresentação profissional para gerar mais oportunidades');
    addExtra(4,'LinkedIn','Fortalece presença e visibilidade no mercado');
    addExtra(4,'Palavras-chave','Aumenta a chance de ser encontrado por recrutadores');

  } else if(cenario==='ENTREVISTA'){
    addExtra(4,'Pitch 60s','Estrutura sua apresentação profissional');
    addExtra(4,'STAR','Organiza respostas de forma clara e estratégica');

  } else if(cenario==='DIRECAO'){
    addExtra(0,'Ikigai','Ajuda a encontrar direção alinhada com seus interesses');
    addExtra(0,'Linha do Tempo','Mostra padrões e decisões da sua trajetória');

  } else if(cenario==='ENERGIA'){
    addExtra(1,'Curva de Energia','Identifica o que gera desgaste e o que impulsiona');

  } else if(cenario==='LIDERANCA'){
    addExtra(2,'Comunicação','Desenvolve clareza e influência');
    addExtra(3,'Gestão de Conflitos','Ajuda a lidar com situações difíceis de forma estratégica');
  }

  // ── Obs. LinkedIn/CV ──
  const obs=(linkedinFraco||cvFraco||sits.includes('visibilidade'))
    ?`<div class="obs-box"><h4>LinkedIn e Curr&#237;culo</h4><p>LinkedIn e/ou curr&#237;culo precisam de aten&#231;&#227;o. Recomendado dedicar uma sess&#227;o no M&#234;s ${cenario==='MERCADO'?'5':'3'} para estruturar presen&#231;a digital.</p></div>`
    :'';

  // ── Cabeçalho ──
  const cConexao={VISIBILIDADE:'Você tem resultado mas falta reconhecimento — essas ferramentas conectam sua entrega com quem precisa ver.',EXECUCAO:'Você sabe o que fazer mas trava na execução — essas ferramentas criam método e consistência.',MERCADO:'Você precisa ser encontrado antes de ser entrevistado — essas ferramentas constroem sua presença.',ENTREVISTA:'Você chega nas entrevistas mas não converte — essas ferramentas estruturam sua comunicação.',DIRECAO:'Você precisa de clareza antes de qualquer ação — essas ferramentas revelam o caminho certo.',ENERGIA:'Seu maior bloqueio é o desgaste — essa ferramenta mostra o que drena e o que impulsiona.',LIDERANCA:'Você lidera mas precisa evoluir na comunicação e gestão — essas ferramentas desenvolvem esse pilar.'}[cenario]||'';

  const header=`
    <div style="background:linear-gradient(135deg,rgba(84,0,148,.07),rgba(33,196,247,.05));border:1px solid rgba(84,0,148,.2);border-radius:10px;padding:16px 20px;margin-bottom:16px">
      <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#540094;margin-bottom:8px">Trilha de Desenvolvimento · 6 Meses</div>
      <div style="font-size:13px;color:var(--texto);line-height:1.7;margin-bottom:${cConexao?'10px':'0'}">
        Cenário: <strong style="color:#540094">${cNome}</strong>
        ${cenario==='MERCADO'&&!mercadoValidado?' &nbsp;·&nbsp; <span style="color:#f39c12;font-size:12px">⚠️ Ferramentas de mercado não ativadas — LinkedIn e currículo não foram sinalizados como problema</span>':''}
      </div>
      ${cConexao?`<div style="font-size:12px;color:var(--muted);line-height:1.6;background:rgba(84,0,148,.05);border-radius:6px;padding:10px 12px;border-left:3px solid #540094">${cConexao}</div>`:''}
    </div>`;

  // ── Render trilha ──
  document.getElementById('ferramentasWrap').innerHTML=header+meses.map(m=>`
    <div class="mes-card">
      <div class="mes-header">
        <div class="mes-badge">${m.mes}</div>
        <div class="mes-info">
          <h3>${m.titulo}</h3>
          <p style="color:var(--muted);font-size:11px">${m.obj}</p>
        </div>
      </div>
      <ul class="ferramenta-list">
        ${m.f.map(f=>`
          <li class="ferramenta-item ${f.tag==='extra'?'extra':'base'}">
            <span class="tag ${f.tag==='extra'?'extra':'base'}">${f.tag==='base'?'Base':'Adicional'}</span>
            <div>
              <span class="ferramenta-nome">${f.nome}</span>
              <span class="ferramenta-motivo">${f.motivo}</span>
            </div>
          </li>`).join('')}
      </ul>
    </div>`).join('')+obs;
}