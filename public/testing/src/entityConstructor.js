 export class entity {
    constructor(displayWidth, displayHeight){
        this.width = 100;
        this.height = 100;

        this.position = {
            x: displayWidth / 2 - this.width / 2,
            y: displayHeight / 2 - this.height / 2,
        }
    }
    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}