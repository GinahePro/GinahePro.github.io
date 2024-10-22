let monImage;
let monSon;
let delay;

function setup() {
  createCanvas(400, 400);
  monImage = loadImage("assets/I_Know_What_You_Are.jpg");
  //frameRate(120)
  monSon = loadSound("assets/pew_pew.mp3");
  delay = new p5.Delay();
}

function draw() {
  background(220);

  image(monImage, random(mouseX, mouseX), random(mouseY-2, mouseY+2), 150, 150);
}

function mousePressed(){
  
  monSon.rate(random(0.5, 2))
  
  //let playbackRate = map(mouseY, 0.1, height, 2, 0);
  //playbackRate = constrain() //... a finir
  
  delay.process(monSon, 0.12, 0.7, 2300);
  monSon.play();
}