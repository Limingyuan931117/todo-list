const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });

    res.write('<h1 style="text-align:center">Hello word</h1>');

    res.end();
  })
  .listen(3000);
