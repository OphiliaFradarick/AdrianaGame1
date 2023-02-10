var berry, berryImage, acorn, acornImg,bg;

function preload()
{
  berryImage = loadImage("berry.png");
  acornImage = loadImage("acorn.png");
  bg = loadImage("autum.jpg");
}

function setup() 
{
  createCanvas(700,700);
 
  //create the sprites
 

  //To make a picture transparent upload the image into the website removebg.com 
}

function draw() 
{
  background(bg);
  
  drawSprites();

  spawnAcorn();
  spawnBerry();
  
}

//spawning the acorn randomly
function spawnAcorn(){
  if(frameCount % 150 ===0){
    acorn = createSprite(random(50,650),10);
    acorn.addImage("image2", acornImage);
    acorn.scale = 0.16;
    acorn.velocityY = 3;
  }
}

//spawning the berry randomly
function spawnBerry(){
  if(frameCount % 100 ===0){
    berry = createSprite(random(50,650),0);
    berry.addImage("image", berryImage);
    berry.scale = 0.1;
    berry.velocityY = 5;
  }
}