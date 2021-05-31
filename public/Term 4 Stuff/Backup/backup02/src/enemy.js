export class enemy{
    constructor(health, damage){
        this.cPos = [6,10];
        this.hpMax = health
        this.hp = health;
        this.dmg = damage; 
    }
    draw(ctx, tileX, tileY , x, y){
        this.cPos[0] = x
        this.cPos[1] = y
        ctx.fillStyle = 'red';
        ctx.fillRect(tileX*x, tileY*y, tileX ,tileY)
    }
}