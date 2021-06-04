let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let canvasWidth = document.getElementById("myCanvas").width;
let canvasHeight = document.getElementById("myCanvas").height;
ctx.translate(canvasWidth/2, canvasHeight/2);
const point = function(x, y){
  newPoint = [x, y]
  return(newPoint) 
};
var points = [
  new point( 0, -50),
  new point( 50, 50),
  new point(-50, 50),
]
function draw() {
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(points[0][0], points[0][1])
  for(i = 0; i < points.length; i++){
  ctx.lineTo(points[i][0], points[i][1])
}
ctx.lineTo(points[0][0], points[0][1])
ctx.stroke();
ctx.closePath();
}
function gameLoop(){
    draw();
    requestAnimationFrame(gameLoop);    
}
gameLoop();

   

    


















