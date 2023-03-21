import * as express from "express";
import * as mongodb from "mongodb";

//creating the client
let dbUser:any = mongodb.MongoClient;

//deleting the data from the database
let remove:any = express.Router().delete("/" , (req:any , res:any):any=>{
    dbUser.connect(""),(err:any , connection:any):any=>{
        if(err) throw err
        else{
            let db:any = connection.db("CRUD_Application");
            db.collection("products").deleteOne({"id" : req.body.id} , (err , res)=>{
                if(err) throw err;
                else{
                    res.status(200).json({message : `${req.body.id} record deleted`});
                }
            });
        }
    }
});
export default remove;