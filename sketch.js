var bgImg1,bgImg2;
var game,form,player;
var gameState=0;

function preload(){
  bgImg1=loadImage("images/background1.png");
  bgImg2=loadImage("images/background2.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);
  game=new Game();
  game.start();
  //console.log(player.name);
}

function draw() {
  if (gameState===1){
    clear();
    game.play();
  } 
 // drawSprites();
}