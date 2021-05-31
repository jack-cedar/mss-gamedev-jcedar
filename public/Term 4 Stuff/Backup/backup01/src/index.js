//Imports//
import {mapIndex, gameMap01, gameMap02} from './map_data.js'
import {drawMap_data} from './drawMap.js.js';
import {player} from './player.js';
import {enemy} from './enemy.js.js';
import {button} from './button.js.js'
//Making Canvas Context//
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
ctx.globalAlpha = 1;   
ctx.font = "32px arial";

ctx.imageSmoothingEnabled = false;
//Declaring Variables & Objects//
let enableLinesB = document.getElementById("enableLines")
let tileX = 32;
let tileY = 32;
let mapX = 30;
let mapY = 20;
let pTime = 1;
let map_data = gameMap01;
let player01 = new player(map_data)
let rat = new enemy(10, 2)
let atkButton = new button(180,540, 15, 'blue')
let target = enemy;
let linesEnabled = false
let IS_FIGHTING = false;


target = rat;
//Input Handlers//
canvas.addEventListener("click", clicked)
document.addEventListener("keydown", keyPressed)
enableLinesB.addEventListener("click", enableLines=>{if (linesEnabled == true){linesEnabled=false; return}linesEnabled=true;})
function keyPressed(){
    //console.log(event.keyCode)
    if (IS_FIGHTING != false){
    IS_FIGHTING = false 
    }else{
    switch (event.keyCode){
    case 87:player01.nPos[1]-=1;player01.update();break;
    case 68:player01.nPos[0]+=1;player01.update();break;
    case 83:player01.nPos[1]+=1;player01.update();break;
    case 65:player01.nPos[0]-=1;player01.update();break;
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
    
    drawMap_data(tileX, tileY, mapY, mapX, ctx, map_data) 
    ctx.fillText("Player Health: "+player01.stats.hp,640, 64);
    rat.draw(ctx, tileX, tileY);
    player01.draw(ctx, tileX, tileY);
    
    combatScreen()
    if (linesEnabled == true){
        drawDistanceLines()
    }
    player01.update(map_data, IS_FIGHTING)
    
    requestAnimationFrame(gameLoop);
  
}
gameLoop();
//Change Map//
export function changeMap_data(){
    if (map_data == gameMap01 && player01.cPos[0]==9 && player01.cPos[1]==0){
        map_data=gameMap02;
        player01.nPos[0]=9,player01.nPos[1]=19;
        }
    else if (map_data==gameMap02 && player01.cPos[0]==9 && player01.cPos[1]==19){
        map_data=gameMap01;
        player01.nPos[0]=9,player01.nPos[1]=0;
    }
    }
//Draw the Battle menu//
function combatScreen(){
    if (player01.distanceToTarget(target) == 1 || player01.distanceToTarget(target) == 1)  {
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

    
        


