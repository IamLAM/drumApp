$(document).ready(function(){

$(".drum-pad").on("click",function(event){
    console.log($(this).attr("id"));
    console.log("click");
    var sp=$(this).attr("id");
    selectPad(sp);

});


   
$("body").on("keypress",function(event){

    console.log("music");
    var letter=event.keyCode;
    console.log(letter);
    var sp = "d"+String.fromCharCode(letter).toUpperCase();
   console.log(sp);
    selectPad(sp);

   
});    


function selectPad(letter){
    switch(letter){
        case "dQ"://Q 
        $("#dQ").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dQ").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        
           
        $("#Q").trigger("play");
       // $("display").html("#Q");
       document.getElementById("display").innerHTML="#Q";
        break;
        case "dW"://W
        $("#dW").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dW").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#W").trigger("play");
      //  $("display").text("#W");
      //$("display").html("#W");
      document.getElementById("display").innerHTML="#W";
        break;
        case "dE"://E
        $("#dE").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dE").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#E").trigger("play");
        //$("display").text("#E");
        //$("display").html("#E");
        document.getElementById("display").innerHTML="#E";
        break;
        case "dA"://A
        $("#dA").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dA").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#A").trigger("play");
        //$("display").text("#A");
        //$("display").html("#A");
        document.getElementById("display").innerHTML="#A";
        break;
        case "dS"://S
        $("#dS").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dS").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#S").trigger("play");
        //$("display").text("#S");
        //$("display").html("#Q");
        document.getElementById("display").innerHTML="#S";
        break;
        case "dD"://D
        $("#dD").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dD").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#D").trigger("play");
        //$("display").text("#D");
        //$("display").html("#D");
        document.getElementById("display").innerHTML="#D";
        break;
        case "dZ"://Z
        $("#dZ").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dZ").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#Z").trigger("play");
        //$("display").text("#Z");
        //$("display").html("#Z");
        document.getElementById("display").innerHTML="#Z";
        break;
        case "dX"://X
        $("#dX").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dX").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#X").trigger("play");
        $//("display").text("#X");
        //$("display").html("#X");
        document.getElementById("display").innerHTML="#X";
    
        break;
        case "dC"://C
        $("#dC").animate({
            backgroundColor:'#a61c3c',
            color:'#f4ac45'
          }, 1000, function() {

            $("#dC").css({"background-color":"#f4ac45","color":"#1e152a"});
          });
        
        $("#C").trigger("play");
        //$("display").text("#C");
        //$("display").html("#C");
        document.getElementById("display").innerHTML="#C";
        break;
        default:
            console.log("no founded"); 

    }
}




});

