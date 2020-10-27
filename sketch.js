
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var invisibleGround
var survivalTime =0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   
  
  monkey = createSprite(80,305,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4 ;
  ground.x = ground.width/2;
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
  console.log(ground.X)
}


function draw() {
  background(255)
  survivalTime =Math.ceil(frameCount/frameRate())
  text("survivalTime: "+ survivalTime, 200,50);
  
if (ground.x < 0){
      ground.x = ground.width/2;
  }
if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(invisibleGround)
 
   spawnFoodGroup();
    spawnobstacleGroup();
  
 drawSprites(); 
}
function spawnFoodGroup() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(550,440,30,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;   
    banana.lifetime = 200;
    //add each cloud to the group
    FoodGroup.add(banana);
  }
  
}
 
 function spawnobstacleGroup() {  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,30,20);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;   
    obstacle.lifetime = 200;
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
   
 }



