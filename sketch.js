const Engine=Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world


function setup() {
  createCanvas(800,400);
engine= Engine.create()
world= engine.world

ground= new Ground(400,380,800,20)
platform2 = new Platform(650,200,200,20)
ball=new Ball(200,200,40,40)

  box1 = new Box(635,198,35,35)
  box2 = new Box(645,198,35,35)
  box3 = new Box(655,198,35,35)
  box4 = new Box(665,198,35,35)
  box5 = new Box(650,179,35,35)
  box6 = new Box(653,179,35,35)
  box7 = new Box(659,179,35,35)
  box8 = new Box(655,160,35,35)
  box9 = new Box(658,160,35,35)
  box10 = new Box(656,141,35,35)

  box11 = new Box(635,359,35,35)
  box12 = new Box(645,359,35,35)
  box13 = new Box(655,359,35,35)
  box14 = new Box(665,359,35,35)
  box15 = new Box(650,340,35,35)
  box16 = new Box(653,340,35,35)
  box17 = new Box(659,340,35,35)
  box18 = new Box(655,321,35,35)
  box19 = new Box(658,321,35,35)
  box20 = new Box(656,302,35,35)

chain=new Slingshot(ball.body,{x:100,y:100})
}

function draw() {
 background("black");  
 Engine.update(engine)
  
  ground.display()
  ball.display()
  platform2.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  chain.display()
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.release()
}
function keyPressed(){
  if(keyCode===32){
      chain.attach(ball.body)
  }
  }