const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ball;
var dustbin,dustbinImg;

function preload(){
  dustbinImg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

  ground = new Ground();
  paper = new Paper();

  dustbinPart1 = new Dustbin(902,505,10,120);
  dustbinPart2 = new Dustbin(962,565,130,10);
  dustbinPart3 = new Dustbin(1024,505,10,120);
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  paper.display();

  drawSprites();
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position);
  }
}

