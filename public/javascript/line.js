function Line() {
	this.isActive = false;
	this.points;
	this.setActive = setActive;
	this.addPoint = addPoint;
}

function Line(isActive, startPoint) {
	this.setActive = setActive;
	this.addPoint = addPoint;	
	this.isActive = isActive;
	this.points = new Array(startPoint);
}

Line.prototype.setActive = function setActive(isActive) {
	this.isActive = isActive;
}

Line.prototype.addPoint = function addPoint(point) {
	this.points.push(point);
}
