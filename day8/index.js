const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("hello worldnhi");
  })
  .listen(3000);
