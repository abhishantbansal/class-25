class Log extends parent {
  constructor(x,y,width,angle){
    super(x,y,width,20);
    this.image = loadImage("sprites/wood2.png");

    Matter.Body.setAngle(this.body,angle);
  }
}