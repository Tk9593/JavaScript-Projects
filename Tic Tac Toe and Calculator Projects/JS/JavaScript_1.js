var elements = document.getElementsByClassName("demo");

console.log(elements);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 500, 0);

gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "red");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 500, 250);