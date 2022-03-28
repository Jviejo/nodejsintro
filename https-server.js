const https = require('https');
const fs = require('fs');

const options = {
  // enforce client certs
  requestCert: false,
  rejectUnauthorized: false,

  key: fs.readFileSync('certificados/server001.key'),
  cert: fs.readFileSync('certificados/server001.crt'),
  ca:  [fs.readFileSync('certificados/ca.crt')] // lista de ca que firman los cliene certificates
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(443);