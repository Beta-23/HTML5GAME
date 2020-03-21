// create canvas element via js
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;
// new image object
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

function checkReady() {
    this.ready = true;
    playgame();
}

function playgame() {
    render();
}
// Content
function render() {
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);
}

document.body.appendChild(canvas);
context.fillText("Lets Play PAC!",10,150);