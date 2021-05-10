const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImg, stone, stoneImg, groundSprite, boy, boyImg, backgroundIMG;

function preload(){
backgroundIMG = loadImage("bg.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,395,20);
	mango1 = new Mango(880,250,30);
	mango2 = new Mango(1080,250,30);
	mango3 = new Mango(900,150,30);
	mango4 = new Mango(1190,200,30);
	mango5 = new Mango(1000,60,30);
	mango6 = new Mango(1100,150,30);
  mango7 = new Mango(1000,180,30);
  tree = new Tree(1000,590);
  groundSprite = new Ground(600,590,1200,20);
	boy = new Boy(250,500);
	sling = new Sling(stone.body,{x:160, y:395});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG);
  //backgroundIMG.scale = 0.48;

  
  fill('red');
  textSize(24);
  textFont('Times New Roman');
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 100,200);
 

  groundSprite.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  sling.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    sling.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}