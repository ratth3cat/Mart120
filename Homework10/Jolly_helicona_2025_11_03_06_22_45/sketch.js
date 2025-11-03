//`triangle(x1, y1, x2, y2, x3, y3)`.//
//circle//
var x = 260;
var y = 100;
//rectangle//
var xx= 80;
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
//text size
var dynamicTextSize = 20;
var textDir=1;

function setup() {
  createCanvas(400, 400);
  movement = floor(random() * 10) + 1;
  background(200);
  
}

function draw() {
  background(220);
//glasses
  rect (xx,yy,100,50);
       if(xx >= 400 || xx <= 0)
    {
       movement *= -1;
    }
     xx += movement;

  circle (x,100,70);
    if(x >= 400 || x <= 0)
    {
       movement *= -1;
    }
     x += movement;


  line (175, 100, 225, 100);
//other circle
circle (100,y,40);
 if(y >= 400 || y <= 0)
    {
       movement *= -1;
    }
     y += movement;

  
//nose
  triangle (xxx, yyy, xxxx, yyyy, xxxx, yyyyy);
 if(yyy >= 400 || yyy <= 0)
    {
       movement *= -1;
    }
     yyy += movement;
 if(yyyy >= 400 || yyyy <= 0)
    {
       movement *= -1;
    }
     yyyy += movement;
   if(yyyyy >= 400 || yyyyy <= 0)
    {
       movement *= -1;
    }
     yyyyy += movement;





//mouth
  line (mx, my, mxx, my);
         
        if(mxx >= 400 || mxx <= 0)
    {
       movement *= -1;
    }
     mxx += movement;
       if(mx >= 400 || mx <= 0)
    {
       movement *= -1;
    }
     mx += movement;
 if(my >= 400 || my <= 0)
    {
       movement *= -1;
    }
     my += movement;
//eyebrow
  line (225, 65, 275, 65);

//freckles
  point (315, 215);
  point (250, 215);
  point (282, 155) ;

   text('Dan Kallstrom', 300, 370);
       

    text('I AM', 10, 30);
    
   
}