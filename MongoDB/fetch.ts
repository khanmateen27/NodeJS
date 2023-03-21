//import express module
//express module used to develop the rest services
import * as express from "express";

//import mongodb module
//mogodb module used to connect to the MongoDB DataBase!
import * as mongodb from "mongodb";

//create the Client 
//MongoDB archietecture follows the client-server archietecture
let dbUser:any = mongodb.MongoClient;
//dbUseer is the Client

//create the Module
let fetch:any = express.Router().get("/" , (req:any , res:any):any=>{
    dbUser.connect(),(err,connection)=>{
        if(err) throw err;
        else{
            let db:any = connection.db("CRUD_Application");
            db.collection("products").find().toArray((err , array)=>{
                if(err) throw err
                else{
                    res.send(array);
                }
            });
        }
    }
});


//export the module
export default fetch;