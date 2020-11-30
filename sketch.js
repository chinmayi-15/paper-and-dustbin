
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, box1, box3;

var dust, dustImg

function preload()
{
	
	dustImg = loadImage("sprites/dustbingreen.png")

	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;



	ball = new Ball(200,590,70);
	
	ground = new Ground(600,height,1200,20)


	box1 = new Box(760,500,20, 300);
	
	box3 = new Box(980,500,20, 300);

	dust = createSprite(870, 490, 20, 200)
	dust.addImage("dustbin", dustImg)
	dust.scale = 0.95;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  box1.display();
  box3.display();
  


ball.display();
ground.display();



keyPressed();
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body, ball.body.position ,{x:1.8, y:-2})


}

}


