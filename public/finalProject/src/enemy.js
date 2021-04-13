export class enemy{
    constructor(health, damage){
        this.hp = health;
        this.dmg = damage;
    }
    attack(player){
        player.hp - this.dmg;
    }
}