import * as express from "express";


//in order to create a rest object need to call express constructor
let app:any = express();

//creating a default get Request
app.get("/" , (req:any , res:any):any=>{
    res.status(200).json({message : "default get request"});
});


app.get("/ts" , (req:any , res:any):any =>{
    res.status(200).json({message : "Welcome to TypeScript with NodeJS"});
});

app.listen(8080 , ()=>{
    console.log("server started");
});