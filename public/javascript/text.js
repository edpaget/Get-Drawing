function Text(color) {
	this.name = "Text"
	this.buffer; 
	this.draw = draw;
	this.point = new Point();
	this.color = color;

	function draw() {
		context.fillStyle = this.color;
		context.fillText(this.buffer, this.point.x, this. point.y);
	}
}

Text.prototype.createLine = function (type, point) {
	if (type == 'mouseup') {
		this.point = point;
		this.buffer = prompt("Text", "Type What You Want");
		this.draw();
	} 
};

Text.prototype.responseDraw = function (response) {
	this.point = response.type.point;
	this.buffer = response.type.buffer;
	this.draw();
};
		
