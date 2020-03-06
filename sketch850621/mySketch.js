var penguin;
var scene=0;
let snowflakes = [];
let values = [];

function setup() {
	createCanvas(800, 800);
	background(168, 209, 255);
	penguin = new Penguin(200,700,10,0,0,0);
	penguinMom = new Penguin(650,700,10,1,95,235);
	
	penguinA = new Penguin(100,700,10,0,0,0);
	penguinAplus = new Penguin(200,700,10,1,95,235);		
	penguin.move(200,true)
}

function draw() {
	let from = color(168, 209, 255);
	let to = color(255, 0, 0);
	let interA = lerpColor(from, to,  map(frameCount,800,1200,0,1,true)   );
	console.log(frameCount);
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
	penguinMom.move (650,true);
	penguinMom.tremble();
	
	//penguin moving toward her mom
		/*Here I wonder why the penguin starts to move
		from a different location*   how do i move it with vectors? */
		
	penguin.display();
	penguin.move(550,false);
	
		
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
	penguinA.move(250,false);
	penguinAplus.move(500,false);
	
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
	fireplace();
	penguinA.move(250,false);
	penguinAplus.move(490,false);

	
}else if (frameCount >750 && frameCount<=1000){
	penguinA.display();
	penguinAplus.display();
	penguinA.move(250,false);
	penguinAplus.move(490,false);
	fireplace();
}else{
	fireplace();
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
	this.move = function(s,moveDirectly=false){

    this.targetX = s;
		if (moveDirectly){
			this.x = this.targetX;
		}
			
			
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

function fireplace(){
	fill(235,71,36);
	triangle(300,770,450,770,375,600);
	fill (265,223,92);
	triangle(350,755,400,755,375,650);
	fill(77,48,2);
	
	
	
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