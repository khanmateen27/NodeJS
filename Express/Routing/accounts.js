"use strict";
exports.__esModule = true;
var express = require("express");
//create the module using Router
var accounts = express.Router();
//creating the get Request
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to Accounts Module" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(400).json({ login: "failed" });
    }
});
//exporting the Module
exports["default"] = accounts;
