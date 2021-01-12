var fixedRect, movingRect;
var bounce;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 200, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect =  createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

 fixedRect.velocityX = +3;
 movingRect.velocityX = -3;
}

function draw() {
  background(0);  


  bounce(movingRect,fixedRect);
  drawSprites();
}
