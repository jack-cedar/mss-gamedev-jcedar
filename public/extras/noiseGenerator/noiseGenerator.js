var canvas = document.querySelector('canvas');
var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
let height = document.getElementById('myCanvas').height;
let width = document.getElementById('myCanvas').width;
function clearCanvas(){c.clearRect(0,0,width,height);}
function generate(){
    var tiles =document.getElementById("size").value;
    var tileSize = parseFloat(tiles);
    c.clearRect(0,0,width,height);
    for (var x = 0; x < width/tileSize*tileSize; x+=tileSize){
        for (var y = 0; y < height/tileSize*tileSize; y+=tileSize){                    
            let v = Math.random()
            c.globalAlpha = v;
            c.fillRect(x , y, tileSize, tileSize);
        }
    }
}