$("body").css("background-color","blue");

$("h1").html("Welcome to Creatvie Computing");

$(".bigredbutton").click(function() {
    console.log("you clicked it");
    $("h1").toggleClass("white");


});


