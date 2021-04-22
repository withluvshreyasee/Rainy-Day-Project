class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.1,           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
      //  this.image=loadImage("images/drops.jpg");
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > 400){
            Matter.Body.setPosition(this.rain, {x:random(0,1100), y:random(0,1100)})
        }
    }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
       // imageMode(CENTER);
        //image(this.image,0, 0, this.radius, this.radius);
    }
}