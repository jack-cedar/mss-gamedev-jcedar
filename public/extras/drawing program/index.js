let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');

let canvasWidth = document.getElementById("myCanvas").width;
let canvasHeight = document.getElementById("myCanvas").height;

let mouseX;
let mouseY;
let pmouseX;
let pmouseY;

canvas.addEventListener("mousemove", (event)=>{
    const rect = canvas.getBoundingClientRect()
    pmouseX = mouseX;
    pmouseY = mouseY;
    let x = event.clientX-rect.left;
    let y = event.clientY-rect.top;
    mouseX = x;
    mouseY = y;
});

function drawLine(){
    ctx.moveTo(pmouseX, pmouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
}
function gameLoop(){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawLine();
    requestAnimationFrame(gameLoop);    
}
gameLoop();
