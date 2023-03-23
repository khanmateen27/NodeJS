import * as express from "express";

//creating the Module
let transactions:any = express.Router();

//creating the GET Request
//default GET Request
transactions.get("/" , (req:any , res:any):any =>{
    res.status(200).json({message : "Welcome to the Transactions Module"});
});

//creating authentication 
let auth:any = (req:any , res:any , next:any):any =>{
    let allHeaders:any = req.headers;
    let token:any = allHeaders.token;
    console.log("Token",token) 
    if(token === 'mateen'){
        next(); //success
    }
    else{
        res.status(400).json({auth : "failed"});
    }
};

let authentication:any = (req:any , res:any , next:any):any=>{
    let allHeaders:any = req.headers;
    let wish:any = allHeaders.wish;
    console.log(wish)
    if(wish === 'hello'){
        next();
    }
    else{
        res.status(400).json({authentication : "failed"});
    }
};

//GET Request
transactions.get("/login" , [auth , authentication] , (req:any , res:any):any =>{
    res.status(200).json({message : "Welcome to the Transactions Login Module"});
});

export default transactions;