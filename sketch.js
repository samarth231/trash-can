
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	ball = new Ball(200,50,10)

	ellipseMode(RADIUS);



	ground = new Ground(400,690,800,20)
	rightWall = new Ground(740,680,20,100)
	leftWall = new Ground(600,680,20,100)

	btn1 = createImg('right.png');
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hForce);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	ground.show();
	leftWall.show();
	rightWall.show();
	ball.show();
	Engine.update(engine);
  drawSprites();
 
}

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
