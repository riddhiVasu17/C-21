var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(150, 200, 50, 50);
  rect1.shapeColor = "green";
  rect1.velocityX = 3;
 
  rect2 = createSprite(450, 200, 100, 50);
  rect2.shapeColor = "green";
  rect2.velocityX = -3;

  rect3 = createSprite(400, 150, 60, 50);
  rect3.shapeColor = "green";
  rect3.velocityY = 2;

  rect4 = createSprite(400, 350, 40, 50);
  rect4.shapeColor = "green";
  rect4.velocityY = -2;

}


function draw() {
  background(0);  
  
  bounceOff(rect1, rect2);
  bounceOff(rect3, rect4);

  drawSprites();
}
