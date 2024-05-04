const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage, towerImage, cannonImage, cannonBase;
var ground, boat, tower, cannon, cannonball;
var balls=[]

function preload (){
  backgroundImage=loadImage('./assets/background.gif');
  towerImage=loadImage('./assets/tower.png');
  

}

function setup(){
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  var options ={
    isStatic:true
  }

  ground= Bodies.rectangle(0, height - 1, width * 2, 1,options);
  World.add(world,ground)

  tower= Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower)

  cannon = new Cannon(180, 110, 100, 50, angle);

  cannonBall = new Cannonball(cannon.x,cannon.y);
  
  
}



function draw(){
  image (backgroundImage,0,0,width,height)
  Engine.update(engine)

  
  push();
  translate(tower.position.x, tower.position.y);
  rotate(tower.angle);
  imageMode(CENTER);
  image(towerImage, 0, 0, 160, 310);
  pop();

  cannon.display()
  cannonBall.display()

 

  drawSprites();
  }

  function keyPressed(){
    if (keyCode===DOWN_ARROW){
      var cannonBall = new CannonBall(cannon.x, cannon.y);
      cannonBall.trajectory = [];
      Matter.Body.setAngle(cannonBall.body, cannon.angle);
      balls.push(cannonBall);
    }
  }
 
  function showCannonBall(){
if(ball){
  ball.display()
}
  }

  function keyReleased(){
    if (keyCode === DOWN_ARROW) {
      balls[balls.length - 1].shoot();
    }
  }