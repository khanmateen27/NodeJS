import * as express from "express";

//creating the module
let accounts:any = express.Router();

//creating the get REQUEST
//default URL pattern
accounts.get("/login" , (req:any , res:any):any =>{
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({login : "success"});
    }
    else{
        res.status(400).json({login : "failed login"});
    }
});

accounts.get("/" , (req:any , res:any)=>{
    res.status(200).json({message: "Welcome to the Accounts Module"});
});

//exporting the module
export default accounts;