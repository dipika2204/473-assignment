"use strict";
var MongoClient = require("mongodb").MongoClient;
var URL = "mongodb://localhost:27017/assignment473";
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(express.static("."));
app.use(bodyparser.json());
var assert = require("assert");



app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.get("/links", function(req, res) {
    MongoClient.connect(URL, function(err, db) {
      if (err) {return;}
        var collection = db.collection("links");
        collection.find().toArray(function(err, docs) {
            res.send(docs);
            console.log();
            db.close();
        });

    });
});


app.post("/links", function(req, res) {
    MongoClient.connect(URL, function(err, db) {
      if (err) {return;}
        var collection = db.collection("links");
        var title_choice = req.body.title;
        var link_choice = req.body.link;
        collection.insert({
            "title": title_choice,
            "link": link_choice,
            "clicks": 0
        }, function(err, result) {
            res.send(result);
            db.close();

        });

    });
});


app.get("/click/:title", function(req, res) {
    var title_click = req.params.title;
    MongoClient.connect(URL, function(err, db) {
      if (err) {return;}
        //var collection = db.collection("links");
        db.collection("links").updateOne({
            "title": title_click
        }, {
            $inc: {
                "clicks": 1
            }
        }, function(err) {
            assert.equal(null, err);
            var cursor = db.collection("links").find({
                "title": title_click
            });
            cursor.each(function(err, doc) {
                assert.equal(err, null);
                if (doc !== null) {
                    res.redirect(doc.link);
                    //     res.send(doc.title);
                    //console.dir(doc);
                } else {

                }

                //res.send(results);
                db.close();

            });

        });
    });
});

app.get("/", function(req, res) {
    res.send("Hello World!");
});


app.listen(5000, function() {
    console.log("Example app listening on port 5000!");
});