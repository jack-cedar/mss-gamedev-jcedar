var tileH = 16
var tileW = 16 
var Tileset = document.getElementById("Tileset")
export function drawMap_data(tileX, tileY, mapY, mapX, ctx, map_data, target){
    for(var y = 0; y < mapY; y++){
        for(var x = 0; x < mapX; x++){
             switch(map_data[((y*mapX)+x)]){
                case 0x00:
                    ctx.drawImage(Tileset, tileW*0, tileH*0, tileW, tileH,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x01:
                    ctx.drawImage(Tileset, tileW*1, tileH*0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x02:
                    ctx.drawImage(Tileset, 32, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x03:
                    ctx.drawImage(Tileset, 64, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x04:
                    ctx.drawImage(Tileset, 16, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x05:
                    ctx.drawImage(Tileset, 96, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x06:
                    ctx.drawImage(Tileset, 0, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x07:
                    ctx.drawImage(Tileset, 96, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x08:
                    ctx.drawImage(Tileset, 16, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x09:
                    ctx.drawImage(Tileset, 64, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x0a:
                    ctx.drawImage(Tileset, 0, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break; 
                case 0x0b:
                    ctx.drawImage(Tileset, 0, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x0c:
                    ctx.drawImage(Tileset, 32, 0, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;   
                case 0x0d:
                    ctx.drawImage(Tileset, 32, 32, 16, 16,x*tileX, y*tileY, tileX, tileY);
                    break;
                case 0x0e:
                    ctx.drawImage(Tileset, 80, 48, 16, 16,x*tileX, y*tileY, tileX, tileY);
                break;
                case 0x0f:
                    ctx.drawImage(Tileset, 64, 48, 16, 16,x*tileX, y*tileY, tileX, tileY);
                break;
                case 0x10:
                    target.draw(ctx, tileX, tileY , x, y)
                break;   
                default: 
                ctx.drawImage(Tileset, 16, 16, 16, 16,x*tileX, y*tileY, tileX, tileY);
                break;
            }
        }
    }
}