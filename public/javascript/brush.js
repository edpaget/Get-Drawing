function Brush() {
	this.line = new Line();
	this.draw = draw;
	this.brush = document.getElementById("brush");

	function draw() {
		for(var i in this.line.points) {
			context.drawImage(this.brush, this.line.points[i].x, this.line.points[i].y);
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
