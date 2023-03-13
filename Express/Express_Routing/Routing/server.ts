import * as express from "express";
import transactions from "./transactions";
import accounts from "./accounts";

let app:any = express();

app.use("/module1" , transactions);
app.use("/module2" , accounts);

app.listen(8080 , ()=>{
    console.log("Server Started");
});