//Express is the 3rd party module in NodeJs
//Express is the framework (rest framework)
//-> It is used to develop the Rest Services (GET , POST , PUT , DELETE , .....)


let express = require('express');


// create react object
let app = express();

//default get request 
app.get("/" , (req , res) =>{
    res.status(200).json({"message" : "default get request"});
});


//demo get Request
app.get("/demo" , (req , res)=>{
    res.status(200).json({"message" : "data from mongodb database"});
});

app.listen(8080 , ()=>{
    console.log("server started running");
});