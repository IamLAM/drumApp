$(document).ready(function(){


$("body").on("keypress",function(event){

    console.log("music");
    var letter=event.keyCode;
    console.log(letter);
    switch(letter){
        case 81: case 113://Q 
        $("#Q").trigger("play");
        break;
        case 87: case 119://W
        $("#W").trigger("play");
        break;
        case 69: case 101://E
        $("#E").trigger("play");
        break;
        case 65: case 97://A
        $("#A").trigger("play");
        break;
        case 83: case 115://S
        $("#S").trigger("play");
        break;
        case 68: case 100://D
        $("#D").trigger("play");
        break;
        case 90: case 122://Z
        $("#Z").trigger("play");
        break;
        case 88: case 120://X
        $("#X").trigger("play");
        break;
        case 67: case 99://C
        $("#C").trigger("play");
        break;
        default:
            console.log("no founded"); 

    }


   
});    

});

