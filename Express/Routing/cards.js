"use strict";
exports.__esModule = true;
var express = require("express");
var cards = express.Router();
//creating POST Request
cards.post("/", function (req, res) {
    res.status(200).json({ message: "Welcome to the Cards Module" });
});
//exporting the Module
exports["default"] = cards;
