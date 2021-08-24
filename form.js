class Form{

    constructor(){

    }

    display(){
        this.title=createElement("h1")
        this.title.html("multiplayer racer game")
        this.title.position(675,200)

        this.input=createInput("name")
        this.input.position(715,300)
        this.input.size(150,30)

        this.button=createButton('play')
        this.button.position(750,400)
        this.button.mousePressed(()=>{
            player.name=this.input.value()
            this.input.hide()
            this.button.hide()
            this.greetings=createElement("h2")
            this.greetings.html("welcome " +player.name)
            this.greetings.position(600,300)

            playerCount++
            player.updateCount(playerCount)

            player.index=playerCount
            player.update()
        })
    }
}