class Bird extends BaseClass {
    constructor(x, y, r){
        super(x, y, r*2, r*2)
        var options={
            restitution: 0.8,
            friction: 1.0,
            density: 2.0
        }
        this.body = Bodies.circle(x, y, r, options)
        this.img = loadImage("sprites/bird.png")
        World.add(world, this.body)
    }
    display(){
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        super.display()
    }
}