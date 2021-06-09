let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
ctx.strokeStyle = "white";


var grd = ctx.createLinearGradient(0, 200, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

// Fill with gradient
ctx.fillStyle = grd;

let angle = 0;
var points = []
var size = 100;
ctx.translate(width/2, height/2);

const point = function(x, y, z){
  newPoint = {
    x: x,
    y: y,
    z: z,
  }
  return(newPoint) 
};
const matrix = function(){
}
points = [
  new point( -size, -size, -size),
  new point(  size, -size, -size),
  new point(  size,  size, -size),
  new point( -size,  size, -size),
  new point( -size, -size, size),
  new point(  size, -size, size),
  new point(  size,  size, size),
  new point( -size,  size, size),
]

function matrixifyPoints(points){
  var pointMatrix = [];
  for (i = 0; i < points.length; i++){
    p = points[i]
    pointMatrix[i] = [p.x, p.y, p.z];
  }
  return(pointMatrix);
}
var pointMatrix = matrixifyPoints(points);
let projection = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]

let rotationX = [
  [1, 0, 0],
  [0, Math.cos(angle), -Math.sin(angle)],
  [0, Math.sin(angle), Math.cos(angle),],
]
let rotationY = [
  [Math.cos(angle), 0 , -Math.sin(angle)],
  [0, 1, 0],
  [Math.sin(angle), 0 , Math.cos(angle)],
]
let rotationZ = [
  [Math.cos(angle), -Math.sin(angle), 0],
  [Math.sin(angle), Math.cos(angle), 0],
  [0, 0, 1]
]
function projectPoints(){
  for(var i = 0; i < points.length; i++){
    var rotated = multiplyMatrices(pointMatrix, rotationZ)
    rotated = multiplyMatrices(rotated, rotationX)
    rotated = multiplyMatrices(rotated, rotationY)
    var Projected2dPoint = multiplyMatrices(rotated, projection)
    points[i].sx = Projected2dPoint[i][0];
    points[i].sy = Projected2dPoint[i][1];
}

}
function drawPoints(){
  ctx.fillStyle = "white";
  for(var i = 0; i < points.length; i++){
    ctx.beginPath();
    ctx.arc(points[i].sx, points[i].sy, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
function render(){
  ctx.fillStyle = grd;
  ctx.beginPath()
  drawPolygon(0, 1, 2, 3, 0)
  ctx.fill();
  drawPolygon(4, 5, 6, 7, 4)
  ctx.fill();
  drawPolygon(0, 1, 5, 4, 0)
  ctx.fill();
  drawPolygon(1, 5, 6, 2, 1)
  ctx.fill();
  drawPolygon(0, 3, 7, 4, 0)
  ctx.fill();
  drawPolygon(6, 7, 3, 2, 6)
  ctx.fill();
  ctx.stroke();
}
function drawPolygon(){
  var p = points[arguments[0]]
  ctx.moveTo(p.sx, p.sy)
  for(var i = 0; i < arguments.length; i++){
    p = points[arguments[i]];
    ctx.lineTo(p.sx, p.sy);
}}




function update(){
    ctx.clearRect(-width / 2, -height / 2, width, height);
    updateAngle()
    projectPoints()
    
    render()
    drawPoints()
    
    requestAnimationFrame(update);    
}
update();


function updateAngle(){
  rotationX = [
    [1, 0, 0],
    [0, Math.cos(angle), -Math.sin(angle)],
    [0, Math.sin(angle), Math.cos(angle),],
  ]
  rotationY = [
    [Math.cos(angle), 0 , -Math.sin(angle)],
    [0, 1, 0],
    [Math.sin(angle), 0 , Math.cos(angle)],
    
  ]
  rotationZ = [
    [Math.cos(angle), -Math.sin(angle), 0],
    [Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1]
  ]
  angle += 0.01;
}