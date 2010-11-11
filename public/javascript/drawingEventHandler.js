function evHandler(ev) {
	var x, y
	
	//Firefox Handler
	if (ev.layerX || ev.layerX == 0) {
		x = ev.layerX;
		y = ev.layerY;
	}
	//Opera and Webkit Handler
	else if (ev.offsetX || ev.offestX == 0) {
		x = ev.offsetX;
		y = ev.offsetY;
	}

	tool.toolResponder(ev.type, new Point(x,y));

}

function toolChange(ev) {
	var toolName = window[this['value']];
	var color = getCurrentColor();
	if (typeof(toolName) === 'function') {
		tool = new Tool(new toolName(color));
	}
}

function colorChange(ev) {
	var color = this['value'];
	tool.type.color = color;
	
}

function getCurrentColor() {
	var colorDropDown = document.getElementById('Color');
	return colorDropDown.value;
}


