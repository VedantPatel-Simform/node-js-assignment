const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("My first Server started !!!\n");
  })
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
