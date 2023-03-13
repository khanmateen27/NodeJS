"use strict";
exports.__esModule = true;
var express = require("express");
//in order to create a rest object need to call express constructor
var app = express();
//creating a default get Request
app.get("/", function (req, res) {
    res.status(200).json({ message: "default get request" });
});
app.get("/ts", function (req, res) {
    res.status(200).json({ message: "Welcome to TypeScript with NodeJS" });
});
app.listen(8080, function () {
    console.log("server started");
});
