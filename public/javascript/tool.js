function Tool(type) {
	this.type = type;
}

Tool.prototype.toolResponder = function (ev, point) {
	this.type.createLine(ev, point);
};
