//Read Get Request Parameters
import * as express from "express";

let app:any = express();

app.get("/login" , (req:any , res:any):any =>{
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({login : "success"});
    }
    else{
        res.status(400).json({login : "failed"});
    }
});

app.listen(8080 , ()=>{
    console.log("server started");
});