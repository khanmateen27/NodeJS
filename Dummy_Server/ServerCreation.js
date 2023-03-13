//require module used to import the modules
// once the http module is imported successfully it will return an http object
let http = require('http');
//createServer() is the method used to create the http Server 
// http.createServer will return a server instance 
//CallBack function is the argument for the createServer() method
//inside of the callback function we have to supply two arguments (req-> request and res-> response)
//-> req ---> to recieve data from the Client eg React , Angular , etc..
//-> res ---> to reply the client
let server = http.createServer((req,res)=>{
    //res.write() method is used to give the Message to the Client
    res.write("<h1>Hello World!!</h1>");
    //after giving our message we need to lock the response object.!
    res.end();
})

//assigning port Number 
server.listen(8080);
console.log("Server Listening at 8080");