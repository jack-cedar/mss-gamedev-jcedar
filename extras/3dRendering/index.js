let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');


let canvasWidth = document.getElementById("myCanvas").width;
let canvasHeight = document.getElementById("myCanvas").height;
ctx.translate(canvasWidth/2, canvasHeight/2);

class polygon{
    constructor(p1, p2, p3, p4){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.distance = (this.p1[2])+(this.p2[2])+(this.p3[2])+(this.p4[2]);
        
    }
    drawPolygon(colour, fill, stroke){
        
        ctx.fillStyle= colour;
        ctx.moveTo(this.p1[0], this.p1[1]);
        ctx.lineTo(this.p2[0], this.p2[1]);
        ctx.lineTo(this.p3[0], this.p3[1]);
        ctx.lineTo(this.p4[0], this.p4[1]);
        ctx.lineTo(this.p1[0], this.p1[1]);
        if(fill == true){
            ctx.fill();
        }
        if(stroke == true)
        {
            ctx.stroke();
        }
    }
}
let poly01 = new polygon([50, 50, 2],[50, -50, 2],[-50, -50, 2], [-50, 50, 2])
let poly02 = new polygon([0, 75, 1],[0, -75, 1],[-50, -50, 2], [-50, 50, 2])
let poly03 = new polygon([150, 75, 0],[150, -75, 0],[50, -50, 1], [50, 50, 1])
let poly04 = new polygon([150, 75, 0],[150, -75, 0],[0, -75, 0], [0, 75, 0])
let poly05 = new polygon([-50, -50, 2],[50, -50, 2],[150, -75, 0],[150, -75, 0])


let distances = [poly01, poly02, poly03, poly04, poly05]

distances.sort((a, b) => {
    if(a.distance > b.distance){
        return -1
    }else {
        return 1
    }
})
nP = distances.length

console.log(distances)


function renderPolygons(){
    
    for(let i = 0 ; nP > i; i++){
        

        distances[i].drawPolygon('white', true, true);
    }
}
renderPolygons();

function colours(i){
    switch(i){
        case 0: return'purple';
        case 1: return'blue';
        case 2: return'red';
        case 3: return'purple';
        case 4: return'green';
    }
}



    

   

    


















