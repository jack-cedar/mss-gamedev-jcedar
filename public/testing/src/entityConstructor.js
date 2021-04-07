 export class entity {
    constructor(displayWidth, displayHeight){
        this.width = 100;
        this.height = 100;

        this.position = {
            x: 20,
            y: 20,
        }
    }
    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}