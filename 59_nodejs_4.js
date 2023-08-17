const http = require("http")
const fs = require("fs")

const fileSelect = fs.readFileSync("30_keyframesAnimation.html");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(fileSelect)
})

server.listen(80, '127.0.0.1', ()=>{
    console.log("Server running at http://127.0.0.1:80/");
})
