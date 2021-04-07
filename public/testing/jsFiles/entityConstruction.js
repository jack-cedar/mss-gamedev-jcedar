import entity from './entityConstructor.js';
let canvas = document.getElementById("display");
let ctx = canvas.getContext('2d');

const  DISPLAY_WIDTH = 800;
const  DISPLAY_HEIGHT = 600;
 
let player01 = new entity(DISPLAY_WIDTH, DISPLAY_HEIGHT);
player01.draw(ctx);

let pTime = 0;
function gameLoop(cTime) {
    let dTime = cTime - pTime;
    pTime = cTime;
    
    ctx.clearRect(0, 0, DISPLAY_WIDTH, DISPLAY_HEIGHT)
    
    player01.update(dTime);
    player01.draw(ctx);
    
    requestAnimationFrame(gameLoop); 

    console.log(cTime)
}
gameLoop();
