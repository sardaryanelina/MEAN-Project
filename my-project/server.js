const http = require("http");
const server = http.createServer((req, res) => {
  res.end('this is my first response');
});
server.listen(3000);
