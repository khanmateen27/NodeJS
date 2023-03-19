import * as express from "express";

//creating a module
let cards:any = express.Router();

//creating POST request
cards.post("/" , (req:any , res:any)=>{
    res.status(200).json({message : "Welcome to cards Module"});
});

export default cards;