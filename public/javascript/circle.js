function Circle(color) {
	this.name = "Circle";
	this.center;
	this.radius;
	this.color = color;
	this.draw = draw;
	this.calcRadius = calcRadius;

	function draw() {
		context.beginPath();
		context.arc(this.center.x, this.center.y, this.radius,  0, Math.PI*2, true);
		context.closePath();
		context.fillStyle = this.color;
		context.fill();
	}
	
	function calcRadius(endPoint) {
		y = Math.pow((this.center.y - endPoint.y), 2);
		x = Math.pow((this.center.x - endPoint.x), 2);
		return Math.sqrt(y+x);
	}

}

Circle.prototype.createLine = function (type, point) {
	if (type == 'mousedown') {
		this.center = point;
	} else if (type == 'mouseup') {
		this.radius = this.calcRadius(point);
		this.draw();
	}
};

Circle.prototype.responseDraw = function (response) {
	this.center = response.type.center;
	this.radius = response.type.radius;
	this.draw();
};
