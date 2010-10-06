if(window.addEventListener) {
window.addEventListener('load', function () {

var canvas, context;

function init()  {
	canvas = document.getElementById("drawingArea");
 	context = canvas.getContext('2d');	
	canvas.addEventListener('mousedown', ev_handler, false);
	canvas.addEventListener('mousemove', ev_handler, false);
	canvas.addEventListener('mouseup', ev_handler, false);
	
}

function ev_handler(ev) {
	var x, y

	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	}
	else if (ev.offsetX || ev.offestX == 0) {
		x = ev.offsetX;
		y = ev.offsetY;
	}

	createLine(ev.type, new Point(x,y));

}

function createLine(type, point) {
	if (type == 'mousedown') {
		line = new Line(true, point);
		draw(line);
	} else if (type == 'mousemove') {
		line.addPoint(point);
		draw(line);
	} else if (type == 'mouseup') {
		line.addPoint(point);
		line.setActive(false);
		draw(line);
	}
}

function draw(line) {
	for(var i in line.points) {
		context.beginPath();
		context.arc(line.points[i].x, line.points[i].y, 10, 0, Math.PI*2, true);
		context.fill();
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

init();
context.beginPath();
context.arc(5,5,0,2*Math.PI, true);
context.fill();

}, false); }
