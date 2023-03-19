import * as express from "express";

//create the module
let transactions:any = express.Router();

//creating authorization
let auth:any = (req:any , res:any , next:any)=>{
    //read the headers
    let allHeaders:any = req.headers;
    //read the token
    let token:any = allHeaders.token;
    if(token === "mateen"){
        next(); //success
    }
    else{
        res.status(400).json({auth : "failed"});
    }
};

//creating second authorization
let autho:any = (req:any , res:any , next:any)=>{
    //reading the headers
    let allHeaders:any = autho.headers;
    //reading the token
    let wish:any = allHeaders.token;
    if(wish === "hello"){
        next();
    }
    else{
        res.status(400).json({auth : "failed"});
    }
};

//creating a GET Request
transactions.get("/login" , [autho] , (req:any , res:any):any=>{
    res.status(200).json({message : "Welcome to the Transactions module!"});
});

export default transactions;