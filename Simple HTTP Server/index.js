const fs = require("fs/promises");
const http = require("http");

const server = http.createServer(async(req,res)=>{
    await fs.writeFile("index.html","<h1> Hello World </h1><p> This is Ayush ... </p>");

    const filedata= await fs.readFile("index.html");
    res.end(filedata)
})
server.listen(5000,()=>{console.log("server is runing on 5000")})