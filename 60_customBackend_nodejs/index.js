const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const service = fs.readFileSync('./service.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200;
  url = req.url
  res.setHeader('Content-Type', 'text/html');

  if(url == '/'){
    res.end(home);
  }
  else if(url == '/about.html'){
    res.end(about)
  }
  else if(url == '/service.html'){
    res.end(service)
  }
  else if(url == '/contact.html'){
    res.end(contact)
  }
  else{
    res.statusCode = 404;
    res.end("<h1>404 Not found </h1>")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});