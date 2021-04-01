import player from './player'
let canvas = document.getElementById("gameDisplay")
let ctx = canvas.getContext("2d");
const gameWidth = 800;
const gameHeight = 600;


ctx.clearRect(0, 0, 800, 600);
player = new player(gameWidth, gameHeight);
player.draw(ctx);