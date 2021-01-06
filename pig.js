class Pig extends BaseClass {

    constructor(x, y) {
        super(x, y, 60, 60)
        
        this.img = loadImage("sprites/enemy.png")
        this.body.restitution = 0.8
        this.body.friction = 0.3
    }
}