function Pencil(color) {
	this.name = "Pencil";
	this.draw = draw;
	this.color = color;
	this.line = new Line();

	function draw() {
		context.beginPath();
		context.moveTo(this.line.points[0].x, this.line.points[0].y);
		for(var i in this.line.points) {
			context.lineTo(this.line.points[i].x, this.line.points[i].y);
		}
		context.strokeStyle = this.color;
		context.stroke();
	}

}

Pencil.prototype.createLine = function (type, point) {
	if (type == 'mousedown') {
		this.line = new Line(true, point);
		this.draw();
	} else if (type == 'mousemove' && this.line.isActive == true) {
		this.line.addPoint(point);
		this.draw();
	} else if (type == 'mouseup' && this.line.isActive == true) {
		this.line.addPoint(point);
		this.line.setActive(false);
		this.draw();
	}
};



















