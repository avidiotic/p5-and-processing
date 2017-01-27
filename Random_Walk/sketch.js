var x;
var y;

function setup() {
	createCanvas(400,400);
	x = 200;
	y = 200;
	background(51);
}

function draw() {
  	stroke(random(255),random(255),random(255));
  	strokeWeight(5);
  	point(x,y);

  	var r = floor(random(4));

  	switch(r) {
  		case 0:
  			x = x + 5;
  			break;
  		case 1:
  			x = x - 5;
  			break;
  		case 2:
  			y = y + 5;
  			break;
  		case 3:
  			y = y - 5;
  			break;
  	}

}