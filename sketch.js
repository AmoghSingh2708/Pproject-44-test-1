var spaceship,spaceshipImage;
var obstacle, obstacleImage;
var bg,bgImage;






function preload(){

  spaceshipImage = loadImage("Images/Spaceship.png");
  obstacleImage = loadImage("Images/Obstacle 1.png");
  bgImage = loadImage("Images/background.jpg")

  

}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight)
  bg = createSprite(windowWidth/2,windowHeight/2);
  bg.addImage("bg",bgImage);

  spaceship = createSprite(200,500);
  spaceship.addImage("spaceship",spaceshipImage);
  spaceship.velocityX = +7
  spaceship.scale = 1.2
    

  obstacle = createSprite(800,500);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.2

}
function draw(){
  background(0)

  if(keyDown("up")){
    spaceship.y = spaceship.y -20
  }

  if(keyDown("down")){
    spaceship.y = spaceship.y +20
  }


  drawSprites();
}
