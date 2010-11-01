function Point() {
	this.x;
	this.y;
	this.setX = setX;
	this.setY = setY;
}

function Point(x,y) {
	this.x = x;
	this.y = y;
	this.setX = setX;
	this.setY = setY;
}

function setX(x) {
	this.x = x;
}

function setY(y) {
	this.y = y;
}