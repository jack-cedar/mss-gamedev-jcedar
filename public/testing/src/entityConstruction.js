import entity from './entityConstructor';
let canvas = document.getElementById("display");
let ctx = canvas.getContext('2d');
const  DISPLAY_WIDTH = 800;
const  DISPLAY_HEIGHT = 600;

let player01 = new entity(DISPLAY_WIDTH, DISPLAY_HEIGHT)
