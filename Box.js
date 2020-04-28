//Create Child "Bird" from parent "Base Class"
//Implement DRY
  class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255;
      this.image=loadImage("2.PNG");
    }
    display(){
      if(this.body.speed<5){
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,30,30);
        this.visibility-=15
        pop();
      }
    }
  };
