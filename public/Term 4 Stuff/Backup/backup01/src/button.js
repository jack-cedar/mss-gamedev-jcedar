export class button{
    constructor(xPos, yPos, radius, colour){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.colour = colour;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle= this.colour;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    buttonClicked(mouseX, mouseY){
      
        let distance = Math.sqrt(((mouseX-this.xPos)*(mouseX-this.xPos))+((mouseY-this.yPos)*(mouseY-this.yPos)))
        if (distance < this.radius)
        return "clicked";
    }    
}