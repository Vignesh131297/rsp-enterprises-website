(function () {
  // ---- Update every week -------------------------------------------------
  // How many of each machine are free this week. Use null for "Ask for this week".
  var AVAILABLE_THIS_WEEK = {
    excavators: null, // out of 4
    tippers: null,    // out of 8
    jcb: null,        // out of 2
    tankers: null,    // out of 5
    ambulances: null  // out of 3
  };
  var UPDATED_ON = ''; // e.g. '3 Nov 2026'
  // ------------------------------------------------------------------------

  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  };
  var fleet = [
    { key: 'excavators', name: 'Excavators', one: 'an excavator', total: 4, img: 'd1dbc32318c8978c61df1df586899387', alt: 'Hyundai crawler excavator', fit: 'cover' },
    { key: 'tippers', name: 'Tippers', one: 'a tipper', total: 8, img: 'b9bdd92fb3a9d41ddeaca6e452c89c0e', alt: 'Tipper truck', fit: 'cover' },
    { key: 'jcb', name: 'Backhoe loaders (JCB)', one: 'a JCB backhoe loader', total: 2, img: '27c5ad43101a0f72718648710f1307ab', alt: 'Backhoe loader', fit: 'contain' },
    { key: 'tankers', name: 'Water tankers', one: 'a water tanker', total: 5, img: '71160e83f42554a11160c7597f97cc70', alt: 'Water tanker truck', fit: 'contain' },
    { key: 'ambulances', name: 'Ambulances', one: 'an ambulance', total: 3, img: 'e71ae3c8dfd34415bf345ee6e3781788', alt: 'Ambulance van', fit: 'contain' }
  ];

  document.getElementById('fleet-grid').innerHTML = fleet.map(function (m) {
    var n = AVAILABLE_THIS_WEEK[m.key];
    var set = n !== null && n !== undefined;
    var week = n === 0 ? 'next week' : 'this week';
    var tone = !set ? 'background: #EFEAE2; color: #1C1B19' : n === 0 ? 'background: #1C1B19; color: #FFFFFF' : 'background: #E8731A; color: #1C1B19';
    var badge = !set ? 'Ask for this week' : n === 0 ? 'Booked this week' : n + ' of ' + m.total + ' free';
    var wa = 'https://wa.me/919901039765?text=' + encodeURIComponent('Hi RSP, is ' + m.one + ' available ' + week + '? Site location: ');
    return '<div style="background: #FFFFFF; border: 1px solid #E2DDD5; border-radius: 6px; overflow: hidden; display: flex; flex-direction: column">' +
      '<img src="assets/img/' + m.img + '.jpg" alt="' + esc(m.alt) + '" loading="lazy" style="width: 100%; height: 160px; object-fit: ' + m.fit + '; background: #FFFFFF">' +
      '<div style="padding: 18px 18px 8px; display: flex; justify-content: space-between; align-items: baseline; gap: 10px"><span style="font-weight: 600">' + esc(m.name) + '</span>' +
      '<span style="font-family: \'Barlow Condensed\', sans-serif; font-weight: 700; font-size: 40px; color: #A84A12">' + m.total + '</span></div>' +
      '<div style="padding: 0 18px 18px; display: flex; flex-direction: column; gap: 12px; flex-grow: 1">' +
      '<span style="align-self: flex-start; font-size: 13px; letter-spacing: 1px; font-weight: 700; padding: 6px 10px; border-radius: 3px; ' + tone + '">' + badge + '</span>' +
      '<a href="' + wa + '" target="_blank" rel="noopener" style="margin-top: auto; font-weight: 600; font-size: 15px">' + (n === 0 ? 'Book for next week →' : 'Check on WhatsApp →') + '</a>' +
      '</div></div>';
  }).join('');

  document.getElementById('avail-note').textContent = UPDATED_ON ? 'Updated ' + UPDATED_ON : 'Message us to book a machine for your site';
})();
