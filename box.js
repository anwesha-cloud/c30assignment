class Box{
    constructor(x,y,w,h){
var options={
    restitution:0.3,
    friction:0.3,
    density:0.5
}
this.body=Bodies.rectangle(x,y,w,h,options)
this.w=w
this.h=h
World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow");
        rect(0,0,this.w,this.h)
        console.log(this.body.speed)
        if(this.body.speed>3){
        World.remove(world,this.body)
        }
        pop()
    }
}