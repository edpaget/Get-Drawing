function Brush(color) {
	this.name = "Brush";
	this.line = new Line();
	this.color = color;
	this.draw = draw;

	function draw() {
		for(var i in this.line.points) {
			context.drawImage(brush, this.line.points[i].x, this.line.points[i].y);
		}
	}
}

Brush.prototype.createLine = function (type, point) {
	 if (type == 'mousedown') {
		this.line = new Line(true, point);
		this.draw();
	} else if (type == 'mousemove' && this.line.isActive == true) {
		this.line.addPoint(point);
		this.draw();
	} else if (type == 'mouseup' && this.line.isActive == true) {
		this.line.setActive = false;
		this.line.addPoint(point);
		this.draw();
		tool = new Tool(new Brush());
	}
}

Brush.prototype.responseDraw = function (response) {
	this.line = response.type.line;
	this.draw();
};
