class slingShot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.03,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
        this.point=point
        this.sling1=loadImage("3.jpg");
        this.sling2=loadImage("4.jpg")
        this.sling3=loadImage("5.jpg")
    }
    fly(){
        this.slingShot.bodyA=null;
    }
    attach(){
        this.slingShot.bodyA=bird[count].body;
    }
    display(){
        image(this.sling1,10,50,150,120)
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            strokeWeight(4);
            stroke("white")
            if(pointA.x<200){
            image(this.sling3,pointA.x-100,pointA.y-30,100,100)
        }else {
            image(this.sling2,pointA.x+50,pointA.y-30,100,100)
        }
    }
    }
}