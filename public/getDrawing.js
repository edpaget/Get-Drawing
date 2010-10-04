function init()  {
	var canvas = document.getElementById("drawingArea");
	canvas.addEventListener('onmousedown', ev_handler, false);
	canvas.addEventListener('onmousemove', ev_handler, false);
	canvas.addEventListener('onmouseup', ev_handler, flase);
	
}

function ev_handler() {
	var x, y

	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	} else if (ev.offsetX || ev.offestX == 0 {
		x = ev.offsetX;
		y = ev.offsetY;
	}

	createLine(ev.type, new Point(x,y));

}

function createLine(type, point) {
	if (type == 'onmousedown') {
		line = new Line(true, point);
		draw(line);
	} else if (type == 'onmousemove') {
		line.addPoint(point);
		draw(line);
	} else if (type == 'onmouseup') {
		line.addPoint(point);
		line.setActive(false);
		draw(line);
	}
}

function draw(line) {
	for(var i in line.points) {
		canvas.beginPath();
		canvas.arc(line.points[i].x, line.points[i].y, 10, 0, Math.PI*2, true);
		canvas.closePath();
		canvas.fill();
	}
}	

function Point() {
	this.x;
	this.y;
	this.setX = setX;
	this.setY = setY;
}

function Point(x,y) {
	this.x = x;
	this.y = y;
}

function setX(x) {
	this.x = x;
}

function setY(y) {
	this.y = y;
}

function Line() {
	this.isActive;
	this.points;
	this.setActive = setActive;
	this.addPoint = addPoint;
}

function Line(isActive, startPoint) {
	this.isActive = isActive;
	this.points = new Array(startPoint);
}

function setActive(isActive) {
	this.isActive = isActive;
}

function addPoint(Point) {
	this.addPoint.push(Point);
}

