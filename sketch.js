//Name-Space Matter.js
    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    const Body = Matter.Body;
    var engine, world;
//Create Variables for bird array (currently empty)
    var bird=[];
    var count=0;
function setup(){
    //Create canvas of width 1200 and height 400.
        var canvas = createCanvas(1200,400);
    //Create engine and world.
        engine = Engine.create();
        world = engine.world;
    //Create first bird, filling the once empty array.
        bird[count] = new Bird(100,100);
    //Constraint bird with a point.
        sling = new slingShot(bird[count].body,{x:140,y:100});
    //Create 3 platforms, on whic to place boxes.
        ground1 = new Ground(900,200,100,10)
        ground2 = new Ground(400,300,150,10)
        ground3 = new Ground(600,100,140,10)
    //Create 47 boxes
        box1a = new Box(340,185,30,30)
        box2a = new Box(375,185,30,30)
        box3a = new Box(410,185,30,30)
        box4a = new Box(445,185,30,30)
        box5a = new Box(340,185,30,30)
        box6a = new Box(375,185,30,30)
        box7a = new Box(410,185,30,30)
        box8a = new Box(445,185,30,30)
        box9a = new Box(340,185,30,30)
        box10a = new Box(375,185,30,30)
        box11a = new Box(410,185,30,30)
        box12a= new Box(445,185,30,30)
        box1b = new Box(530,0,30,30)
        box2b = new Box(565,0,30,30)
        box3b = new Box(600,0,30,30)
        box4b = new Box(635,0,30,30)
        box5b = new Box(670,0,30,30)
        box6b = new Box(705,0,30,30)
        box7b = new Box(740,0,30,30)
        box8b = new Box(775,0,30,30)
        box9b = new Box(810,0,30,30)
        box10b = new Box(845,0,30,30)
        box11b = new Box(880,0,30,30)
        box12b= new Box(915,0,30,30)
        box12c= new Box(915,0,30,30)
        box1c = new Box(530,0,30,30)
        box2c = new Box(565,0,30,30)
        box3c = new Box(600,0,30,30)
        box4c = new Box(635,0,30,30)
        box5c = new Box(670,0,30,30)
        box6c = new Box(705,0,30,30)
        box7c = new Box(740,0,30,30)
        box8c = new Box(775,0,30,30)
        box9c = new Box(810,0,30,30)
        box10c = new Box(845,0,30,30)
        box11c = new Box(880,0,30,30)
        box12c= new Box(915,0,30,30)
        box1d = new Box(530,0,30,30)
        box2d = new Box(565,0,30,30)
        box3d = new Box(600,0,30,30)
        box4d = new Box(635,0,30,30)
        box5d = new Box(670,0,30,30)
        box6d = new Box(705,0,30,30)
        box7d = new Box(740,0,30,30)
        box8d = new Box(775,0,30,30)
        box9d = new Box(810,0,30,30)
        box10d = new Box(845,0,30,30)
        box11d = new Box(880,0,30,30)
}
function draw(){
    //Draw a black background
        background("black");
    //Update the engine
        Engine.update(engine);
    //Write instruction text for user
        strokeWeight(4);
        text("Drag and Release to throw Box",15,25)
    //Use a for loop to display the bird array
        for(i=0;i<count;i++){
            bird[i].display();
            bird[count].display();
        }
    //Display the variables created from class
        sling.display();  
        noStroke()
        ground1.display();
        ground2.display();
        ground3.display();
        box1a.display();
        box2a.display();
        box3a.display();
        box4a.display();
        box5a.display();
        box6a.display();
        box7a.display();
        box8a.display();
        box9a.display();
        box10a.display();
        box11a.display();
        box12a.display();
        box1b.display();
        box2b.display();
        box3b.display();
        box4b.display();
        box5b.display();
        box6b.display();
        box7b.display();
        box8b.display();
        box9b.display();
        box10b.display();
        box11b.display();
        box12b.display();
        box1c.display();
        box2c.display();
        box3c.display();
        box4c.display();
        box5c.display();
        box6c.display();
        box7c.display();
        box8c.display();
        box9c.display();
        box10c.display();
        box11c.display();
        box12c.display();
        box1d.display();
        box2d.display();
        box3d.display();
        box4d.display();
        box5d.display();
        box6d.display();
        box7d.display();
        box8d.display();
        box9d.display();
        box10d.display();
        box11d.display();
}
//Detach the bird from constraint
    function mouseReleased(){
        sling.fly();
    }
//Set the bird's position when mouse is dragged
    function mouseDragged(){
        Body.setPosition(bird[count].body,{x:mouseX,y:mouseY})
    }
//Create a new bird every time mouse is pressed
    function mousePressed(){
        count++
        bird[count]=new Bird(100,100)
        sling.attach();
    }