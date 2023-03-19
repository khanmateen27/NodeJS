"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(400).json({ login: "failed" });
    }
});
app.listen(8080, function () {
    console.log("server started");
});
