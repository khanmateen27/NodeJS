"use strict";
exports.__esModule = true;
var express = require("express");
//creating the Module
var transactions = express.Router();
//creating the GET Request
//default GET Request
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to the Transactions Module" });
});
//creating authentication 
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    console.log("Tken",token==='mateen')
    if (token === 'mateen') {
        next(); //success
    }
    else {
        res.status(400).json({ auth: "failed" });
    }
};
var authentication = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    console.log("myTken",wish)
    if (wish === 'hello') {
        next();
    }
    else {
        res.status(400).json({ authentication: "failed" });
    }
};
//default GET Request
transactions.get("/login", [auth , authentication], function (req, res) {
    res.status(200).json({ message: "Welcome to the Transactions Login Module" });
});
exports["default"] = transactions;
