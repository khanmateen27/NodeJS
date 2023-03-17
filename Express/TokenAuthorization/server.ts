//http://localhost:8080/login?uname="admin"&upwd="admin"
//http://localhost:8080/login?uname=mateen&upwd=mateen
import * as express from "express";

//creating rest object
let app:any = express();


//authorization
//will execute first
let auth = (req:any , res:any , next:any):any=>{
    //for reading the headers
    let allHeaderes = req.headers;
    if(allHeaderes.token === 'khan'){
        //used to give the judgement
        next();
    }else{
        res.status(500).json({auth : "failed"});
    }
};
//get Request
//authentication
//will execute after the authorization
app.get("/login" , [auth] , (req:any , res:any):any =>{
    if(req.query.uname==='mateen' && req.query.upwd === "mateen"){
        res.status(200).json({login : "success"});
    }
    else{
        res.status(400).json({login : "failed"});
    }
});

//default get request
app.get("/" , (req:any , res:any):any=>{
    res.sendFile("D:/New folder/Express/TokenAuthorization/index.html");
});

app.listen(8080 , ()=>{
    console.log("server started");
});