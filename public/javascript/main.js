var context, canvas, tool, brush;

if(window.addEventListener) {
window.addEventListener('load', function () {


function init()  {
	
	//get Window Size
	var width = document.documentElement.clientWidth - 20;

	//init Canvas
	canvas = document.getElementById("drawingArea");
 	context = canvas.getContext('2d');	
	canvas.addEventListener('mousedown', evHandler, false);
	canvas.addEventListener('mousemove', evHandler, false);
	canvas.addEventListener('mouseup', evHandler, false);

	//load background image
	var wall = document.getElementById('wall');
	context.drawImage(wall, 0, 0, 1000, 750);
	
	brush = document.getElementById('brush');

	//init Tools
	var toolDropDown = document.getElementById('Tools');
	toolDropDown.addEventListener('change', toolChange, false);
	tool = new Tool(new Pencil());

}

	

init();

}, false); }
