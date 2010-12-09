var context, canvas, tool, brush;

if(window.addEventListener) {
window.addEventListener('load', function () {


function init()  {
	
	//get Window Size
	var width = document.documentElement.clientWidth - 20;

	//init Canvas
	canvas = document.getElementById("drawingArea");
 	context = canvas.getContext('2d');	
	context.font = "18pt Helvetica";

	//load background image
	var wall = document.getElementById('wall');
	context.drawImage(wall, 0, 0, 1000, 750);
	
	brush = document.getElementById('brush');

	tool = new Tool(new Pencil('black'));
}

	

init();

tool.historyTimeLapse();

}, false); }
