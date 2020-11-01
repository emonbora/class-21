var fixedRect, movingRect;
var rect1, rect2;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(400,100,50,80);
  rect1.velocityY = 5
  rect2 = createSprite(400,800,80,30);
  rect2.velocityY = -5
  fixedRect = createSprite(600, 400, 50, 80); 
  fixedRect.shapeColor = "green"; fixedRect.debug = true; 
  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "green"; 
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50); 
  gameObject1.shapeColor = "green"; 
  gameObject2 = createSprite(200, 100, 50, 50); 
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50); 
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50); 
  gameObject4.shapeColor = "green"; 



}

function draw() {
  background(0); 
  
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  
  if(isTouching(movingRect,gameObject2)){

    gameObject2.shapeColor = "red"
    movingRect.shapeColor = "red"
   
  }
  else{
    gameObject2.shapeColor = "blue"
    movingRect.shapeColor = "blue"

  }
  bounceOff(rect1,rect2);
 
  drawSprites();
}

