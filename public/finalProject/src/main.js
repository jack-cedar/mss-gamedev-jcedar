import {player} from './player.js'
import {enemy} from './enemy.js'
let attack = document.getElementById("button01");
attack.addEventListener("click", onAttack);
function onAttack(){
    playerMain.attack(rat);
}

let rat = new enemy(10, 2)
let playerMain = new player()

