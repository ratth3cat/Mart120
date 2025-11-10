// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;
var mouseShapeX;
var mouseShapeY;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;


function setup()
{
 createCanvas(800, 600);
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    
}
function draw()s
{
    background(01,50,40);
    stroke(1);
    fill(150);

textSize(16);
    text("OVER HERE", width-100,height-100)
    

 drawCharacter();
    characterMovement();
//obstical
fill(13,200,140);
circle(shapeX, shapeY, 50);



//movement
           shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

fill(130,200,500);
circle(shapeX, shapeY, 10);
shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);


 shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
//border chek
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

 if(characterX > width && characterY > width-350)
    {
        fill(10);
        stroke(5);
        textSize(26);
        text("Ya Did It", width/3-50, height/3-50);

//click shape
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
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

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);

}
function drawCharacter()
{
    fill(200,2,350);
    circle(characterX,characterY,25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

}