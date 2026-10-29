(function () {
  // The site is static, so the enquiry is sent through WhatsApp (with an email fallback).
  var form = document.getElementById('enquiry');
  var status = document.getElementById('form-status');
  var val = function (id) { return document.getElementById(id).value.trim(); };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fields = [
      ['Name', val('f-name')],
      ['Company', val('f-company')],
      ['Phone / WhatsApp', val('f-phone')],
      ['Email', val('f-email')],
      ['Service needed', val('f-service')],
      ['Site location', val('f-loc')],
      ['Project details', val('f-msg')]
    ].filter(function (f) { return f[1]; });
    var text = 'Hi RSP, I have an enquiry from your website.\n' + fields.map(function (f) { return f[0] + ': ' + f[1]; }).join('\n');
    window.open('https://wa.me/919901039765?text=' + encodeURIComponent(text), '_blank', 'noopener');
    document.getElementById('mail-fallback').href = 'mailto:sales@rspenterprises.net?cc=rspenterprises2013@gmail.com&subject=' +
      encodeURIComponent('Website enquiry – ' + val('f-service')) + '&body=' + encodeURIComponent(text);
    status.hidden = false;
    status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
