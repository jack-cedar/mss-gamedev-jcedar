export class player {
    constructor(){
        this.hp = 100;
        this.power = 5;
        this.level = 0;
        this.xp = 0;
        this.xpToLvlup = 100;
    }
    attack(enemy){
        enemy.hp - this.power;
    }
    levelUp(){
    }
    update(){
        if(this.xp == this.xpToLvlup){
            this.levelUp()
        }
    }
}