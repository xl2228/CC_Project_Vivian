var penguin;
let snowflakes = [];
function setup() {
	createCanvas(800, 800);
	background(168, 209, 255);
	penguin = new Penguin();

}

function draw() {
	background(168, 209, 255);
	drawSnow (0,0);
	drawSnow (150,10);
	drawSnow (300,-10);
	drawSnow (400,0);
	drawSnow (500,15);
	drawSnow (680,7);
	penguin.display();
	coordinate();
	
	let t = frameCount / 60;
  for (let j = 0; j < random(2); j++) {
    snowflakes.push(new snowflake());
  }
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
	if (mouseX >= 160 && mouseX <=240 && mouseY >=635 && mouseY <=765){
	penguin.tremble(195,205,695,705);
	}
	
}
function coordinate(){
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
function Penguin(){
	this.x = 200;
	this.y = 700;
	this.dist = 10;
	
	this.display = function(){
	fill(0);
	noStroke();
	ellipse(this.x,this.y,80,130);
	fill(255);
	ellipse(this.x,this.y+8,60,90);
	ellipse(this.x-this.dist,this.y-4*this.dist,2*this.dist,2*this.dist);
	ellipse(this.x+9,this.y-4*this.dist,2*this.dist,2*this.dist);
	fill(0);
	ellipse(this.x-this.dist,this.y-4*this.dist,8,8);
	ellipse(this.x+9,this.y-4*this.dist,8,8);
	ellipse(this.x-4*this.dist,this.y-this.dist,25,13);
	ellipse(this.x+4*this.dist,this.y-this.dist,25,13);
	fill(255,192,112);
	triangle(this.x-8,this.y-30,this.x+7,this.y-30,this.x,this.y-20);
	ellipse(this.x-16,this.y+64,25,13);
	ellipse(this.x+16,this.y+64,25,13);
	
		
		}
		
	this.tremble = function(upX,downX,upY,downY){	
			this.x = random(upX,downX);
			this.y = random(upY,downY);
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