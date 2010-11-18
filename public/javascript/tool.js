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
	var url = "2/reciever"
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('POST', url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(toolJSON);
};
