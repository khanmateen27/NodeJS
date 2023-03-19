import * as express from "express";

//importing body-parser module
//body-Parser module is used to read the POST Parameters
import * as bodyparser  from "body-parser";

//creating the rest object
let app:any = express();

//set the MIME type
//MIME->Communication language between client and the server
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended : false}));

//authorization code
let auth:any = (req:any , res:any , next:any):any=>{
    //read the headers
    let allHeaders:any = req.headers;
    //read the tokens
    let token:any = allHeaders.token;

    //checking the tokins
    if(token === "mateen"){
        next(); //auth success
    }
    else{
        res.status(400).json({auth : "failed"});
    }
};

//creating a post request
app.post("/login" , [auth] , (req:any , res:any):any=>{
    if(req.body.uname === "admin" && req.body.upwd === "admin"){
        res.status(200).json({login : "success"});
    }
    else{
        res.status(200).json({login : "failed"});
    }
});

app.listen(8080 , ()=>{
    console.log("Server Started!");
});