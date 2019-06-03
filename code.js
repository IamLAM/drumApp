$(document).ready(function(){


$("body").on("keypress",function(event){

    console.log("music");
    var letter=event.keyCode;
    console.log(letter);
    switch(letter){
        case 113://Q
        $("#Q").trigger("play");
        break;
        default:
            console.log("no founded"); 

    }


   
});    

});

