let http = require('http');
//URL module is used to read the query Parameters
//URL module is also a predefined Module
//Available along with the Node Software
let url = require('url');
//server Creation
let server = http.createServer((req , res)=>{
    //set the MIME type
    //MIME -> Communcication Language between client and server.
    res.writeHead(200 , {'content-Type':'text/html'});
    let obj = url.parse(req.url,true).query;
    if(obj.uname === 'khanmateen_27' && obj.upwd === 'mateenkhan'){
        res.write("<h1>Login Successfull!</h1>")
    }
    else{
        res.write("<h2>Login failed!</h2>");
    }
    res.end();
});

server.listen(8080);
console.log("Server Running at 8080");


