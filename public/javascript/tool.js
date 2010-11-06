function Tool(type) {
	this.type = type;

}

Tool.prototype.toolResponder = function (ev, point) {
	this.type.createLine(ev, point);
	
	if (ev == 'mouseup') {
		this.toolToJSON();
	}
};

Tool.prototype.toolToJSON = function () {
	var toolJSON = JSON.stringify(tool);
	alert(toolJSON);
};
