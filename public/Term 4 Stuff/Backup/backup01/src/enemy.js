export class enemy{
    constructor(health, damage){
        this.cPos = [6,10];
        this.hpMax = health
        this.hp = health;
        this.dmg = damage; 
    }
    draw(ctx, tileX, tileY){
        ctx.fillStyle = 'red';
        ctx.fillRect(tileX*this.cPos[0], tileY*this.cPos[1], tileX ,tileY)
    }
}