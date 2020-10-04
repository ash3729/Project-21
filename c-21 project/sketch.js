var bullets,speed,weight;
var wall,thickness;
var damage;
function setup() {
  
  //creating canvas
  createCanvas(1600,400);
  
  //random
  thickness = random(33,83);
  speed = random(40,100);
  weight = random(30,52)
  //creating sprites 
  bullets = createSprite(100,200,70,40);
  bullets.shapeColor = "red";
  wall = createSprite(1300,200,thickness,500);
  wall.shapeColor = "white";
  bullets.velocityX = speed;
}

function draw() {
  background("black");  
  drawSprites();

  //RERUN
  if(bullets.x>1600){

    bullets.x = 0;

  }

if(hascollided(bullets,wall)){
bullets.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

if(damage>10){

wall.shapeColor = "red";

}

if(damage<10){

  wall.shapeColor = "green";

}


}











}
    

function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-5);
        object2.velocityX = object2.velocityX * (-5);
  
  
      }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-5);
      object2.velocityY = object2.velocityY * (-5);
    
  }
  

}

    
  function hascollided(lbullet,lwall){

bulletsRightEdge = lbullet.x + lbullet.width
wallLeftEdge = lwall.x

if(bulletsRightEdge>=wallLeftEdge){
return true;
}{
return false; 
}



  }

    
