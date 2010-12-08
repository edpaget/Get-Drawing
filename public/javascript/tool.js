function Tool(type) {
	this.type = type;
	this.lastUpdate = "all";

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
	var url = document.location.href + "/reciever"; 
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('POST', url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.send(toolJSON);
};

Tool.prototype.updateImage = function () {
	var xmlhttp = new XMLHttpRequest();
	var url = "2/sender?time=" + this.lastUpdate;
	xmlhttp.open('GET', url, true);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlhttp.onreadystatechange = parseResponse;  
	xmlhttp.send();
	
	function parseResponse() {
		if (xmlhttp.readystate !=4) {
			return;
		} else {
			var responseTool = JSON.parse(xmlhttp.responseText);
			responseTool.type.draw();
		}
	}
	this.lastUpdate = Math.round(new Date().getTime() / 1000);
};


	 
