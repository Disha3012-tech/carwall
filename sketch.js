
var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
 car=createSprite(100,500,80,20);
 car.shapeColor="red";
 car.velocityX=5;

 wall=createSprite(600,500,20,100);
 wall.shapeColor="red"
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(wall,car)){
    car.shapeColor="red";
    wall.shapeColor="red";
  }
 else{
   car.shapeColor="lightblue";
   wall.shapeColor="lightblue";
 }

  if(isTouching(fixedRect, movingRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
  
  else {
    movingRect.shapeColor = "pink";
  
    fixedRect.shapeColor = "pink";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



