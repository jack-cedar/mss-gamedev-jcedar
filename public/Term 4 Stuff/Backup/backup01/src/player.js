import {mapIndex} from './map_data.js'
import {changeMap_data} from './index.js'

export class player{
    constructor(map_data){
        this.cPos = [4,3];
        this.pPos = [4,3];
        this.nPos =  [4,3];
        this.dPos = [4,3]
        this.dimentions = [16, 16];
        this.cMap= map_data;
        this.CAN_MOVE = false;
        this.HAS_KEY = false;
        
        this.stats = {
            hpMax:20,
            hp: 20,
            dmg: 5,
        }  
    }
    distanceToTarget(target){
        let distance = Math.sqrt(
        ((target.cPos[0]-this.cPos[0])*(target.cPos[0]-this.cPos[0]))+
        ((target.cPos[1]-this.cPos[1])*(target.cPos[1]-this.cPos[1])))
        return distance;
    }
    attack(target){
        target.hp -= this.stats.dmg
        if (target.hp <= 0) {target.cPos[0] = 10000, target.cPos[1] = 10000;}else{
            this.stats.hp -= target.dmg
        }
        
    }
    move(){
        //console.log(this.cMap[mapIndex(this.nPos[0], this.nPos[1])])
        switch (this.cMap[mapIndex(this.nPos[0], this.nPos[1])]){
            case undefined:changeMap_data();
            case 0x00:this.CAN_MOVE = 1;break;
            case 0x10:this.CAN_MOVE = 1;break;
            case 0x0e:this.CAN_MOVE = 1;this.HAS_KEY = true;this.cMap[mapIndex(this.nPos[0], this.nPos[1])]=0x00; break;
            case 0x0f:this.CAN_MOVE = 0;if(this.HAS_KEY==true){this.CAN_MOVE = true;this.cMap[mapIndex(this.nPos[0], this.nPos[1])]=0x00};break;
            default  :this.CAN_MOVE = 0; 
        }
        //if (this.cMap[mapIndex(this.cPos[0], this.cPos[1])]==0x10){}
        if(this.CAN_MOVE == true){
            this.pPos = [this.cPos[0], this.cPos[1]];
            this.cPos = [this.nPos[0], this.nPos[1]];
        }   else{this.nPos = [this.cPos[0],this.cPos[1]]}
        this.CAN_MOVE = false;
        //console.log(this.CAN_MOVE)
        //console.log(this.cPos)
        
    }
    draw(ctx, tileX, tileY){
        ctx.fillStyle = 'black';
        ctx.fillRect(tileX*this.cPos[0], tileY*this.cPos[1], tileX ,tileY)
    }
    update(map_data, IS_FIGHTING){
        this.cMap = map_data;
        switch (IS_FIGHTING) {
            case false: this.move();
                break;
        
        }
    
    }
}