//"use strict";
/*jshint browser:true*/
/*globals $*/
/*jshint unused:false*/
var coin=function(coin_face){
 //var coin=coin_face;
 //alert(coin);
 $.ajax({ 
    type: "POST", 
    url: "/flip", 
    data: JSON.stringify({"call":coin_face}), 
    datatype:"json",
    contentType:"application/json",
   success: function (data) { 
        document.getElementById("output").innerHTML = data.flip;
       //alert(data.flip);
       },
    error:function(xhr,status,error){
        window.alert(xhr,status.error);
    }
});
};