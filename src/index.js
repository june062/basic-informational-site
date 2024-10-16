let http = require("http");
let fs = require("node:fs");

let siteServer = http
  .createServer((request, response) => {
    let webPage = request.url;
    if (webPage === "/contact") {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });

      fs.readFile("./Pages/contact-me.html", "utf8", function (err, data) {
        if (err) throw err;
        response.write(data);
        return response.end();
      });
    } else if (webPage === "/about") {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });

      fs.readFile("./Pages/about.html", "utf8", function (err, data) {
        if (err) throw err;
        response.write(data);
        return response.end();
      });
    } else if (webPage === "/home") {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });

      fs.readFile("./Pages/index.html", "utf8", function (err, data) {
        if (err) throw err;
        response.write(data);
        response.end();
      });
    } else {
      response.writeHead(404, {
        "Content-Type": "text/html",
      });
      fs.readFile("./Pages/404.html", "utf-8", function (err, data) {
        if (err) throw err;
        response.write(data);
        response.end();
      });
    }
  })
  .listen(3000);
