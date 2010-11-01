fuction Tool(type) {
	this.type = type;
	this.toolResponder = toolResponder;
}

Tool.prototype.toolResponder = function (ev, point) {
	this.type.createLine(ev, point);
}
