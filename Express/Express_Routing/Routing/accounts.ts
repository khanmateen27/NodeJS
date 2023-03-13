import * as express from "express";

let accounts:any = express.Router();

accounts.get("/" , (req:any , res:any):any=>{
    res.status(200).json({message : "Accounts Page GET Request"});
});

accounts.post("/" , (req:any , res:any):any =>{
    res.status(200).json({message : "Accounts Page POST Request"});
});

export default accounts;