const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var dr_img;
var engine, world;
var drops = [];
var rand;
var text,text_img;
var home,home_img;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(500,650);
    umbrella = new Umbrella(200,400);
    //creating drops
    if(frameCount % 150 === 0){
        for(var i=0; i<100; i++){
            drops.push(new createDrop(random(0,1100), random(0,1100)));
           
        }
    }
    
}

function draw(){
  //if(keyIsDown(LEFT_ARROW)){
    //umbrella.velocityX=-3;
 // }

    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = 0.3;
    }

    if(frameCount%90===0){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<100; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   