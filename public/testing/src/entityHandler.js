export default class entity {
    constructor(newEntity){
        this.width = newEntity.width
        this.height = newEntity.height
        this.xpos = newEntity.xpos
        this.ypos = newEntity.ypos
        this.Vx = 0
        this.Vy = 0
        this.Vt = 10
    }
    draw(ctx){
        ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
    }
    move(){
        left: this.Vx -= this.Vt;
    }
    update(dTime, newEntity){
        if(!dTime) return;
        this.xpos += this.Vx;
        this.ypos += this.Vy;
        this.xpos += newEntity.xpos;
        this.ypos += newEntity.ypos;
    }
}

