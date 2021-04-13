import {player} from './player.js'
import {enemy} from './enemy.js'
let rat = new enemy(10, 2)
let player01 = new player()
let target = rat;
player01.attack(target)
