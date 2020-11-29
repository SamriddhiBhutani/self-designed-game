class Screen3{
    constructor(){
        this.maze;
        this.tap;
        this.box;
        this.drop;
        this.box = createSprite(200,200,20,20);
        dropImg = loadImage("images/water_drop.png")
        maze1Img = loadImage("images/maze1.png");
  maze2Img = loadImage("images/maze2.png");
  maze3Img = loadImage("images/maze3.png");
  tapImg = loadImage("images/tap.png");
    }
    display(){
        
        
        this.box.shapeColor = "red"
        this.maze= createSprite(displayWidth/2,displayHeight/2)
        this.maze.addImage(maze3Img);
    this.maze.scale = 0.7;
    this.tap = createSprite(displayWidth/2+400, displayHeight/2+200);
    this.tap.addImage(tapImg);
    this.tap.scale = 0.2;
    
    if(frameCount%50 === 0){
        this.drop = createSprite(displayWidth/2+380, displayHeight/2+200);
    this.drop.velocityY = 5;
    if(this.drop.y > displayHeight/2+250){
        this.drop.y = displayHeight/2+200
    }
    if (this.box.isTouching(this.tap)){
        this.drop.visible = false;
        text("Great Work !! Saving Water Is a Nice Activity. Never Waste Any Drop Of Water , As Water Is Precious !!");
    }
    this.drop.addImage(dropImg);
    this.drop.scale = 0.06;

    }
      this.box.velocityY =0;
      this.box.velocityX =0;
    if(keyDown(UP_ARROW)){
        this.box.velocityY = -10;
        this.box.velocityX = 0;
    }    
    else if(keyDown(DOWN_ARROW)){
        this.box.velocityY = 10;
        this.box.velocityX = 0;
    }
    else if(keyDown(LEFT_ARROW)){
        this.box.velocityX = -10;
        this.box.velocityY = 0;
    }
    else if(keyDown(RIGHT_ARROW)){
        this.box.velocityX = 10;
        this.box.velocityY = 0;
    }

    }
}
