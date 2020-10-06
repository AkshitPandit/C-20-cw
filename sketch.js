var mbox , fbox;

function setup() {
  createCanvas(800,400);
 mbox = createSprite(400, 200, 50, 50);
 fbox = createSprite(200, 100, 50, 50);

 mbox.shapeColor = "red";
 fbox.shapeColor = "red";
}

function draw() {
  background(0);  
mbox.x = mouseX;
mbox.y = mouseY;

fbox.velocityX = 5;
fbox.velocityY = 5;

if((mbox.x - fbox.x < mbox.width/2 + fbox.width/2)
&&(fbox.x - mbox.x < mbox.width/2 + fbox.width/2)
&&(mbox.y - fbox.y < mbox.height/2 + fbox.height/2)
&&(fbox.y - mbox.y < mbox.height/2 + fbox.height/2)){
  mbox.shapeColor = "blue";
  fbox.shapeColor = "blue";
} else{
  mbox.shapeColor = "red";
  fbox.shapeColor = "red";
}
if((mbox.x - fbox.x < mbox.width/2 + fbox.width/2)
&&(fbox.x - mbox.x < mbox.width/2 + fbox.width/2)
){mbox.velocityX = mbox.velocityX*(-1);
  fbox.velocityX = fbox.velocityX*(-1);
}
if((mbox.y - fbox.y < mbox.height/2 + fbox.height/2)
&&(fbox.y - mbox.y < mbox.height/2 + fbox.height/2)
){mbox.velocityY = mbox.velocityY*(-1);
  fbox.velocityY = fbox.velocityY*(-1);
}
  drawSprites();
}
