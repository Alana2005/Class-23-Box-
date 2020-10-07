const Engine=Matter.Engine; 
const World=Matter.World;
const Bodies=Matter.Bodies; 
var engine, world;

function setup{
createcanvas (400,800);
 engine=Engine.create(); 
    engine.world();
    world=engine.world();
    Box1=new Box1(200,400,50,50);
}

function draw{
    background (240);
  Box1=display()
}
