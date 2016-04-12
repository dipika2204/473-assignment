/*"use strict";*/
var redis = require("redis");
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var red = redis.createClient();
app.use(express.static("."));
app.use(bodyparser.json());

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/stats", function (req, res) {
    red.mget("WINS", "LOSSES", function (err, result) {
        var result_array = result.toString().split(",");
        res.send({ "WINS": result_array[0], "LOSSES": result_array[1] });
    });
});

red.on("connect", function () {
    console.log("connected");
});

app.post("/flip", function (req, res) {
    var user_choice = req.body.call;
    var flip, result;

    var x = (Math.floor(Math.random() * 2) === 0);
    if (x) {
        flip = "heads";
    } else {
        flip = "tails";
    }

    if (flip === user_choice) {
        result = "WINS";
        red.incr("WINS");
    }
    else {
        result = "LOSSES";
        red.incr("LOSSES");
    }

    res.send({ "Result": result });

});

app.delete("/stats", function (req, res) {
    red.set("WINS", 0);
    red.set("LOSSES", 0);
    res.send("deleted");
});


app.listen(4000, function () {
    console.log("Example app listening on port 4000!");
});
