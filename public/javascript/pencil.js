function Pencil(color) {
	this.createLine = createLine;
	this.draw = draw;
	this.color = color;
	this.line = new Line();

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
	context.stroke();
}

}	
