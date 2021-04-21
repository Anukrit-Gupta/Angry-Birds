class Ground {
    constructor ()  {
        var ground_option = {
            isStatic:true
          }
          this.body = Bodies.rectangle(600,390,1200,20,ground_option);
          World.add(world,this.body);
        this.image = loadImage("sprites/ground.png")
    }
    display() {
    push ();  
    imageMode (CENTER);
    image(this.image,600,390,1200,20);
    pop ();
    }
}