var database
var gameState=0
var playerCount
var game,form,player
var allPlayers
var cycle1,cycle2
var cycles=[]
var obstacle1,obstacle2,obstacle3

function preload(){
  racetrackImg=loadImage("trackimage.jpg")
  cycleImg=loadImage("cycleimage.png")
  rockImg=loadImage("rockimage.png")
}

function setup(){
  var canvas=createCanvas(displayWidth,displayHeight);

  database=firebase.database()

 game=new Game()
 game.wait()
 game.getState()
}
function draw()
{
  background("white");
  
  if(playerCount===2){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }

  if(gameState===2){
    game.end()
  }

  console.log(playerCount)
}
