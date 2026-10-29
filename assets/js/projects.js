(function () {
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  };
  var img = function (id) { return id ? 'assets/img/' + id + '.jpg' : ''; };
  var LOGO = 'assets/img/67ebfff0b3df75da59b5433e3e12d3f2.jpg';

  // To add a project, add a line here. Leave img empty to show the "photos coming soon" tile.
  var projects = [
    { name: 'Embassy Greenshore', type: 'SITE WORKS', place: 'Bangalore', status: 'Ongoing', img: '47a4a02731a59c2b3fd8b837d76b33b6', alt: 'Survey team setting out levels at Embassy Greenshore' },
    { name: 'Embassy Varde II', type: 'EXCAVATION', place: 'Bangalore', status: 'Ongoing', img: '2d53399c188f71f2031614a5261cad28', alt: 'Excavator and tippers working a deep cut at Embassy Varde II' },
    { name: 'Hical Technologies', type: 'EXCAVATION', place: 'Hosur, Tamil Nadu', status: 'Ongoing', img: '6aff9b0ac9104620de49770576f20b3b', alt: 'Excavator loading broken rock into a tipper at Hical Technologies' },
    { name: 'Ascent Circuits', type: 'ROCK EXCAVATION', place: 'Sultanpet, Hosur, Tamil Nadu', status: 'Ongoing', img: 'ae10a5dc589f3ec5d936e1b33a65db28', alt: 'Excavators and tippers on rocky ground at Ascent Circuits' },
    { name: 'Embassy East Avenue', type: 'EXCAVATION', place: 'Bangalore', status: 'Completed', img: '12a1ce080e916a5cdfcdc177847236dd', alt: 'Excavation and rock work at Embassy East Avenue' },
    { name: 'Embassy Varde I', type: 'BULK EXCAVATION', place: 'Bangalore', status: 'Completed', img: 'f5a1026250525d0c53915267b6276777', alt: 'Deep cut in red earth at Embassy Varde I' },
    { name: 'Embassy Paradiso', type: 'PLOTTED DEVELOPMENT', place: 'Bangalore', status: 'Completed', img: '', alt: '' },
    { name: 'HSK Logistics (Maple Tree)', type: 'SITE WORKS', place: 'Bangalore', status: 'Completed', img: '', alt: '' },
    { name: 'Adarsh RMZ Drain Works', type: 'CIVIL · DRAINS', place: 'Bangalore', status: 'Completed', img: '5a90d3098ae1cec387494559c3d417d0', alt: 'Reinforcement for a concrete drain' },
    { name: 'RMZ Underpass', type: 'CIVIL · UNDERPASS', place: 'Bangalore', status: 'Completed', img: 'd351cb372a1dc5a83fb3cdec7b930be5', alt: 'Finished lit underpass' },
    { name: 'UrbanUp – G+3', type: 'BUILDING', place: 'Bangalore', status: 'Completed', img: 'bd078e8a0b65fde0442b11c39dc23540', alt: 'Corridor finishing work in UrbanUp building' },
    { name: 'Private PG Building G+5', type: 'BUILDING', place: 'Bangalore', status: 'Completed', img: '750d745b8ec72cb368664aff8b79a582', alt: 'G+5 PG building with scaffolding' },
    { name: 'Glowwell – Compound Wall', type: 'CIVIL · WALLS', place: 'Chennai', status: 'Completed', img: '36b1e20be6980584370771179695f332', alt: 'Concrete block compound wall' },
    { name: 'Tuticorin Airport', type: 'PAVEMENT WORKS', place: 'Tuticorin, Tamil Nadu', status: 'Completed', img: 'fff8009cb604d0f5ab64edea30bbadc2', alt: 'Concrete paving on the airport runway area' },
    { name: 'Private Buildings', type: 'RESIDENTIAL', place: 'Bangalore & Tamil Nadu', status: 'Completed', img: 'f5d1bf3cfff6c840519d5e15a7fd1cb9', alt: 'Completed private house' }
  ];

  // Filters and project cards
  var filter = 'all';
  var ongoing = projects.filter(function (p) { return p.status === 'Ongoing'; }).length;
  var filterDefs = [
    { id: 'all', label: 'All projects (' + projects.length + ')' },
    { id: 'Ongoing', label: 'Ongoing (' + ongoing + ')' },
    { id: 'Completed', label: 'Completed (' + (projects.length - ongoing) + ')' }
  ];
  filterDefs.forEach(function (f) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'filter-btn';
    b.textContent = f.label;
    b.addEventListener('click', function () { filter = f.id; renderGrid(); });
    b.dataset.filter = f.id;
    $('filters').appendChild(b);
  });

  function card(p) {
    var on = p.status === 'Ongoing';
    var media = p.img
      ? '<img src="' + img(p.img) + '" alt="' + esc(p.alt) + '" loading="lazy" style="width: 100%; height: 250px; object-fit: cover; display: block">'
      : '<div style="height: 250px; background: #1C1B19; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; color: #C9C2B8; font-size: 13px; letter-spacing: 1.5px; font-weight: 600"><img src="' + LOGO + '" alt="" style="width: 76px; height: 76px; object-fit: cover; border-radius: 50%; background: #FFFFFF">SITE PHOTOS COMING SOON</div>';
    var badge = 'position: absolute; top: 14px; left: 14px; font-size: 12px; letter-spacing: 1.5px; font-weight: 600; padding: 5px 10px; border-radius: 3px; ' +
      (on ? 'background: #E8731A; color: #1C1B19' : 'background: #1C1B19; color: #FFFFFF');
    return '<article style="background: #FFFFFF; border: 1px solid #E2DDD5; border-radius: 6px; overflow: hidden; display: flex; flex-direction: column">' +
      '<div style="position: relative">' + media + '<span style="' + badge + '">' + (on ? 'IN PROGRESS' : 'COMPLETED') + '</span></div>' +
      '<div style="padding: 22px 24px 26px; display: flex; flex-direction: column; gap: 6px">' +
      '<div style="font-size: 13px; letter-spacing: 1.5px; color: #A84A12; font-weight: 600">' + esc(p.type) + '</div>' +
      '<h2 style="margin: 0; font-family: \'Barlow Condensed\', sans-serif; font-size: 30px; line-height: 1.1; text-transform: uppercase">' + esc(p.name) + '</h2>' +
      '<div style="color: #57534E; font-size: 15px">' + esc(p.place) + '</div></div></article>';
  }

  function renderGrid() {
    document.querySelectorAll('#filters .filter-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filter === filter));
    });
    $('project-grid').innerHTML = projects
      .filter(function (p) { return filter === 'all' || p.status === filter; })
      .map(card).join('');
  }

  // Rock-to-ready slider
  function renderSlider() {
    var pos = Number($('ba-range').value);
    $('ba-after').style.clipPath = 'inset(0 0 0 ' + pos + '%)';
    $('ba-handle').style.left = pos + '%';
  }
  $('ba-range').addEventListener('input', renderSlider);

  // Project map (positions are real latitude/longitude, scaled to the map box)
  var cityDefs = [
    { id: 'blr', name: 'Bangalore', x: 16.4, y: 8.6, size: 44, pin: 'translate(-50%, -50%)', label: 'translate(-50%, calc(-100% - 30px))' },
    { id: 'hos', name: 'Hosur', x: 23.1, y: 13.2, size: 40, pin: 'translate(calc(-50% + 8px), calc(-50% + 8px))', label: 'translate(36px, calc(-50% + 8px))' },
    { id: 'che', name: 'Chennai', x: 90.8, y: 6.4, size: 40, pin: 'translate(-50%, -50%)', label: 'translate(-50%, 28px)' },
    { id: 'tut', name: 'Tuticorin', x: 31.4, y: 92.8, size: 40, pin: 'translate(-50%, -50%)', label: 'translate(30px, -50%)' }
  ];
  var cityOf = function (p) {
    return p.place.indexOf('Hosur') > -1 ? 'hos' : p.place.indexOf('Chennai') > -1 ? 'che' : p.place.indexOf('Tuticorin') > -1 ? 'tut' : 'blr';
  };
  var city = 'blr';
  var pins = $('map-pins');
  cityDefs.forEach(function (c) {
    var count = projects.filter(function (p) { return cityOf(p) === c.id; }).length;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'pin';
    b.dataset.city = c.id;
    b.textContent = count;
    b.setAttribute('aria-label', c.name + ', ' + count + (count === 1 ? ' project' : ' projects'));
    b.style.cssText = 'left: ' + c.x + '%; top: ' + c.y + '%; transform: ' + c.pin + '; width: ' + c.size + 'px; height: ' + c.size + 'px';
    b.addEventListener('click', function () { city = c.id; renderMap(); });
    var label = document.createElement('span');
    label.className = 'pin-label';
    label.dataset.city = c.id;
    label.setAttribute('aria-hidden', 'true');
    label.textContent = c.name;
    label.style.cssText = 'left: ' + c.x + '%; top: ' + c.y + '%; transform: ' + c.label;
    pins.appendChild(b);
    pins.appendChild(label);
  });

  function renderMap() {
    pins.querySelectorAll('.pin').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.city === city)); });
    pins.querySelectorAll('.pin-label').forEach(function (l) { l.classList.toggle('on', l.dataset.city === city); });
    var sel = cityDefs.filter(function (c) { return c.id === city; })[0];
    var list = projects.filter(function (p) { return cityOf(p) === city; });
    var live = list.filter(function (p) { return p.status === 'Ongoing'; }).length;
    $('city-count').textContent = list.length;
    $('city-name').textContent = sel.name;
    $('city-note').textContent = live + ' ongoing · ' + (list.length - live) + ' completed';
    $('city-list').innerHTML = list.map(function (p) {
      var on = p.status === 'Ongoing';
      var chip = 'flex: none; font-size: 12px; letter-spacing: 1.5px; font-weight: 700; padding: 5px 10px; border-radius: 3px; ' +
        (on ? 'background: #E8731A; color: #1C1B19' : 'border: 1px solid #5E5953; color: #C9C2B8');
      return '<li style="padding: 14px 0; border-bottom: 1px solid #34312D; display: flex; justify-content: space-between; align-items: center; gap: 12px">' +
        '<span><span style="display: block; font-weight: 600; color: #FFFFFF">' + esc(p.name) + '</span>' +
        '<span style="display: block; font-size: 13px; letter-spacing: 1px; color: #B9B0A2">' + esc(p.type) + '</span></span>' +
        '<span style="' + chip + '">' + (on ? 'ONGOING' : 'COMPLETED') + '</span></li>';
    }).join('');
  }

  renderGrid();
  renderSlider();
  renderMap();
})();
