import * as express from "express";

let transactions:any = express.Router();


transactions.get("/" , (req:any , res:any):any=>{
    res.status(200).json({message : "transaction page"});
});

transactions.get("/transaction" , (req:any , res:any):any =>{
    res.status(200).json({message : "Hello from transaction using NodeJS"});
});


export default transactions;