class Log extends BaseClass{
    constructor(x, y, h, ang){
        super(x, y, 20, h)
        Matter.Body.setAngle(this.body, ang)
        this.img = loadImage("sprites/wood2.png")
        this.body.restitution = 0.3
    }
}