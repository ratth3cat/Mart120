// Spawn Point
var characterX = 50;
var characterY = 50;
// Keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

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
circle(characterX,characterY,25);

}


function setup() {
    createCanvas(800, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }


}

function draw()
{
 
  
   // potential enemy
    fill(13, 145, 14);
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


// move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }

    }


//call createBorders
    createBorders(15);

 //createCharacter;
    drawCharacter();
    characterMovement();



// move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

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
//mouseclick shape
  fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);


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
function createCharacter(x, y) 
{
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}
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
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;

background (120, 45, 78);
    stroke(0);
    fill(0);
}