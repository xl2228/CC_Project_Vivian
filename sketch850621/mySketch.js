var penguin;
var scene=0;
let snowflakes = [];

function setup() {
	createCanvas(800, 800);
	background(168, 209, 255);
	penguin = new Penguin(200,700,10,0,0,0);
	penguinMom = new Penguin(650,700,10,1,95,235);
	
	penguinA = new Penguin(200,700,10,0,0,0);
	penguinAplus = new Penguin(650,700,10,1,95,235);		
}

function draw() {
	console.log(frameCount);
	                   //****SCENE1****
	background(168, 209, 255);
	noStroke();
	if (frameCount <=300){
	frameRate (40);
	//snow on the ground
	drawSnow (0,0);
	drawSnow (150,10);
	drawSnow (300,-10);
	drawSnow (400,0);
	drawSnow (500,15);
	drawSnow (680,7);
		
	//show the penguin
	penguin.display();
	
	//coordinate();
	
	//falling snowflake
	let t = frameCount / 60;
  for (let j = 0; j < random(5); j++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
	
	//tremble the penguin
	penguin.tremble();
		
		
		           //****SCENE2****
	}else if (frameCount >300 && frameCount <= 700){
	//snow on the ground
	drawSnow (0,0);
	drawSnow (150,10);
	drawSnow (300,-10);
	drawSnow (400,0);
	drawSnow (500,15);
	drawSnow (680,7);
	
	//falling snowflake
	let t = frameCount / 60;
  for (let j = 0; j < random(5); j++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
	
	//penguin moving toward her mom
	let s= frameCount*0.8;
	penguin.display(s);
	
	penguin.move(s);

	
	//tremble the penguin
	penguin.tremble();
	
	//penguin mom
	penguinMom.display();
             	//****SCENE3****
}else if (frameCount >700 && frameCount<=1100){
	penguinA.display();
	penguinAplus.display();
}
	
	
}
/*function coordinate(){
	stroke (255);
  strokeWeight (1);
  line (0, mouseY, width, mouseY);
  line (mouseX, 0, mouseX, height);
}
function mousePressed(){
	print("x is: ");
  print(mouseX);
  print ("y is: ");
  print(mouseY);
}
*/

//Penguin
function Penguin(xPos, yPos,distance,r_,g_,b_){
	this.x = xPos;
	this.y = yPos;
	this.dist = distance;
	this.r = r_;
	this.g = g_;
	this.b = b_;
	
	this.display = function(){
	push();
	fill(this.r,this.g,this.b);
	noStroke();
	//body and hands
	ellipse(this.x,this.y,8*this.dist,13*this.dist);
	ellipse(this.x-4*this.dist,this.y-this.dist,25,13);
	ellipse(this.x+4*this.dist,this.y-this.dist,25,13);
	fill(255);
	//belly
	ellipse(this.x,this.y+8,6*this.dist,9*this.dist);
	//white of the eye
	ellipse(this.x-this.dist,this.y-4*this.dist,2*this.dist,2*this.dist);
	ellipse(this.x+9,this.y-4*this.dist,2*this.dist,2*this.dist);
	fill(0);
	ellipse(this.x-this.dist,this.y-4*this.dist,8,8);
	ellipse(this.x+9,this.y-4*this.dist,8,8);
	
	fill(255,192,112);
	triangle(this.x-8,this.y-30,this.x+7,this.y-30,this.x,this.y-20);
	ellipse(this.x-16,this.y+64,25,13);
	ellipse(this.x+16,this.y+64,25,13);
	pop();
		
		}
		
	this.tremble = function(){	
			this.x = random(this.x-2,this.x+2);
			this.y = random(this.y-2,this.y+2);
	}
	this.move = function(s){
			this.x = s;
			this.y = 700;
			
	}
}
function drawSnow(snowX,snowY){
	push();
	translate(snowX,snowY);
	fill(255);
	noStroke();
	ellipse(90,780,200,110);
	pop();
}
function Fireplace(){
	
	
	
}

//snowflake code from the example https://p5js.org/examples/simulate-snowflakes.html
function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };
  this.display = function() {
    fill(255);
    ellipse(this.posX, this.posY, this.size);
  };
	
	
}