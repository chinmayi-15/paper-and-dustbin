class Ball {
    constructor(x, y, radius) {
      var options = {

        'isStatic ': false,
          'restitution':0.3,
          'friction':0.8,
          'density':0.2
      }
      this.body = Bodies.circle(x, y, 25,  options);
      this.radius = radius
      this.image = loadImage("sprites/paper.png")
      
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
    imageMode(CENTER);
      
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
  };
  