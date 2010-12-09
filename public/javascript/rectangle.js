function Rectangle(color) {
	this.name = "Rectangle";
	this.color = color;
	this.startPoint;
	this.endPoint;
	this.height;
	this.width;

	this.draw = draw;
	this.calcHeight = calcHeight;
	this.calcWidth = calcWidth;
 
	function draw() {
		context.beginPath();
		context.rect(this.startPoint.x, this.startPoint.y, this.width, this.height);
		context.closePath();
		context.fillStyle = this.color;
		context.fill();
	}

	function calcHeight() {
		return -(this.startPoint.y - this.endPoint.y);
	}
	
	function calcWidth() {
		return -(this.startPoint.x - this.endPoint.x);
	}

}

Rectangle.prototype.createLine = function (type, point) {
	if (type == 'mousedown') {
		this.startPoint = point;
	} else if (type == 'mouseup') {
		this.endPoint = point
		this.height = this.calcHeight();
		this.width = this.calcWidth();
		this.draw();
	}
};

Rectangle.prototype.responseDraw = function(response) {
	this.height = response.type.height;
	this.width = response.type.width;
	this.startPoint = response.type.startPoint;
	this.draw();
};
