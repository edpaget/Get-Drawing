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
	var url = document.location.href + "/receiver"; 
	var update = new XMLHttpRequest();
	update.open("POST", url, true);
	update.setRequestHeader("Content-Type", "application/json");
	update.send(toolJSON);
};

Tool.prototype.updateImage = function () {
	var receive = new XMLHttpRequest();
	var url = document.location.href + "/sender/" + escape(this.lastUpdate);
	receive.open('GET', url, true);
	receive.setRequestHeader("Content-Type", "text/plain");
	receive.onreadystatechange = parseResponse;  
	receive.send();
	
	function parseResponse() {
		if (receive.readyState == 4 && receive.responseText != "[]") {
			var response = JSON.parse(receive.responseText);
			for (var i in response){
				response[i] = JSON.parse(response[i].attributes.json);
				var responseTool  = new window[response[i].type['name']](response[i].type.color);
				responseTool.responseDraw(response[i]);
			}
		} else {
			return;
		}
	}
	this.lastUpdate = new Date().toString();
};

Tool.prototype.historyTimeLapse = function () {
	var receive = new XMLHttpRequest(); 
	var url = document.location.href;
	url = url.substring(0, url.length-8) + "/sender/all";
	receive.open('GET', url, true);
	receive.setRequestHeader("Content-Type", "text/plain");
	receive.onreadystatechange = historyPlayback;
	receive.send();

	function historyPlayback() {
		if (receive.readyState == 4 && receive.responseText != "[]") {
			var response = JSON.parse(receive.responseText);
			timeLapse(0, response);		
		} else {
			return;
		}
	}
}

function timeLapse(i, response) {
	if (i < response.length) {
		response[i] = JSON.parse(response[i].attributes.json);
		var responseTool = new window[response[i].type['name']](response[i].type.color);
		responseTool.responseDraw(response[i]);
		setTimeout(function () {timeLapse(i + 1, response);}, 500);
	} else {
		return;
	}
}	
	 
