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
        sling = new slingShot(bird[count].body,{x:200,y:50});
    //Create 3 platforms, on whic to place boxes.
        ground1 = new Ground(700,200,500,10)       
        ground2 = new Ground(220,350,550,10)
        
    //Create 47 boxes
        box1  = new Box(515,0,30,30);
        box2  = new Box(535,0,30,30);
        box3  = new Box(555,0,30,30);
        box4  = new Box(575,0,30,30);
        box5  = new Box(595,0,30,30);
        box6  = new Box(615,0,30,30);
        box7  = new Box(635,0,30,30);
        box8  = new Box(655,0,30,30);
        box9  = new Box(675,0,30,30);
        box10 = new Box(695,0,30,30);
        box11 = new Box(515,0,30,30);
        box12 = new Box(535,0,30,30);
        box13 = new Box(555,0,30,30);
        box14 = new Box(575,0,30,30);
        box15 = new Box(595,0,30,30);
        box16 = new Box(615,0,30,30);
        box17 = new Box(635,0,30,30);
        box18 = new Box(655,0,30,30);
        box19 = new Box(675,0,30,30);
        box20 = new Box(695,0,30,30);
        box21 = new Box(515,0,30,30);
        box22 = new Box(535,0,30,30);
        box23 = new Box(555,0,30,30);
        box24 = new Box(575,0,30,30);
        box25 = new Box(595,0,30,30);
        box26 = new Box(615,0,30,30);
        box27 = new Box(635,0,30,30);
        box28 = new Box(655,0,30,30);
        box29 = new Box(675,0,30,30);
        box30 = new Box(695,0,30,30);
        box32 = new Box(235,130,30,30);
        box33 = new Box(255,130,30,30);
        box31 = new Box(215,130,30,30);
        box34 = new Box(275,130,30,30);
        box35 = new Box(295,130,30,30);
        box36 = new Box(315,130,30,30);
        box37 = new Box(335,130,30,30);
        box38 = new Box(355,130,30,30);
        box39 = new Box(375,130,30,30);
        box40 = new Box(0,0,0,0);
        box41 = new Box(215,130,30,30);
        box42 = new Box(235,130,30,30);
        box43 = new Box(255,130,30,30);
        box44 = new Box(275,130,30,30);
        box45 = new Box(295,130,30,30);
        box46 = new Box(315,130,30,30);
        box47 = new Box(335,130,30,30);
        box48 = new Box(355,130,30,30);
        box49 = new Box(375,130,30,30);
        box50 = new Box(0,0,0,0);
        box51 = new Box(215,130,30,30);
        box52 = new Box(235,130,30,30);
        box53 = new Box(255,130,30,30);
        box54 = new Box(275,130,30,30);
        box55 = new Box(295,130,30,30);
        box56 = new Box(315,130,30,30);
        box57 = new Box(335,130,30,30);
        box58 = new Box(355,130,30,30);
        box59 = new Box(375,130,30,30);
        box60 = new Box(0,0,0,0);

}
function draw(){
    //Draw a black background
        background("black");
    //Update the engine
        Engine.update(engine);
    //Write instruction text for user
        strokeWeight(4);
        textSize(30);
        text("Drag and Release to throw Box",15,25)
        text("If on Mobile, Drag and Release",15,50)
        text("This works like a catapult",15,100);
        text("The direction in which you drag, will be like pulling a rubberband",15,130)
        text("The box is on the rubberband. So it will be launched in the opposite direction",15,155)
        text("Created by Shreshth Narayan Singh",600,350)
    //Use a for loop to display the bird array
        for(i=0;i<count;i++){
            bird[i].display();
            bird[count].display();
        }
    //Display the variables created from class
        sling.display();  
        noStroke()
        //Display the grounds
            ground1.display();
            ground2.display();   
        //Display the boxes
            box1.display(); 
            box2.display(); 
            box3.display(); 
            box4.display(); 
            box5.display(); 
            box6.display(); 
            box7.display(); 
            box8.display(); 
            box9.display(); 
            box10.display();
            box11.display();
            box12.display();
            box13.display();
            box14.display();
            box15.display();
            box16.display();
            box17.display();
            box18.display();
            box19.display();
            box20.display();
            box21.display();
            box22.display();
            box23.display();
            box24.display();
            box25.display();
            box26.display();
            box27.display();
            box28.display();
            box29.display();
            box30.display();
            box31.display();
            box32.display();
            box33.display();
            box34.display();
            box35.display();
            box36.display();
            box37.display();
            box38.display();
            box39.display();
            box40.display();
            box41.display();
            box42.display();
            box43.display();
            box44.display();
            box45.display();
            box46.display();
            box47.display();
            box48.display();
            box49.display();
            box50.display();
            box51.display();
            box52.display();
            box53.display();
            box54.display();
            box55.display();
            box56.display();
            box57.display();
            box58.display();
            box59.display();
            box60.display();
        
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