import * as express from "express";
import * as mongodb from "mongodb";

//creating the Mongo Client
let dbUser:any = mongodb.MongoClient;

let insert:any = express.Router()