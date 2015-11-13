
$("window").click(function(event) {
    console.log(event.clientX);
    var newLeft = event.clinetX + "px";
    var newTop = event.clientY + "px";
    $(".button").css("top" ,newTop);
    $(".button").css("left" ,newLeft);
    $("body").append("Hello world");
}); 

$(window).keypress(function(event) {
    console.log(event);
   if(event.keyCode == 114) {
       //user pressed "r"
       $("body").css("background-color","red");
   } 
   if(event.keyCode == 103) {
       //user pressed "g"
       $("body").css("background-color","lime");
   }
   if(event.keyCode == 98) {
       //user pressed "b"
       $("body").css("background-color","blue");
   }

});

$(window).resize(function(event) {
    console.log(event);
    if ($(window).width() > 800) {
        $(".button").css("width","200px");
    } else {
        $(".button").css("width","100px");
    }
});