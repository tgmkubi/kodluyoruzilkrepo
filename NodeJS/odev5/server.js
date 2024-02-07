const http = require("http");
const fs = require("node:fs");

const PORT = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("./statics/html/index.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  } else if (url === "/hakkimda") {
    fs.readFile("./statics/html/hakkimda.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  } else if (url === "/iletisim") {
    fs.readFile("./statics/html/iletisim.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  } else {
    fs.readFile("./statics/html/hata.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(err.message);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    });
  }
});

server.listen(PORT, (req, res) => {
  console.log(`Sunucu http://localhost:${PORT} da başlatıldı`);
});
