
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Score,ground;
var SurvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
}



function setup() {
  createCanvas(600,400);

Score = 0;
SurvivalTime = 0;

ground = createSprite(400,350,900,10);

monkey = createSprite(90,315,10,10);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1
  
}


function draw() {
background("green");
  
if(keyDown("space")&&monkey.y >= 350){
  monkey.velocityY = -10;
}   
monkey.velocityY = monkey.velocityY + 0.3;  
monkey.collide(ground);
  
if(ground.x<0){
 ground.x = ground.width/2; 
}

  

  fruits()
 


  stones()

    
if(FoodGroup.isTouching(monkey)){
  FoodGroup.destroyEach();
  score = score +1;
}  
 if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
}   
drawSprites()

fill("white");
text("Score: " + Score, 500,50);
  
stroke("black")  
textSize(20); 
fill("black");
var SurvivalTime = Math.ceil(frameCount/frameRate());
text("SurvivalTime: " + SurvivalTime, 100,50)  
}

function fruits(){
  if(World.frameCount%200===0){
banana=createSprite(670,Math.round(random(120,230),10,10));
  
 banana.addImage(bananaImage);
 banana.scale = 0.1
 banana.velocityX = -3;
 banana.lifetime = 200; 
 FoodGroup.add(banana); 
}
}
  
function stones(){
  if(World.frameCount%200===0){
  obstacle = createSprite(670,320,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -4;
  obstacle.scale = 0.2
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle); 
}
}



