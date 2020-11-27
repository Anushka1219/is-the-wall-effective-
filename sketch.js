//Declaring the variables.
var bullet,wall;
var thickness,speed,weight
var damage,stage;


//Setup function.
function setup() {
  //Creating the canvas area.
  createCanvas(1600,400);

  //Giving values to the thickness, speed and weight variables.
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  //Creating a wall sprite.
  wall = createSprite(1200,200,thickness,400);
  //Giving it grey color.
  wall.shapeColor = color(80,80,80);
  //Making it invisible.
  wall.visible = false;

  //Creating a bullet sprite.
  bullet = createSprite(20,200,15,10);
  //Giving it white color.
  bullet.shapeColor = "white";
  //Making it invisible.
  bullet.visible = false;

  

  //Setting stage's value as 1.
  stage = 1;
}

//draw function.
function draw() {
  
  background("purple");

  if(stage === 1) {
    //Displaying text.
    fill("white");
    textSize(20);
    textStyle(BOLD);
    textFont("cursive");
    text("This is a simulator to test the reliability and effectiveness of different walls against different bullets shot by a gun.",20,50);
    text("Based upon the speed and weight of bullet and the thickness of the wall, the damage received by the wall is",20,80);
    text("calculated. The calculation is based on the given formula :-",20,110);
    text("0.5 * weight of bullet * speed of bullet * speed of bullet",20,150);
    text("(Thickness of the wall)",190,190);
    text("~ If damage received is greater than 10, the wall is considered of bad quality.",20,230);
    text("~ If damage received is less than 5, the wall is considered of good quality.",20,260);
    text("~ If damage received is between 5 and 10, wall is considered of average quality.",20,290);
    textSize(15);
    text("3",415,177);
    fill("yellow");
    textFont("georgia");
    textStyle(ITALIC);
    text("(Press Enter to start the test)",600,370);
    
    
    var line1 = createSprite(302,160,565,3);
    
    line1.lifetime = 1;
   
    line1.shapeColor = "white";

    
    if(keyDown("enter")) {
      stage = 2;
      
    }
  }

 
  else if(stage === 2) {
    
    bullet.velocityX = speed;
    
   
    bullet.visible = true;
    wall.visible = true;
  }

  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    
    damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);

    if(damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 5) {
      wall.shapeColor = color(0,255,0);
    }

    if(damage >= 5 && damage <= 10) {
      wall.shapeColor = color(255,255,0);
    }
  }

  drawSprites();  

  
  if(stage === 2) {
    fill("white");
    textSize(20);
    textStyle(BOLD);
    textFont("cursive");
    text("Speed of bullet: " + Math.round(speed),70,50);
    text("Weight of bullet: " + Math.round(weight),400,50);
    text("Thickness of wall: " + Math.round(thickness),730,50);

    if(damage > 10) {
      fill("red");
      text("Status of wall: Bad Quality",380,150);
    }

    if(damage < 5) {
      fill(0,255,0);
      text("Status of wall: Good Quality",380,150);
    }

    if(damage >= 5 && damage <= 10) {
      fill("yellow");
      text("Status of wall: Average",380,150);
    }

    fill("white");
    textFont("georgia");
    textSize(15);
    textStyle(ITALIC);
    text("(Refresh the page to Re-test)",600,370);
  }
  
}


function hasCollided(bullet1, wall1) {
  
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}