// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/html" });      //HTML type
//   fs.readFile("index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.end(data);
//     }
//   });
// });
// server.listen(3000);

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "application/json" });
  const jsonData = {                                               //JSON type
    Employee: [
      { name: "hari", email: "hari@gmail.com" },
      { name: "shyam", email: "shyam@gmail.com" },
      { name: "giat", email: "gita@gmail.com" },
    ],
  };
  console.log("Server is running");
  res.end(JSON.stringify(jsonData))
});
server.listen(3000)
