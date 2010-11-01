if(window.addEventListener) {
window.addEventListener('load', function () {

var canvas, context, tool;

function init()  {
	
	//get Window Size
	var width = document.documentElement.clientWidth - 20;

	//init Canvas
	canvas = document.getElementById("drawingArea");
 	context = canvas.getContext('2d');	
	canvas.addEventListener('mousedown', evHandler, false);
	canvas.addEventListener('mousemove', evHandler, false);
	canvas.addEventListener('mouseup', evHandler, false);
	
	//resize Canvas
	canvas.width = width;
	canvas.height = .75*width;

	//load background image
	var wall = document.getElementById('wall');
	context.drawImage(wall, 0, 0, width, (.75*width));

	//init Tools
	var toolDropDown = document.getElementById('Tools');
	toolDroopDown.addEventListener('change', toolChange, false);

}

function toolChange(ev) {
	

}

function evHandler(ev) {
	var x, y
	
	//Firefox Handler
	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	}
	//Opera and Webkit Handler
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
	} else if (type == 'mousemove' && line.isActive == true) {
		line.addPoint(point);
		draw(line);
	} else if (type == 'mouseup' && line.isActive == true) {
		line.addPoint(point);
		line.setActive(false);
		draw(line);
	}
}

function draw(line) {
	context.beginPath();
	context.moveTo(line.points[0].x, line.points[0].y);
	for(var i in line.points) {
		context.lineTo(line.points[i].x, line.points[i].y);
	}
//	context.closePath();
	context.stroke();
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
	this.setX = setX;
	this.setY = setY;
}

function setX(x) {
	this.x = x;
}

function setY(y) {
	this.y = y;
}

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

function setActive(isActive) {
	this.isActive = isActive;
}

function addPoint(point) {
	this.points.push(point);
}

function Tool() {
	

init();

}, false); }
