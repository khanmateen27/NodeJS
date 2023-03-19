"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./dist/transactions");
var cards_1 = require("./dist/cards");
var accounts_1 = require("./dist/accounts");
//creating the REST object
var app = express();
app.use("/accounts", accounts_1["default"]);
app.use("/transactions", transactions_1["default"]);
app.use("/cards", cards_1["default"]);
app.listen(8080, function () {
    console.log("Server Started!");
});
