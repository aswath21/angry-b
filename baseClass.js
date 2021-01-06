class BaseClass {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.img = loadImage("sprites/base.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      imageMode(CENTER);
      push()
      translate(pos.x, pos.y)
      rotate(angle)
      image(this.img, 0, 0, this.width, this.height);
      pop();
    }
  };