(function () {
  var $ = function (id) { return document.getElementById(id); };

  // Break the rock: three hits split the boulder.
  var hits = 0;
  var messages = ['Tap the boulder to start breaking', 'Hit 1 of 3 – cracks are forming', 'Hit 2 of 3 – one more', 'Rock broken. Yours is next.'];
  var bars = document.querySelectorAll('#hit-bars .hit-bar');

  function renderRock() {
    bars.forEach(function (bar, i) { bar.classList.toggle('on', i < hits); });
    $('rock-status').textContent = messages[hits];
    $('rock-done').hidden = hits < 3;
    $('rock-btn').setAttribute('aria-label', hits < 3 ? 'Hit the boulder with the breaker' : 'Boulder broken');
    $('hammer').setAttribute('class', hits === 0 ? 'hammer-idle' : hits % 2 ? 'hammer-a' : 'hammer-b');
    $('rock-shake').setAttribute('class', hits === 0 ? '' : hits % 2 ? 'shake-a' : 'shake-b');
    $('rock-left').classList.toggle('split', hits >= 3);
    $('rock-right').classList.toggle('split', hits >= 3);
    $('crack1').classList.toggle('on', hits >= 1 && hits < 3);
    $('crack2').classList.toggle('on', hits === 2);
    $('chips-a').classList.toggle('on', hits >= 2);
    $('chips-b').classList.toggle('on', hits >= 3);
  }

  $('rock-btn').addEventListener('click', function () {
    if (hits < 3) { hits += 1; renderRock(); }
  });
  $('rock-reset').addEventListener('click', function () { hits = 0; renderRock(); });

  // Basement planner: rough excavation estimate from plot area, levels and ground type.
  var plan = { area: 6000, levels: 2, soil: 'soil' };
  var soils = {
    soil: { label: 'Soil', bulk: 1.25, rate: 450 },
    soft: { label: 'Soft rock', bulk: 1.35, rate: 200 },
    hard: { label: 'Hard rock', bulk: 1.5, rate: 90 }
  };
  var fmt = function (n) { return n.toLocaleString('en-IN'); };

  function renderPlan() {
    var s = soils[plan.soil];
    var depth = plan.levels * 3.5 + 1;
    var vol = Math.round(plan.area * 0.0929 * depth);
    var loads = Math.ceil(vol * s.bulk / 16);
    var exc = vol < 4000 ? 1 : vol < 12000 ? 2 : vol < 25000 ? 3 : 4;
    var tip = Math.min(8, exc * 2);
    var days = Math.max(Math.ceil(vol / (s.rate * exc)), Math.ceil(loads / (tip * 8)));

    $('area-label').textContent = fmt(plan.area) + ' sq ft';
    document.querySelectorAll('[data-level]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(Number(b.dataset.level) === plan.levels));
    });
    document.querySelectorAll('[data-soil]').forEach(function (b) {
      if (b.classList.contains('pill')) b.setAttribute('aria-pressed', String(b.dataset.soil === plan.soil));
    });
    $('ground').dataset.soil = plan.soil;
    var pit = $('pit');
    pit.style.height = (plan.levels * 58 + 12) + 'px';
    pit.innerHTML = '';
    for (var n = 1; n <= plan.levels; n++) {
      var mark = document.createElement('span');
      mark.className = 'pit-level';
      mark.style.top = ((n - 1) * 58) + 'px';
      mark.textContent = 'B' + n;
      pit.appendChild(mark);
    }
    $('depth-label').textContent = 'About ' + depth.toFixed(1) + ' m deep';
    $('vol-label').textContent = fmt(vol) + ' m³';
    $('loads-label').textContent = fmt(loads);
    $('machines-label').textContent = exc + ' + ' + tip;
    $('machines-note').textContent = plan.soil === 'soil' ? 'excavators + tippers' : 'excavators + tippers, with breakers';
    $('days-label').textContent = days + ' days';
    $('shoring-note').hidden = plan.levels < 2;

    var msg = 'Hi RSP, I used the Basement Planner on your website.\nPlot area: ' + fmt(plan.area) + ' sq ft\nBasement levels: ' + plan.levels +
      '\nGround: ' + s.label + '\nEstimate: about ' + fmt(vol) + ' cubic metres, ' + fmt(loads) + ' truckloads, ' + days +
      ' working days.\nPlease share an exact quote. Site location: ';
    $('plan-wa').href = 'https://wa.me/919901039765?text=' + encodeURIComponent(msg);
  }

  $('plan-area').addEventListener('input', function (e) { plan.area = Number(e.target.value); renderPlan(); });
  document.querySelectorAll('.pill[data-level]').forEach(function (b) {
    b.addEventListener('click', function () { plan.levels = Number(b.dataset.level); renderPlan(); });
  });
  document.querySelectorAll('.pill[data-soil]').forEach(function (b) {
    b.addEventListener('click', function () { plan.soil = b.dataset.soil; renderPlan(); });
  });

  renderRock();
  renderPlan();
})();
