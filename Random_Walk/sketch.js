var x;
var y;

function setup() {
	createCanvas(400, 400);
	x = 200;
	y = 200;
	//createCanvas(1680,1050);
	//x = 1680/2;
	//y = 1050/2;
	background(51);
}

function draw() {
	stroke(255);
	strokeWeight(2);
	//stroke(random(255), random(255), random(255));
	//strokeWeight(5);
	//++5 for the switch case
	point(x, y);

	var r = floor(random(4));

	switch (r) {
		case 0:
			x = x + 1;
			break;
		case 1:
			x = x - 1;
			break;
		case 2:
			y = y + 1;
			break;
		case 3:
			y = y - 1;
			break;
	}

}