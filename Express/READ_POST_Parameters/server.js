"use strict";
exports.__esModule = true;
var express = require("express");
//importing body-parser module
//body-Parser module is used to read the POST Parameters
var bodyparser = require("body-parser");
//creating the rest object
var app = express();
//set the MIME type
//MIME->Communication language between client and the server
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//authorization code
var auth = function (req, res, next) {
    //read the headers
    var allHeaders = req.headers;
    //read the tokens
    var token = allHeaders.token;
    //checking the tokins
    if (token === "mateen") {
        next(); //auth success
    }
    else {
        res.status(400).json({ auth: "failed" });
    }
};
//creating a post request
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(200).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("Server Started!");
});
