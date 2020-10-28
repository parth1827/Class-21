var fixedRect,movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);

  fixedRect =  createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 2

  movingRect = createSprite(500,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200,200,80,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(100,300,50,80);
  gameObject2.shapeColor = "green";
  gameObject2.velocityY = -2;

}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  bounceOff(fixedRect,gameObject2);
  
  drawSprites();
}





