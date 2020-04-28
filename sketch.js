//Name-Space Matter.js
    const Engine = Matter.Engine;
    const World= Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    const Body = Matter.Body;
    var engine, world;
//Create Variables for bird array (currently empty)
    var bird=[];

function setup(){
    //Create canvas of width 1200 and height 400.
        var canvas = createCanvas(1200,400);
    //Create engine and world.
        engine = Engine.create();
        world = engine.world;
    //Create first bird, filling the once empty array.
        bird = new Bird(100,100);
    //Constraint bird with a point.
        sling = new slingShot(bird.body,{x:200,y:50});
    //Create 3 platforms, on whic to place boxes.
        ground1 = new Ground(700,100,400,10)       
        ground2 = new Ground(850,350,600,10)
        ground3 = new Ground(300,250,300,10)
    //Create 47 boxes
        box1a = new Box(515,85,30,30);
        box1b = new Box(515,55,30,30);
        box1c = new Box(515,25,30,30); 
        
        box2a = new Box(545,85,30,30);
        box2b = new Box(545,55,30,30);
        box2c = new Box(545,25,30,30);
        
        box3a = new Box(575,85,30,30);
        box3b = new Box(575,55,30,30);
        box3c = new Box(575,25,30,30);

        box4a = new Box(605,85,30,30);
        box4b = new Box(605,55,30,30);
        box4c = new Box(605,25,30,30);

        box5a = new Box(635,85,30,30);
        box5b = new Box(635,55,30,30);
        box5c = new Box(635,25,30,30);

        box6a = new Box(665,85,30,30);
        box6b = new Box(665,55,30,30);
        box6c = new Box(665,25,30,30);

        box7a = new Box(695,85,30,30);
        box7b = new Box(695,55,30,30);
        box7c = new Box(695,25,30,30);

        box8a = new Box(725,85,30,30);
        box8b = new Box(725,55,30,30);
        box8c = new Box(725,25,30,30);

        box9a = new Box(755,85,30,30);
        box9b = new Box(755,55,30,30);
        box9c = new Box(755,25,30,30);

        box10a = new Box(785,85,30,30);
        box10b = new Box(785,55,30,30);
        box10c = new Box(785,25,30,30);

        box11a = new Box(815,85,30,30);
        box11b = new Box(815,55,30,30);
        box11c = new Box(815,25,30,30);

        box12a = new Box(845,85,30,30);
        box12b = new Box(845,55,30,30);
        box12c = new Box(845,25,30,30);

        box13a = new Box(875,85,30,30);
        box13b = new Box(875,55,30,30);
        box13c = new Box(875,25,30,30);

        box14a = new Box(565,320,30,30);
        box14b = new Box(565,295,30,30);
        box14c = new Box(565,265,30,30);

        box15a = new Box(595,320,30,30);
        box15b = new Box(595,295,30,30);
        box15c = new Box(595,265,30,30);

        box16a = new Box(625,320,30,30);
        box16b = new Box(625,295,30,30);
        box16c = new Box(625,265,30,30);

        box17a = new Box(655,320,30,30);
        box17b = new Box(655,295,30,30);
        box17c = new Box(655,265,30,30);

        box18b = new Box(685,295,30,30);
        box18a = new Box(685,320,30,30);
        box18c = new Box(685,265,30,30);

        box19a = new Box(715,320,30,30);
        box19b = new Box(715,295,30,30);
        box19c = new Box(715,265,30,30);

        box20a = new Box(745,320,30,30);
        box20b = new Box(745,295,30,30);
        box20c = new Box(745,265,30,30);

        box21a = new Box(775,320,30,30);
        box21b = new Box(775,295,30,30);
        box21c = new Box(775,265,30,30);

        box22a = new Box(805,320,30,30);
        box22b = new Box(805,295,30,30);
        box22c = new Box(805,265,30,30);

        box23a = new Box(835,320,30,30);
        box23b = new Box(835,295,30,30);
        box23c = new Box(835,265,30,30);

        box24a = new Box(865,320,30,30);
        box24b = new Box(865,295,30,30);
        box24c = new Box(865,265,30,30);

        box25a = new Box(895,320,30,30);
        box25b = new Box(895,295,30,30);
        box25c = new Box(895,265,30,30);

        box26a = new Box(925,320,30,30);
        box26b = new Box(925,295,30,30);
        box26c = new Box(925,265,30,30);

        box27a = new Box(955,320,30,30);
        box27b = new Box(955,295,30,30);
        box27c = new Box(955,265,30,30);

        box28a = new Box(985,320,30,30);
        box28b = new Box(985,295,30,30);
        box28c = new Box(985,265,30,30);

        box29a = new Box(1015,320,30,30);
        box29b = new Box(1015,295,30,30);
        box29c = new Box(1015,265,30,30);

        box30a = new Box(1045,320,30,30);
        box30b = new Box(1045,295,30,30);
        box30c = new Box(1045,265,30,30);

        box31a = new Box(1075,320,30,30);
        box31b = new Box(1075,295,30,30);
        box31c = new Box(1075,265,30,30);

        box32a = new Box(2005,320,30,30);
        box32b = new Box(2005,295,30,30);
        box32c = new Box(2005,265,30,30);

        box33a = new Box(2035,320,30,30);
        box33b = new Box(2035,295,30,30);
        box33c = new Box(2035,265,30,30);

        box34a = new Box(165,235,30,30);
        box34b = new Box(165,225,30,30);
        box34c = new Box(165,195,30,30);

        box35a = new Box(195,235,30,30);
        box35b = new Box(195,225,30,30);
        box35c = new Box(195,195,30,30);

        box36a = new Box(225,235,30,30);
        box36b = new Box(225,225,30,30);
        box36c = new Box(225,195,30,30);

        box37a = new Box(255,235,30,30);
        box37b = new Box(255,225,30,30);
        box37c = new Box(255,195,30,30);

        box38a = new Box(285,235,30,30);
        box38b = new Box(285,225,30,30);
        box38c = new Box(285,195,30,30);

        box39a = new Box(315,235,30,30);
        box39b = new Box(315,225,30,30);
        box39c = new Box(315,195,30,30);
    
        box40a = new Box(345,235,30,30);
        box40b = new Box(345,225,30,30);
        box40c = new Box(345,195,30,30);

        box41a = new Box(375,235,30,30);
        box41b = new Box(375,225,30,30);
        box41c = new Box(375,195,30,30);

        box42a = new Box(405,235,30,30);
        box42b = new Box(405,225,30,30);
        box42c = new Box(405,195,30,30);

        box43a = new Box(435,235,30,30);
        box43b = new Box(435,225,30,30);
        box43c = new Box(435,195,30,30);

        box44a = new Box(465,235,30,30);
        box44b = new Box(465,225,30,30);
        box44c = new Box(465,195,30,30);

        box45a = new Box(495,235,30,30);
        box45b = new Box(495,225,30,30);
        box45c = new Box(495,195,30,30);

        box46a = new Box(525,235,30,30);
        box46b = new Box(525,225,30,30);
        box46c = new Box(525,195,30,30);
    }
function draw(){
    //Draw a black background
        background("black");
    //Update the engine
        Engine.update(engine);
    //Write instruction text for user
        sling.display();
        strokeWeight(4);
        noStroke()
        textSize(30);
        text("Drag and Release to throw Box",95,25)
        text("If on Mobile, Drag and Release",95,50)
        text("This works like a catapult",95,100);
        text("The direction in which you drag, will be like pulling a rubberband",95,130)
        text("The box is on the rubberband. So it will be launched in the opposite direction",75,155)
        text("Created by Shreshth Narayan Singh",600,250)
    //Use a for loop to display the bird array

            bird.display();

    //Display the variables created from class
        noStroke()
        //Display the grounds
            ground1.display();
            ground2.display();
            ground3.display();   
        //Display the boxes
            box1a.display();
            box1b.display();
            box1c.display();
            box2a.display();
            box2b.display();
            box2c.display();
            box3a.display();
            box3b.display();
            box3c.display();
            box4a.display();
            box4b.display();
            box4c.display();
            box5a.display();
            box5b.display();
            box5c.display();
            box6a.display();
            box6b.display();
            box6c.display();
            box7a.display();
            box7b.display();
            box7c.display();
            box8a.display();
            box8b.display();
            box8c.display();
            box9a.display();
            box9b.display();
            box9c.display();
            box10a.display();
            box10b.display();
            box10c.display();
            box11a.display();
            box11b.display();
            box11c.display();
            box12a.display();
            box12b.display();
            box12c.display();
            box13a.display();
            box13b.display();
            box13c.display();
            box14a.display();
            box14b.display();
            box14c.display();
            box15a.display();
            box15b.display();
            box15c.display();
            box16a.display();
            box16b.display();
            box16c.display();
            box17a.display();
            box17b.display();
            box17c.display();
            box18a.display();
            box18b.display();
            box18c.display();
            box19a.display();
            box19b.display();
            box19c.display();
            box20a.display();
            box20b.display();
            box20c.display();
            box21a.display();
            box21b.display();
            box21c.display();
            box22a.display();
            box22b.display();
            box22c.display();
            box23a.display();
            box23b.display();
            box23c.display();
            box24a.display();
            box24b.display();
            box24c.display();
            box25a.display();
            box25b.display();
            box25c.display();
            box26a.display();
            box26b.display();
            box26c.display();
            box27a.display();
            box27b.display();
            box27c.display();
            box28a.display();
            box28b.display();
            box28c.display();
            box29a.display();
            box29b.display();
            box29c.display();
            box30a.display();
            box30b.display();
            box30c.display();
            box31a.display();
            box31b.display();
            box31c.display();
            box32a.display();
            box32b.display();
            box32c.display();
            box33a.display();
            box33b.display();
            box33c.display();
            box34a.display();
            box34b.display();
            box34c.display();
            box35a.display();
            box35b.display();
            box35c.display();
            box36a.display();
            box36b.display();
            box36c.display();
            box37a.display();
            box37b.display();
            box37c.display();
            box38a.display();
            box38b.display();
            box38c.display();
            box39a.display();
            box39b.display();
            box39c.display();
            box40a.display();
            box40b.display();
            box40c.display();
            box41a.display();
            box41b.display();
            box41c.display();
            box42a.display();
            box42b.display();
            box42c.display();
            box43a.display();
            box43b.display();
            box43c.display();
            box44a.display();
            box44b.display();
            box44c.display();
    }
//Detach the bird from constraint
    function mouseReleased(){
        sling.fly();
    }
//Set the bird's position when mouse is dragged
    function mouseDragged(){
        Body.setPosition(bird.body,{x:mouseX,y:mouseY})
        
    }
//Create a new bird every time mouse is pressed
    function mousePressed(){
        sling.attach();
    }