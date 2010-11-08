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
	if (this.type.name == "Brush") {
		this.type.brush = null;
	}	
	var toolJSON = JSON.stringify(this);
	alert(toolJSON);

};
