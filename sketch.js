Engine = Matter.Engine;
World = Matter.World;
Bodies = World.Bodies;
var image , tap;
var world, engine;
var gameState;
var bgImg, bg;
var img1, img2, img3, Img1, Img2, Img3;
var maze1Img, maze, maze2Img, maze3Img;
var tap, tapImg, drop, dropImg;
var waterButton, airButton, landButton, inst;
var box1, box2;
var watersplash, leaves, leavesImg, watersplashImg;

var sp1, sp2;
function preload(){
  bgImg = loadImage("images/bg.jpg")
  leavesImg = loadImage("images/leaves.png");
  watersplashImg = loadImage("images/waterslpash.png")
}
function setup() {
  
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create(engine);
  world = engine.world;
  screen = new Screen1();
  screen2 = new Screen2();
  screen3 = new Screen3();
  screen4 = new Screen4();
 
  
 

  //bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  //bg.addImage(bgImg)

}

function draw() {
  background(bgImg);  
  /*box1.x=mouseX;
  box1.y = mouseY;
  
  box1.shapeColor ="red";
  box2.shapeColor = "red";
  if(isTouching(box1,box2)){
box1.shapeColor = "green;"
  }*/
  screen.display();
  if(gameState === 1){
    screen2.display();
  }
  
  if (gameState === 2){
    screen3.display();
  }

  if(gameState === 3){
    screen4.display();
  }
  console.log(gameState);
  drawSprites();
}

function isTouching(sp1, sp2){
 if(sp1.x - sp2.x < sp1.width/2 + sp2.width/2 &&
  sp2.x - sp1.x < sp1.width/2 + sp2.width/2 &&
  sp1.y - sp2.y < sp1.height/2 + sp2.height/2 &&
  sp2.y - sp1.y < sp1.height/2 + sp2.height/2){
  return true;
  }
  else {
    return false;
  }

 
}

