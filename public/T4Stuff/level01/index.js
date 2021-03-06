let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let canvasWidth = document.getElementById("myCanvas").width;
let canvasHeight = document.getElementById("myCanvas").height;
let mouseX;
let mouseY;
let pmouseX;
let pmouseY;
let squareW = 50;
let squareH = 50;
let squareX = ((canvasWidth/2)-(squareW/2));
let squareY = ((canvasHeight/2)-(squareH/2));
let squareCenterX = (squareX+(squareW/2));
let squareCenterY = (squareY+(squareH/2));
let xVel = 0;
let yVel = 0;
let maxVel = 5;
let bulletFired = false;
let enemyX = Math.floor(Math.random() * canvasWidth)
let enemyY = Math.floor(Math.random() * canvasHeight)
let enemyRadius = 25;
let playerPts = 0;

document.addEventListener("keydown", keyPressed)
document.addEventListener("keyup", keyReleased)
canvas.addEventListener("click", clicked)
canvas.addEventListener("mousemove", (event)=>{
    const rect = canvas.getBoundingClientRect()
    pmouseX = mouseX;
    pmouseY = mouseY;
    let x = event.clientX-rect.left;
    let y = event.clientY-rect.top;
    mouseX = x;
    mouseY = y;
});
function playerUpdate(){
    squareX += xVel;
    squareY += yVel;
    switch(squareX){
        case 0: xVel = 0; break;
        case (canvasWidth - squareW): xVel = 0; break;
    }
    switch(squareY){
        case 0: yVel = 0; break;
        case (canvasHeight - squareH): yVel = 0; break;
    }
}
function gameLoop(){
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    squareCenterX = (squareX+(squareW/2));
    squareCenterY = (squareY+(squareH/2));
    //drawLineto();
    switch(bulletFired){
        case true:new bullet(squareCenterX, squareCenterY, mouseX, mouseY); bulletFired = false ;break;
        default: break;
    }
    drawCursor();
    playerUpdate();
    drawEnemy();
    if(playerPts == 20){
        alert("you Win")
        location.href = "https://jack-cedar.github.io/mss-gamedev-jcedar/public/T4Stuff/index.html";
    }
    
    drawPlayer();
    drawHUD();
    requestAnimationFrame(gameLoop);    
}
gameLoop();
function drawPlayer(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(squareX, squareY, squareW, squareH)
}
function drawLineto(){
    ctx.beginPath();
    ctx.moveTo(squareCenterX, squareCenterY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
}
function drawCursor(){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 2, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke(); 
}
function drawEnemy(){
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(enemyX, enemyY, enemyRadius, 0, 2 * Math.PI);
    ctx.fill();
}
function keyPressed(){
switch (event.keyCode){
case 87:yVel=0;if(squareY > 0){yVel -= maxVel};break;
case 83:yVel=0;if((squareY+squareH) < canvasHeight)(yVel += maxVel);break;
case 65:xVel=0;if(squareX > 0){xVel -= maxVel};break;
case 68:xVel=0;if((squareX+squareW) < canvasWidth)(xVel += maxVel);break;}}
function keyReleased(){
switch (event.keyCode){
case 87:yVel=0;break;
case 83:yVel=0;break;
case 65:xVel=0;break;
case 68:xVel=0;break;}}
function clicked(){
    let distance = Math.sqrt(((mouseX-enemyX)*(mouseX-enemyX))+((mouseY-enemyY)*(mouseY-enemyY)))
    if (distance < enemyRadius){
        enemyX = Math.floor(Math.random() * canvasWidth);
        enemyY = Math.floor(Math.random() * canvasHeight);
        playerPts ++;
    }
    bulletFired = true;
}
function drawHUD(){
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.fillText("Points: "+ playerPts, 10, 30);
}
const bullet = function(x, y, xVel, yVel){
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    for(i = 0; i < 1000; i++){
        x = x-=((x-xVel)/100)
        y = y-=((y-yVel)/100)
    ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill()
      
        
        x = x-=((x-xVel)/3)
        y = y-=((y-yVel)/3)


       
        let distance = Math.sqrt(((x-enemyX)*(x-enemyX))+((y-enemyY)*(y-enemyY)))
        if (distance < enemyRadius){
        enemyX = Math.floor(Math.random() * canvasWidth);
        enemyY = Math.floor(Math.random() * canvasHeight);
        playerPts ++;
        requestAnimationFrame(bullet)
    }
        
        
    }
}










    
