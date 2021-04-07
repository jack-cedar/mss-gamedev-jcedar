let canvas = document.getElementById("display");
let ctx = canvas.getContext('2d');
var playerX = 20;
var playerY = 20;
function update(dTime){
    if (!dTime) return;
    playerX += 5 / dTime
}
function draw(){
    player01 = ctx.fillRect(playerX,playerY,100,100)
}
let pTime = 0;

function gameLoop(cTime) {
    let dTime = cTime - pTime;
    pTime = cTime;
    ctx.clearRect(0,0,800,600);
    update(dTime);
    draw();
    requestAnimationFrame(gameLoop); 
}
gameLoop();