const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;
 
var ground,groundImage;
var bgSound;

function preload(){
    groundImage=loadImage("krishna.jpg")
    bgSound=loadSound("gopal.mp3")
}

function setup(){
    createCanvas(560,600)

    ground = createSprite(280,310);
    ground.addImage(groundImage);
    ground.scale = 1.6;


    engine = Engine.create();
    world = engine.world;

    bgSound.play();

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1500), random(0,800)));
        }

    }

}

function draw(){
    Engine.update(engine);
    background("black");
     
    

    drawSprites();

    

    
     

    //displaying rain drops
    for(var i = 1; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    
}   

