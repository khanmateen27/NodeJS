"use strict";
exports.__esModule = true;
//http://localhost:8080/login?uname="admin"&upwd="admin"
//http://localhost:8080/login?uname=mateen&upwd=mateen
var express = require("express");
//creating rest object
var app = express();
//authorization
//will execute first
var auth = function (req, res, next) {
    //for reading the headers
    var allHeaderes = req.headers;
    if (allHeaderes.token === 'khan') {
        //used to give the judgement
        next();
    }
    else {
        res.status(500).json({ auth: "failed" });
    }
};
//get Request
//authentication
//will execute after the authorization
app.get("/login", [auth], function (req, res) {
    if (req.query.uname === 'mateen' && req.query.upwd === "mateen") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(400).json({ login: "failed" });
    }
});
//default get request
app.get("/", function (req, res) {
    res.sendFile("D:/New folder/Express/TokenAuthorization/index.html");
});
app.listen(8080, function () {
    console.log("server started");
});
