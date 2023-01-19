
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,leftWall,rightWall;
var world;
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.25,
		friction:0.1,
		density:1
	}
	
	ball = Bodies.circle(50,50,radius/2,ball_options)
	World.add(world,ball)

	ground = new ground(width/2,670,width,20)
	leftWall = new ground(1100,600,20,120)
	rightWall = new ground(1350,600,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius)
  ground.display()
  leftWall.display()
  rightWall.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{
			x:85,
			y:-85,
		})
	}
}



