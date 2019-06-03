$(document).ready(function(){


$("body").on("keypress",function(event){

    console.log("music");
    var letter=event.keyCode;
    console.log(letter);
    switch(letter){
        case 81://Q
        $("#Q").trigger("play");
        break;
        case 87://W
        $("#W").trigger("play");
        break;
        case 69://E
        $("#E").trigger("play");
        break;
        case 65://A
        $("#A").trigger("play");
        break;
        case 83://S
        $("#S").trigger("play");
        break;
        case 68://D
        $("#D").trigger("play");
        break;
        case 90://Z
        $("#Z").trigger("play");
        break;
        case 88://X
        $("#X").trigger("play");
        break;
        case 67://C
        $("#C").trigger("play");
        break;
        default:
            console.log("no founded"); 

    }


   
});    

});

