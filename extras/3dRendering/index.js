let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');


let width = document.getElementById("myCanvas").width;
let height = document.getElementById("myCanvas").height;

ctx.translate(width/2, height/2);

var grd = ctx.createLinearGradient(0, 200, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

const point = function(x, y){
  newPoint = {
    x: x,
    y: y,
  }
  return(newPoint) 
};
var points = [
  new point( 0, -75),
  new point( 100, 100),
  new point(-100, 100),
]

function draw() {
  ctx.strokeStyle = "white";
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y)
  for(i = 0; i < points.length; i++){
  ctx.lineTo(points[i].x, points[i].y)
}
ctx.fill();
ctx.closePath();
}

function gameLoop(){
    draw();
    requestAnimationFrame(gameLoop);    
}
gameLoop();

   

    


















