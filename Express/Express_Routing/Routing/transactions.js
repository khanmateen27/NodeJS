"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transaction page" });
});
transactions.get("/transaction", function (req, res) {
    res.status(200).json({ message: "Hello from transaction using NodeJS" });
});
exports["default"] = transactions;
