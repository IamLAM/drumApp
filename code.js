$(document).ready(function(){

   
$("body").on("keypress",function(event){

    console.log("music");
    var letter=event.keyCode;
    console.log(letter);
    switch(letter){
        case 81: case 113://Q 
        $("#dQ").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dQ").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        
        
    
        $("#Q").trigger("play");
        break;
        case 87: case 119://W
        $("#dW").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dW").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#W").trigger("play");
        break;
        case 69: case 101://E
        $("#dE").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dE").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#E").trigger("play");
        break;
        case 65: case 97://A
        $("#dA").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dA").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#A").trigger("play");
        break;
        case 83: case 115://S
        $("#dS").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dS").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#S").trigger("play");
        break;
        case 68: case 100://D
        $("#dD").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dD").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#D").trigger("play");
        break;
        case 90: case 122://Z
        $("#dZ").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dZ").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#Z").trigger("play");
        break;
        case 88: case 120://X
        $("#dX").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dX").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#X").trigger("play");
        break;
        case 67: case 99://C
        $("#dC").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dC").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#C").trigger("play");
        break;
        default:
            console.log("no founded"); 

    }


   
});    

});

