import entity from './entityHandler.js';
let canvas = document.getElementById("display");
let ctx = canvas.getContext('2d');
const  DISPLAY_WIDTH = document.getElementById("display").width;
const  DISPLAY_HEIGHT = document.getElementById("display").height;
document.getElementById("constructEntity").addEventListener('click', createNewEntity);

var newEntity = {
name: document.getElementById("entityName").value,
xpos: parseInt(document.getElementById("entityXpos").value),
ypos: parseInt(document.getElementById("entityYpos").value),
width: parseInt(document.getElementById("entityWidth").value),
height: parseInt(document.getElementById("entityHeight").value),
}
function createNewEntity(){
    newEntity.name = document.getElementById("entityName").value;
    newEntity.xpos = parseInt(document.getElementById("entityXpos").value);
    newEntity.ypos = parseInt(document.getElementById("entityYpos").value);
    newEntity.width = parseInt(document.getElementById("entityWidth").value);
    newEntity.height = parseInt(document.getElementById("entityHeight").value);
}
let player01 = new entity(newEntity);
let pTime = 0;
function gameLoop(cTime) {
    let dTime = cTime - pTime;
    pTime = cTime;
    ctx.clearRect(0, 0, DISPLAY_WIDTH, DISPLAY_HEIGHT)
    player01.update(dTime, newEntity);
    player01.draw(ctx);
    requestAnimationFrame(gameLoop); 
}
gameLoop();

