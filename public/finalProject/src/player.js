export class player {
    constructor(){
        this.hp = 100;
        this.power = 5;
        this.level = 0;
        this.xp = 0;
        this.xpToLvlup = 100;
    }
    attack(target){
        target.hp -= this.power;
        console.log(target.hp)
    }
    levelUp(){
    }
    update(){
        if(this.xp >= this.xpToLvlup){
            this.levelUp()
        }
    }
}