class Game{

    constructor(){}

    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val()
        })
    }

    updateState(state){
        database.ref("/").update({
           gameState:state
        })
    }

    wait(){
        form=new Form()
        form.display()
        player=new Player()
        player.getCount()
        cycle1=createSprite(200,200,50,50)
        cycle1.addImage(cycleImg)
        cycle2=createSprite(200,250,50,50)
        cycle2.addImage(cycleImg)
        cycles=[cycle1,cycle2]

        for(var i=2000;i<height;i=i+500){
            obstacle1=createSprite(i,100,50,50)
            obstacle2=createSprite(i,300,50,50)
            obstacle3=createSprite(i,500,50,50)
            obstacle1.addImage(rockImg)
            obstacle2.addImage(rockImg)
            obstacle3.addImage(rockImg)
        }

    }

    play(){
        form.greetings.hide()
        form.title.hide()
        textSize(32)
        text("game start",200,200)
        player.getInfoPlayer()
        console.log(allPlayers)

        if(keyIsDown(RIGHT_ARROW)){
          player.distance+=50
          player.update()
        }
        image(racetrackImg,0,0,width*4,height)

        if(player.distance>5000){
            gameState=2}

        drawSprites()
        var index=0
        var y=200

        for(var plr in allPlayers){
          cycles[index].x=allPlayers[plr].distance
          cycles[index].y=y
          if( plr === "player" + player.index){
            fill ("red")
            camera.position.x= cycles[index].x
            camera.position.y= height/2
        }
        }

        

        index++
        y+=200
    }

    end(){
     alert("you win")
    }
}

