export default class entity {
    constructor(newEntity){
        this.width = newEntity.width
        this.height = newEntity.height
        this.xpos = newEntity.xpos
        this.ypos = newEntity.ypos
        this.Vx = newEntity.xVel
        this.Vy = newEntity.yVel
    }
    draw(ctx){
        ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
    }
    update(dTime){
        if(!dTime) return;
        this.xpos += this.Vx/dTime;
        this.ypos += this.Vy/dTime;       
    }
}

