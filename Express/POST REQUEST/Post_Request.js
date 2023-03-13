let express = require('express');

let app = express();

//creating a default post request
app.post("/" , (req , res)=>{
    res.status(200).json({"message" : "default post request"});
});

//creating a demo post request
app.post("/demo" , (req , res)=>{
    res.status(200).json({"message" : "data from cassandradb soon"});
});

app.listen(8080 , ()=>{
    console.log("server started");
});