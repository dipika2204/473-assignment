"use strict";
/*jshint browser:true*/
/*globals $*/
/*jshint unused:false*/
$(document).ready(function(){ /*code here*/  
$.ajax({ 
    type: "GET", 
    url: "http://localhost:3000/actors", 
    //data: { get_param: 'value' }, 
    dataType: "json",
    success: function (data) { 
        
        $.each(data, function(index, element) {
               var contentdata="<div class=\"mdl-list__item\">"+
               "<span class=\"mdl-list__item-primary-content\">"+
               "<i class=\"material-icons mdl-list__item-avatar\">person</i>"+
                "<span>"+element.name+"</span>"+
                "</span>"+"<a class=\"mdl-list__item-secondary-action\"><i class=\"material-icons\" id=\"" + element.id + "\" onclick=\"toggle_star(" + element.id + ",'" + element.name + "'," + element.starred + ")\">";
                 if(element.starred){
                    contentdata +="star</i></a></div>";
		}
                 else{
                    contentdata +="star_border</i></a></div>";
			}
                    $("#content_data")[0].innerHTML+=contentdata;
        });
    },
    error:function(status){
        window.alert(status);  
        
    }
});
});

var toggle_star=function(num,username,button_star){
    if(button_star){
                    button_star=false;}
                 else{
                    button_star=true;}
    $.ajax({ 
    type: "PUT", 
    url: "http://localhost:3000/actors/"+num, 
    data: { name:username, starred:button_star }, 
    dataType: "json",
    success: function (response) { 
                if(response.starred){
                $("#"+response.id)[0].innerHTML="star";
                }
                else{
                    $("#"+response.id)[0].innerHTML="star_border";
                }
                //$('#'+response.id)[0].attr("onclick", "toggle_star("+ response.id +",'"+ response.name+ ","+ response.starred+")");
                $("#"+response.id).removeAttr("onclick");//, "toggle_star("+ response.id +",'"+ response.name+ ","+ response.starred+")");
                $("#"+response.id).attr("onclick", "toggle_star("+ response.id +",'"+ response.name+ "',"+ response.starred+")" );
    },
    error:function(status){
        window.alert(status);
    }
});  
};

var adding_to_json =function(){
    var a= $("#add_actors").val(); 

$.ajax({ 
    type: "POST", 
    url: "http://localhost:3000/actors", 
    data: {name: a, starred:false}, 
    dataType: "json",
    success: function (data) { 
        
               var contentdata="<div class=\"mdl-list__item\">"+
               "<span class=\"mdl-list__item-primary-content\">"+
               "<i class=\"material-icons mdl-list__item-avatar\">person</i>"+
                "<span>"+data.name+"</span>"+
                "</span><a class=\"mdl-list__item-secondary-action\" href=\"#\"><i class=\"material-icons\"id=\"" + data.id + "\" onclick=\"toggle_star(" + data.id + ",'" + data.name + "'," + data.starred + ")\">";
                 if(data.starred){
                    contentdata +="star</i></a></div>";
			}
                 else{
                    contentdata +="star_border</i></a></div>";
			}
                    $("#content_data")[0].innerHTML+=contentdata;
        
        
    },
    error:function(status){
        window.alert(status);
    }
});
};
