"use strict";
exports.__esModule = true;
var express = require("express");
var accounts = express.Router();
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Accounts Page GET Request" });
});
accounts.post("/", function (req, res) {
    res.status(200).json({ message: "Accounts Page POST Request" });
});
exports["default"] = accounts;