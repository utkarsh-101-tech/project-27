
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(220,600,45);
   bob2 = new Bob(310,600,45);
   bob3 = new Bob(400,600,45);
   bob4 = new Bob(490,600,45);
   bob5 = new Bob(580,600,45);

   roof1 = new Roof(400,200,500,40);
   
   
   rope1 = new Rope(roof1.body,bob1.body,-180,0);
   rope2 = new Rope(roof1.body,bob2.body,-90,0);
   rope3 = new Rope(roof1.body,bob3.body,0,0);
   rope4 = new Rope(roof1.body,bob4.body,90,0);
   rope5 = new Rope(roof1.body,bob5.body,180,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-200,y:-75})
	}
}

