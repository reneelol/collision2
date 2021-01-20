var fixed,moving;
var gameObject1
var gameObject2;
var gameObject3;
function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 fixed.shapeColor="green";
 moving= createSprite(200,200,50,50);
 moving.shapeColor="green";
 gameObject1 = createSprite(100,100,50,50)
 gameObject1.shapeColor = "green"
 gameObject2 = createSprite(200,100,50,50)
 gameObject2.shapeColor = "green"
 gameObject3 = createSprite(300,100,50,50)
 gameObject3.shapeColor = "green"
}

function draw() {
  background(0);  
  moving.x=mouseX;
  moving.y=mouseY;
  if(isTouching(moving,gameObject2)){
    moving.shapeColor="red";
    gameObject2.shapeColor="red";
  }
  else{
    moving.shapeColor="green";
    gameObject2.shapeColor="green";
  }
  
  drawSprites();
}

