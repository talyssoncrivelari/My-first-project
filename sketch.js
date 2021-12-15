var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyDown("Right")){
    ball.x = ball.x + 5;
  }
  if(keyDown("Left")){
    ball.x = ball.x - 5;
  }
  if(keyDown("Up")){
    ball.y = ball.y - 5;
  }
  if(keyDown("Down")){
    ball.y = ball.y + 5;
  }
  
  drawSprites();
}

