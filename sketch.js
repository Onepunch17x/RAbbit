var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg ;
var orange,orangeImg ;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  

 
  

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


  
  


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var Num = Math.round(random(1,2));

if (frameCount % 80 === 0) {
  if(Num == 1 ){
    createApples();
  }
  else{
    createLeaves();
  }
}



}



function draw() {
  background(0);

  
  

  rabbit.x=mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale = 0.1
apple.velocityY = 2
apple.lifetime = 100

}

function createLeaves(){
orange = createSprite(random(200,350),40,10,10);
orange.addImage(orangeImg);
orange.scale = 0.1
orange.lifetime= 100
orange.velocityY = 2


}