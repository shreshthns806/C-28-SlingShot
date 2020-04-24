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
    }
    fly(){
        this.slingShot.bodyA=null;
    }
    attach(){
        this.slingShot.bodyA=bird[count].body;
    }
    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, this.point.x, this.point.y);
        }
    }
}