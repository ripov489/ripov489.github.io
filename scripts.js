console.log("hello world");
console.log("*************");

var symbols = ["*","$","#","@","*","$","#","@","*","$","#","@","*","$","#","@"]

var pattern = "*";

for (var increment = 0; increment < symbols.length; increment++) {
    console.log(pattern);
    pattern = pattern + symbols[increment];
    var ampersand = "&";
    console.log(increment);
    if (increment > 5) {
        for (var another = 0; another < 10; another++) {
            console.log(ampersand);
            ampersand = ampersand + "&";
        }
    }
}
