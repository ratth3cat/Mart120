// Spawn Point
var characterX = 100;
var characterY = 100;
// Keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
//`triangle(x1, y1, x2, y2, x3, y3)`.//
//circle//
var x = 260;
var y = 100;
//rectangle//
var xx = 80;
var yy = 70;
//triangle//
var xxx = 150;
var yyy = 250;
var xxxx = 200;
var yyyy = 120;
var yyyyy = 250;
var movement = 2;
//triangle//
//mouth//
var mx = 100;
var mxx = 275;
var my = 300;

//Shape
// x and y for a shape
var shapeX = 50;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}




function drawCharacter()
{
    fill(255, 255, 0);
    circle(characterX,characterY,25);
}


function setup()
{
 createCanvas(800, 600);
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{

background (0, 255, 255);
    stroke(0);
    fill(0);

//call createBorders
    createBorders(15);

 //createCharacter(200,350);
    drawCharacter();
    characterMovement();



// move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

//glasses
  fill(255, 0, 255);
  rect(xx, yy, 100, 50);
  if (xx >= 400 || xx <= 0) {
    movement *= -1;
  }
  xx += movement;

  fill(255, 255, 0);
  circle(x, 100, 70);
  if (x >= 400 || x <= 0) {
    movement *= -1;
  }
  x += movement;

 line(175, 100, 225, 100);

  //nose
  fill(255, 165, 0);
  triangle(xxx, yyy, xxxx, yyyy, xxxx, yyyyy);
  if (yyy >= 400 || yyy <= 0) {
    movement *= -1;
  }
  yyy += movement;
  if (yyyy >= 400 || yyyy <= 0) {
    movement *= -1;
  }
  yyyy += movement;
  if (yyyyy >= 400 || yyyyy <= 0) {
    movement *= -1;
  }
  yyyyy += movement;

  //mouth
  line(mx, my, mxx, my);

  if (mxx >= 400 || mxx <= 0) {
    movement *= -1;
  }
  mxx += movement;
  if (mx >= 400 || mx <= 0) {
    movement *= -1;
  }
  mx += movement;
  if (my >= 400 || my <= 0) {
    movement *= -1;
  }
  my += movement;
  //eyebrow
  line(225, 65, 275, 65);

  //freckles
  point(315, 215);
  point(250, 215);
  point(282, 155);

  //eyebrow
  line(225, 65, 275, 65);
  //eyelash 1
  line(230, 115, 220, 150);
  //eyelash 2
  line(250, 135, 250, 170);
  //eyelash 3
  line(265, 135, 265, 170);
  //eyelash 4
  line(285, 125, 295, 165);

  //eyelash 5
  line(90, 70, 90, 50);
  line(100, 70, 100, 50);
  line(110, 70, 110, 50);
  line(120, 70, 120, 50);
  line(130, 70, 130, 50);
  line(140, 70, 140, 50);
  line(150, 70, 150, 50);
  line(160, 70, 160, 50);
  line(170, 70, 170, 50);
  textSize(15);
  text("A Bit Confused", 300, 370);
  text("But I have spirit", 290, 390);

  textSize(32);
  text("I AM", 30, 50);


  

  if(characterX > width && characterY > width-600)
    {
        fill(10);
        stroke(5);
        textSize(26);
        text("Why did you leave your face?", width/2-50, height/2-50);




    }

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

 
}

//out of bounds check
 if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

//random speed
 shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


}