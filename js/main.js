/* =========================================================
   Lohan Auto Center — comportamento da landing page
   1. Configuração       5. Status aberto/fechado
   2. Medição (eventos)  6. Barra fixa de WhatsApp
   3. WhatsApp           7. Painel do alinhamento 3D
   4. Formulário + CTAs  8. Mapa, FAQ, header, entradas
   ========================================================= */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---------- 1. Configuração (edite aqui) ---------- */
  var CONFIG = {
    whatsapp: '5511930798334',
    timezone: 'America/Sao_Paulo',
    // Horário por dia da semana (0 = domingo). null = fechado.
    hours: {
      0: null,
      1: [8, 18], 2: [8, 18], 3: [8, 18], 4: [8, 18], 5: [8, 18],
      6: [8, 12]
    },
    mapEmbed: 'https://www.google.com/maps?q=Lohan+Auto+Center,+Av.+Dom+Pedro+I,+1856,+Campo+Limpo+Paulista+-+SP&output=embed'
  };
  var DAY_NAMES = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  var $ = function (s, ctx) { return (ctx || document).querySelector(s); };
  var $$ = function (s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 2. Medição ---------- */
  // Envia para o Google Tag Manager / GA4, se estiverem instalados.
  function track(event, params) {
    params = params || {};
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: event }, params));
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
  }
  $$('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () { track(el.dataset.track, { secao: closestSection(el) }); });
  });
  function closestSection(el) {
    var s = el.closest('section[id]');
    return s ? s.id : 'rodape';
  }

  /* ---------- 3. WhatsApp ---------- */
  function waUrl(message) {
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(message);
  }
  function openWhatsApp(message, secao) {
    track('whatsapp_click', { secao: secao || 'desconhecida' });
    var win = window.open(waUrl(message), '_blank', 'noopener');
    if (!win) window.location.href = waUrl(message);
  }
  // Links diretos (header, rodapé, FAQ...): mantêm o href como fallback sem JS.
  $$('[data-wa="direct"]').forEach(function (a) {
    if (a.dataset.msg) a.href = waUrl(a.dataset.msg);
    a.addEventListener('click', function () { track('whatsapp_click', { secao: a.dataset.secao }); });
  });

  /* ---------- 4. Formulário de orçamento + CTAs ---------- */
  var form = $('#orcamento');
  var fNome = $('#f-nome');
  var fCarro = $('#f-carro');
  var fCidade = $('#f-cidade');
  var fMedida = $('#f-medida');
  var medidaWrap = $('[data-medida]');
  var contextBox = $('[data-context]');
  var contextText = $('[data-context-text]');
  var submitBtn = $('[data-submit]');
  var submitLabel = $('[data-submit-label]');

  // Contexto vindo de outra seção (sintoma ou intenção específica)
  var ctx = { sintoma: null, intent: null, outro: false, secao: 'hero' };

  function getServico() {
    var checked = $('input[name="servico"]:checked', form);
    return checked ? checked.value : '';
  }
  function setServico(value) {
    $$('input[name="servico"]', form).forEach(function (r) { r.checked = (r.value === value); });
    syncMedida();
  }
  function syncMedida() {
    medidaWrap.hidden = getServico() !== 'Pneus';
  }
  // Toque no chip já marcado desmarca (o campo é opcional)
  $$('.chip input', form).forEach(function (r) {
    r.addEventListener('pointerdown', function () { r.dataset.was = r.checked ? '1' : ''; });
    r.addEventListener('click', function () {
      if (r.dataset.was === '1') { r.checked = false; r.dataset.was = ''; }
      syncMedida();
    });
    r.addEventListener('change', function () { if (ctx.outro) setContext(null); syncMedida(); });
  });

  function setContext(label) {
    if (label) {
      contextText.textContent = label;
      contextBox.hidden = false;
    } else {
      contextBox.hidden = true;
      ctx.sintoma = null; ctx.intent = null; ctx.outro = false;
    }
  }
  $('[data-context-clear]').addEventListener('click', function () { setContext(null); fNome.focus(); });

  function buildMessage() {
    var nome = fNome.value.trim();
    var carro = fCarro.value.trim();
    var cidade = fCidade.value;
    var servico = getServico();
    var intro = 'Olá, Lohan! ' + (nome ? 'Sou ' + nome + ', tenho um ' : 'Tenho um ') + carro +
      (cidade && cidade !== 'Outra cidade' ? ' e sou de ' + cidade : '') + '.';

    if (ctx.sintoma) return intro + ' Meu carro está ' + ctx.sintoma + '. Podem avaliar?';
    if (ctx.intent === 'agendar' && servico === 'Alinhamento 3D') return intro + ' Quero agendar um alinhamento 3D.';
    if (servico === 'Pneus') {
      var medida = fMedida.value.trim();
      return intro + ' Quero cotar pneus' + (medida ? ' ' + medida : '') + '.';
    }
    if (ctx.outro && !servico) return intro + ' Gostaria de um orçamento de outro serviço.';
    if (!servico || servico === 'avaliacao') return intro + ' Gostaria de um orçamento grátis.';
    return intro + ' Gostaria de um orçamento de ' + servico + '.';
  }

  function showError(input, show) {
    var err = document.getElementById(input.getAttribute('aria-describedby'));
    input.setAttribute('aria-invalid', show ? 'true' : 'false');
    if (err) err.hidden = !show;
  }
  // Só "Carro e ano" é obrigatório: cada campo a menos aumenta o envio
  function validate(focusFirst) {
    var okCarro = fCarro.value.trim().length > 1;
    showError(fCarro, !okCarro);
    if (focusFirst && !okCarro) fCarro.focus({ preventScroll: true });
    return okCarro;
  }
  function isFilled() { return fCarro.value.trim().length > 1; }

  // Erro some assim que a pessoa corrige
  [fCarro].forEach(function (input) {
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true' && input.value.trim().length > 1) showError(input, false);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate(true)) return;
    track('form_submit', { secao: ctx.secao, servico: getServico() || 'avaliacao' });
    submitBtn.setAttribute('aria-busy', 'true');
    submitLabel.textContent = 'Abrindo WhatsApp...';
    openWhatsApp(buildMessage(), ctx.secao);
    setTimeout(function () {
      submitBtn.removeAttribute('aria-busy');
      submitLabel.textContent = 'Receber meu orçamento grátis';
    }, 1600);
  });

  // Mensagem curta para quem clica num botão sem ter preenchido a ficha:
  // abre o WhatsApp na hora, com o assunto pronto e um espaço para o carro.
  function quickMessage(servico) {
    var hi = 'Olá, Lohan! ';
    var carro = ' Meu carro é: ';
    if (ctx.sintoma) return hi + 'Meu carro está ' + ctx.sintoma + '. Podem avaliar?' + carro;
    if (ctx.intent === 'agendar') return hi + 'Quero agendar um alinhamento 3D.' + carro;
    if (servico === 'Pneus') return hi + 'Quero cotar pneus. Medida (se souber): ';
    if (servico === 'outro') return hi + 'Gostaria de um orçamento de outro serviço.' + carro;
    if (servico) return hi + 'Gostaria de um orçamento de ' + servico + '.' + carro;
    return hi + 'Gostaria de um orçamento grátis.' + carro;
  }

  // Todos os CTAs da página: botão com "WhatsApp" sempre abre o WhatsApp.
  // Se a ficha do topo já tem o carro preenchido, a mensagem vai completa.
  function handleCta(el) {
    var servico = el.dataset.servico || '';
    ctx.secao = el.dataset.secao || 'cta';
    ctx.sintoma = el.dataset.sintoma || null;
    ctx.intent = el.dataset.intent || null;
    ctx.outro = servico === 'outro';

    if (isFilled()) {
      if (servico && servico !== 'outro') setServico(servico);
      openWhatsApp(buildMessage(), ctx.secao);
    } else {
      openWhatsApp(quickMessage(servico), ctx.secao);
    }
    ctx.sintoma = null; ctx.intent = null; ctx.outro = false;
  }
  $$('[data-cta], [data-sintoma]').forEach(function (el) {
    el.addEventListener('click', function () { handleCta(el); });
  });

  /* ---------- 5. Status aberto / fechado ---------- */
  function nowInSaoPaulo() {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: CONFIG.timezone, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
    }).formatToParts(new Date());
    var get = function (t) { var p = parts.find(function (x) { return x.type === t; }); return p ? p.value : ''; };
    var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    var h = parseInt(get('hour'), 10) % 24;
    return { day: map[get('weekday')], minutes: h * 60 + parseInt(get('minute'), 10) };
  }
  function nextOpening(day, minutes) {
    var today = CONFIG.hours[day];
    if (today && minutes < today[0] * 60) return { label: 'hoje', hour: today[0] };
    for (var i = 1; i <= 7; i++) {
      var d = (day + i) % 7;
      if (CONFIG.hours[d]) return { label: i === 1 ? 'amanhã' : DAY_NAMES[d], hour: CONFIG.hours[d][0] };
    }
    return null;
  }
  function renderStatus() {
    var n = nowInSaoPaulo();
    var h = CONFIG.hours[n.day];
    var open = !!h && n.minutes >= h[0] * 60 && n.minutes < h[1] * 60;
    var status = $('[data-status]');
    var text = $('[data-status-text]');
    var short = $('[data-status-short]');

    if (open) {
      status.classList.add('is-open');
      text.textContent = 'Aberto agora até as ' + h[1] + 'h · respondemos em até 15 min';
      if (short) { short.textContent = '· Aberto agora'; short.classList.remove('is-closed'); }
    } else {
      var next = nextOpening(n.day, n.minutes);
      status.classList.add('is-closed');
      text.textContent = 'Fechado agora · mande sua mensagem, respondemos ' + next.label + ' às ' + next.hour + 'h';
      if (short) { short.textContent = '· Fechado agora'; short.classList.add('is-closed'); }
    }
    $$('.hours-table tr').forEach(function (tr) {
      var days = (tr.dataset.days || '').split(',').map(Number);
      tr.classList.toggle('is-today', days.indexOf(n.day) !== -1);
    });
  }
  renderStatus();
  setInterval(renderStatus, 60 * 1000);

  /* ---------- 6. Barra fixa de WhatsApp (mobile) ---------- */
  // Aparece depois que o hero sai da tela e some quando o formulário está visível.
  var waBar = $('.wa-bar');
  var hero = $('.hero');
  var footer = $('.site-footer');
  var vis = { hero: true, form: true };
  function syncBar() {
    var show = !vis.hero && !vis.form;
    waBar.classList.toggle('is-visible', show);
    waBar.setAttribute('aria-hidden', show ? 'false' : 'true');
    waBar.tabIndex = show ? 0 : -1;
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.target === hero) vis.hero = e.isIntersecting;
        if (e.target === form) vis.form = e.isIntersecting;
      });
      syncBar();
    }, { threshold: 0 }).observe(hero);
    new IntersectionObserver(function (entries) {
      vis.form = entries[0].isIntersecting; syncBar();
    }, { threshold: 0.15 }).observe(form);
  }

  /* ---------- 7. Painel do alinhamento 3D ---------- */
  var readout = $('[data-readout]');
  var readoutStatus = $('[data-readout-status]');
  var readoutPlayed = false;

  function parseDeg(s) { return parseFloat(s.replace('−', '-').replace('+', '').replace(',', '.').replace('°', '')); }
  function fmtDeg(v) {
    var sign = v > 0.0049 ? '+' : (v < -0.0049 ? '−' : '');
    return sign + Math.abs(v).toFixed(2).replace('.', ',') + '°';
  }
  function setReadout(state, animate) {
    readout.dataset.state = state;
    $$('[data-readout-set]', readout).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.readoutSet === state)); });
    readoutStatus.textContent = state === 'depois' ? '4 rodas dentro da medida' : '4 rodas fora da medida';
    $$('dd[data-a]', readout).forEach(function (dd) {
      var from = parseDeg(dd.textContent);
      var to = parseDeg(state === 'depois' ? dd.dataset.d : dd.dataset.a);
      if (!animate || reduceMotion) { dd.textContent = fmtDeg(to); return; }
      var start = null, dur = 1100;
      function step(t) {
        if (!start) start = t;
        var p = Math.min((t - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 4);
        dd.textContent = fmtDeg(from + (to - from) * eased);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  $$('[data-readout-set]', readout).forEach(function (b) {
    b.addEventListener('click', function () { readoutPlayed = true; setReadout(b.dataset.readoutSet, true); });
  });
  // Ao entrar na tela: mostra o "antes" por um instante e ajusta para o "depois"
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !readoutPlayed) {
        readoutPlayed = true;
        ro.disconnect();
        setTimeout(function () { setReadout('depois', true); }, reduceMotion ? 0 : 900);
      }
    }, { threshold: 0.5 });
    ro.observe(readout);
  }

  /* ---------- 8. Mapa, FAQ, header, entradas ---------- */
  var mapBtn = $('[data-map-load]');
  if (mapBtn) {
    mapBtn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = CONFIG.mapEmbed;
      iframe.title = 'Mapa: Lohan Auto Center na Av. Dom Pedro I, 1856';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      $('[data-map]').appendChild(iframe);
      mapBtn.remove();
      track('rota_click', { secao: 'mapa' });
    });
  }

  // FAQ: uma pergunta aberta por vez (para navegadores sem suporte a <details name>)
  var faqItems = $$('.faq details');
  faqItems.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) faqItems.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  var header = $('.site-header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  var year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
