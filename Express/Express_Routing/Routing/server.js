"use strict";
exports.__esModule = true;
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transactions_1["default"]);
app.use("/module2", accounts_1["default"]);
app.listen(8080, function () {
    console.log("Server Started");
});
