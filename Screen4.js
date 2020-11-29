class Screen4{
    constructor(){
        this.leaves;
                this.watergun;
        this.watersplash;
        this.leaveImg = loadImage("images/leaves.png")
        this.background;
        this.waterSplashImg = loadImage("images/waterslpash.png")
        this.watergunImg = loadImage("images/watergun.png"); 
        this.point = 0;
    }
    display(){
        this.background = createSprite(displayWidth /2, displayHeight/2, displayWidth+50, displayHeight);
        this.background.addImage(bgImg);
        this.background.velocityX = 5;
        if(this.background.x > displayWidth-100){
            this.background.x = displayWidth/2;
        }
        this.watergun = createSprite(displayWidth/2 + 100,displayHeight/2)
        //this.watersplash.visible = false;
        if(frameCount % 100 === 0){
            leaves = createSprite(50,random(50,500));
            leaves.addImage(leavesImg)
        }
        if(keyCode === 32){
            watersplash = createSprite(this.watergun.position.x,this.watergun.position.y)
            watersplash.addImage(this.waterSplashImg);
            watersplash.velocityX = 4;
        }
        if(isTouching(leaves,watersplash)){
            this.point += 1;
            watersplash.destroy();
            leaves.destroy();
        }
        if(frameCount % 1000 === 0){
            leaves.visible = false;
            this.watergun.visible = false;
        }
    }
}