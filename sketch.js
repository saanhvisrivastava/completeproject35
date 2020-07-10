var peopleCount = 0;
var database; 
var bg;

function preload (){
   bg=loadImage("bg2.jpg");
}


function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,400);
  person = new Person();
  form = new Form();
  form.display();
  person.updateCount(peopleCount);

 
}

function draw (){
  background(bg);
  drawSprites();
}