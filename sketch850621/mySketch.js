var penguin;
var scene=0;
let snowflakes = [];
let bubbles = [];
function setup() {
	createCanvas(800, 800);
	background(168, 209, 255);
	penguin = new Penguin(200,700,10,0,0,0);
	penguinMom = new Penguin(650,700,10,1,95,235);
	
	penguinA = new Penguin(100,700,10,0,0,0);
	penguinAplus = new Penguin(200,700,10,1,95,235);		
	penguin.move(200);
}

function draw() {
	let from = color(168, 209, 255);
	let to = color(255, 0, 0);
	let interA = lerpColor(from, to,  map(frameCount,800,1200,0,1,true)   );
	//console.log(frameCount);
	                   //****SCENE1****
	background(interA);
	
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
	}else if (frameCount >300 && frameCount <= 500){
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
		//penguin mom
	penguinMom.display();
	penguinMom.move (650);
	penguinMom.tremble();
	
	//penguin moving toward her mom
	penguin.display();
	penguin.move(550);
	
		
	//tremble the penguin
	
	//penguin.tremble();
	


		              //****SCENE3****
}else if (frameCount >500 && frameCount<=700){
	//falling snow
	let t = frameCount / 60;
  for (let j = 0; j < random(5); j++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
	//snow on the ground
	drawSnow (0,0);
	drawSnow (150,10);
	drawSnow (300,-10);
	drawSnow (400,0);
	drawSnow (500,15);
	drawSnow (680,7);
	
	//penguin
	penguinA.display();
	penguinA.tremble();
	penguinAplus.display();
	penguinAplus.tremble();
	penguinA.move(250);
	penguinAplus.move(500);
	

	
		              //****SCENE4****
}else if(frameCount > 700 && frameCount <=800){
	//snow on the ground
	drawSnow (0,0);
	drawSnow (150,10);
	drawSnow (300,-10);
	drawSnow (400,0);
	drawSnow (500,15);
	drawSnow (680,7);
	
	penguinA.display();
	penguinA.tremble();
	penguinAplus.display();
	penguinAplus.tremble();

	//fire
	  for (let i = 0; i < 7; i++) {
    let b = new Bubble();
    bubbles.push(b); 
  }
  for (let i = bubbles.length-1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].show();
		
	penguinA.move(250,false);
	penguinAplus.move(490);
	}
	
}else if (frameCount >750 && frameCount<=1000){
	penguinA.display();
	penguinAplus.display();
	penguinA.move(250);
	penguinAplus.move(490);
//fire
	  for (let i = 0; i < 7; i++) {
    let b = new Bubble();
    bubbles.push(b); //push new items to the end of array
  }
  for (let i = bubbles.length-1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].show();
   
  }
}else{
//fire
	  for (let i = 0; i < 7; i++) {
    let b = new Bubble();
    bubbles.push(b);
  }
  for (let i = bubbles.length-1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].show();

}
}
	
}
//Penguin
function Penguin(xPos, yPos,distance,r_,g_,b_){
	this.x = xPos;
	this.y = yPos;
	this.dist = distance;
	this.targetX = 0;
	this.r = r_;
	this.g = g_;
	this.b = b_;
		

	
	this.display = function(){
		push();
		//control the speed of moving
		if (abs(this.targetX-this.x)>1){
		this.x = lerp(this.x,this.targetX,0.015);
		}
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
			this.x += random(-2,2);
			this.y = 700;
	}
	
	this.move = function(s){
   this.targetX = s;
			
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


class Bubble {
  
  constructor() {
    this.x = 350;
    this.y = 755;
    this.r = 30;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7;
    this.r -= 1;
  }
  
  show() {
    noStroke();
    fill(244, 81, 44, this.alpha);
    ellipse(this.x, this.y, this.r)
  }
  

	
	
}

//upgraded snowflake code
function snowflake() {
	//initiating coordinates 
  this.posX = 0; 
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5); //size of the snowflake
	//radius of the snow spiral
	
	//uniformly spread out snowflakes in area.. square root (random(200*200)), always positive and 
  this.radius = sqrt(random(pow(width / 2, 2)));
  this.update = function(time) {
		//x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;//updated angle, change over time
    this.posX = width / 2 + this.radius * sin(angle); //
		
		 // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5); //square root

		// delete snowflake if past end of screen
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