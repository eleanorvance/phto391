var x=0;
var y=0;
var speed=2;
function preload(){
  img = loadImage('data/long_image_transparent.png');
  frame = loadImage('data/hand_mirror_frame_resize_text.png');
  mirror = loadImage('data/mirror_glass.png');
  
}

function setup() {
  
  createCanvas(893,600);

}


function draw() {
  background(255);
  imageMode(CENTER);
  
  image(mirror,width/2,height/2);

  
push();  
  translate(x,y);
  
  imageMode(CORNER);
  image(img,0,0);
  if(dist(mouseX,mouseY,524,520)<50){
  x=constrain(x+speed,-6100,0);
}
if(dist(mouseX,mouseY,737,520)<50){
  x=constrain(x-speed,-6100,0);
}

//MOUSE CONTROLS
  //if(mouseX>width*.75){
  //  x=constrain(x-speed,-5050,0);
  //}
  //if(mouseX<width*.25){
  //  x=constrain(x+speed,-5050,0);
  //}

//ARROW KEYS
if(keyIsPressed && keyCode===RIGHT_ARROW){
    x=constrain(x-speed,-6100,0);
  }
  if(keyIsPressed && keyCode===LEFT_ARROW){
    x=constrain(x+speed,-6100,0)
  }

pop();

  image(frame,width/2,height/2);


}
