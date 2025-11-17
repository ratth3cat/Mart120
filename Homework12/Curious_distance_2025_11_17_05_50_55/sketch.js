// Spawn Point
var characterX = 50;
var characterY = 50;
// Keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

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
    fill(50,50,200);
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

background (120, 45, 78);
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

//mouseclick shape
  fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);

if(characterX > width && characterY > width)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

  if(characterX > width && characterY > width-600)
    {
        fill(10);
        stroke(5);
        textSize(26);
        text("Ya Did It!", width/2-50, height/2-50);




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

 // Enemy
    fill(13,145,14);
    // draw the shape
    circle(shapeX, shapeY, 50);

 fill(13,145,14);
    // draw the shape
    circle(shapeX, shapeY, 10);
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

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
}