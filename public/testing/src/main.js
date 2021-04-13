import entity from './entityHandler.js';
let canvas = document.getElementById("display");
let ctx = canvas.getContext('2d');
const  DISPLAY_WIDTH = document.getElementById("display").width;
const  DISPLAY_HEIGHT = document.getElementById("display").height;
 let createButton = document.getElementById("constructEntity")
 createButton.addEventListener('click', createNewEntity);

let newEntity = {
xpos: parseInt(document.getElementById("entityXpos").value),
ypos: parseInt(document.getElementById("entityYpos").value),
width: parseInt(document.getElementById("entityWidth").value),
height: parseInt(document.getElementById("entityHeight").value),
xVel: parseInt(document.getElementById("xVel").value),
yVel: parseInt(document.getElementById("yVel").value),
}
function createNewEntity(newEntity){
    newEntity.xpos = parseInt(document.getElementById("entityXpos").value);
    newEntity.ypos = parseInt(document.getElementById("entityYpos").value);
    newEntity.width = parseInt(document.getElementById("entityWidth").value);
    newEntity.height = parseInt(document.getElementById("entityHeight").value);
    newEntity.xVel = parseInt(document.getElementById("xVel").value);
    newEntity.yVel = parseInt(document.getElementById("yVel").value);
    player01 = new entity(newEntity);
    gameLoop();
}
let player01 = new entity(newEntity);
let pTime = 0;
function gameLoop(cTime) {
    let dTime = cTime - pTime;
    pTime = cTime;
    ctx.clearRect(0, 0, DISPLAY_WIDTH, DISPLAY_HEIGHT)
    player01.draw(ctx);
    player01.update(dTime);
    requestAnimationFrame(gameLoop); 
}


