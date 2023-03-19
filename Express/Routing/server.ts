import * as express from "express";

import transactions from "./transactions";
import cards from "./cards";
import accounts from "./accounts";

//creating the REST object
let app:any = express();

app.use("/accounts" , accounts);
app.use("/transactions" , transactions);
app.use("/cards" , cards);

app.listen(8080 , ()=>{
    console.log("Server Started!");
});