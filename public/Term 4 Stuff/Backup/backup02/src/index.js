//Imports//
import {mapIndex, map} from './map_data.js'
import {drawMap_data} from './drawMap.js.js';
import {player} from './player.js';
import {enemy} from './enemy.js';
import {button} from './button.js'
//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
ctx.globalAlpha = 1;   
ctx.font = "32px arial";

ctx.imageSmoothingEnabled = false;
//Declaring Variables & Objects//
let xOffset = 10
let yOffset = 3
let enableLinesB = document.getElementById("enableLines")
let tileX = 64;
let tileY = 64;
let mapX = 30;
let mapY = 20;
let pTime = 1;
let map_data = map;

let rat = new enemy(10, 2)
let atkButton = new button(180,540, 15, 'blue')
let target = enemy;
let linesEnabled = false
let IS_FIGHTING = false;

let screenMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
let player01 = new player(map_data, screenMap)

target = rat;
//Input Handlers//
canvas.addEventListener("click", clicked)
document.addEventListener("keydown", keyPressed)
enableLinesB.addEventListener("click", enableLines=>{if (linesEnabled == true){linesEnabled=false; return}linesEnabled=true;})
function keyPressed(){
    
    //console.log(screenMap)
    //console.log(event.keyCode)
    //console.log(xOffset, yOffset)
    if (IS_FIGHTING != false){
    IS_FIGHTING = false 
    }else{
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;if(player01.move() == true){yOffset++};break;
    case 68:player01.nPos[0]+=1;if(player01.move() == true){xOffset--};break;
    case 83:player01.nPos[1]+=1;if(player01.move() == true){yOffset--};break;
    case 65:player01.nPos[0]-=1;if(player01.move() == true){xOffset++};break;
}}

}
    function clicked(event){
    const rect = canvas.getBoundingClientRect()
    let x = event.clientX-rect.left;
    let y = event.clientY-rect.top;
    if(atkButton.buttonClicked(x,y,IS_FIGHTING)=="clicked"){
        player01.attack(target)
    }
    
}
//Game Loop//
function gameLoop(cTime){
    let dTime = cTime - pTime;
    pTime = cTime;
    
    ctx.clearRect(0, 0, 960, 640);
    
    drawMap_data(tileX, tileY, mapY, mapX, ctx, screenMap, target) 
    drawHUD()
    
    player01.draw(ctx, tileX, tileY);
    
   
    if (linesEnabled == true){
        drawDistanceLines()
    }
    
    
    player01.update(screenMap, setTile, playerView())
    IS_FIGHTING = false;
    combatScreen()
    playerView()
    requestAnimationFrame(gameLoop);
  
}
gameLoop();
//Draw the Battle menu//
function combatScreen(){
    if (player01.distanceToTarget(target) == 0)  {
        IS_FIGHTING = true;
        let targethpBar = 250-((250/(target.hpMax)*(target.hpMax-target.hp)))
        let playerhpBar = 250-((250/(player01.stats.hpMax)*(player01.stats.hpMax-player01.stats.hp)))
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.75;
        ctx.fillRect(0, 0, 960, 640);
        ctx.fillStyle = 'white';
        ctx.fillText("Combat HUD", 10, 50); 
        ctx.fillRect(32, 450, playerhpBar, 16);
        ctx.fillText("Player Health: "+player01.stats.hp, 32, 500);
        ctx.fillRect(650, 450, targethpBar, 16);
        ctx.fillText("Enemy Health: "+target.hp, 650, 500);
        atkButton.draw(ctx)
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 0.75;
        ctx.fillText("ATTACK", 32, 550);
        ctx.globalAlpha = 1;        
    }
}

function drawDistanceLines(){
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 1; 
    ctx.beginPath();
    ctx.moveTo(player01.cPos[0]*tileX, player01.cPos[1]*tileX)
    ctx.lineTo(target.cPos[0]*tileX, target.cPos[1]*tileX)
    ctx.stroke();
    ctx.closePath();
   
}
export var setTile = (mapIndex(player01.cPos[0], player01.cPos[1]))-((mapX*(yOffset))+(mapX+(xOffset)));
function playerView(){
    setTile = (mapIndex(player01.cPos[0], player01.cPos[1]))-((mapX*(yOffset))+(mapX+(xOffset)));
     for(var y = 0; y < 10; y++){    
        for(var x = 0; x <= 15; x++){
            screenMap[(mapX*y)+x]=map_data[setTile+(mapX*y)+x]
        }}
}
function drawHUD(){
    ctx.fillStyle = 'black';

    ctx.fillText("Player Health: "+player01.stats.hp,640, 64);
    ctx.fillText("Keys: "+player01.KEYS,640, 96);
    

}


    
        


