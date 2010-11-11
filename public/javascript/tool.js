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
	var url = "reciever"
	xmlHttp.open('POST', url, true);
	xmlHttp.onreadystatechange = updatePage;
	xmlHttp.setRequest("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(toolJSON);
};
