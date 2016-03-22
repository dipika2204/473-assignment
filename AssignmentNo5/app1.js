"use strict";
var express = require("express");
var bodyparser=require("body-parser");
var app = express();
app.use(express.static("."));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});



    var count_win=0;
    var count_loss=0;

app.get("/stats",function(req,res){
    res.send({"WINS ": count_win , "LOSSES": count_loss});
});    
    
    
    
    
app.post("/flip",function(req,res){
    var user_choice= req.body.call;
    var flip,result;    

    var x = (Math.floor(Math.random() * 2) === 0);
    if(x){
        flip="heads";
    }else{
        flip="tails";
    }
    
    if(flip===user_choice){
    result="WINS";    
    count_win+=1;    
    
    }
    else{
        result="LOSSES";
        count_loss+=1;
        
    }
    res.send({ "result" : result  });
   
});


app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
