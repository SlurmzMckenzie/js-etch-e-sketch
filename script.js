
var grid = 20;


//draws new grid from prompt
function newGrid() {
	grid = prompt("How many squares would you like in your grid?");
	defaultDiv();
}

//creates DIV element inside container
function defaultDiv() {
	var i = 0;
	while ( i < grid) {
		var div = document.createElement('DIV');
		document.getElementById('container').appendChild(div);
		i++;
	}

}

//creates div on page load
document.addEventListener("DOMContentLoaded",defaultDiv,false);



//This wrapper ensure that everything is run after the DOM is loaded
window.addEventListener("load",function(){

	//button listener event

	var n = document.getElementById('newGridButton');
	console.log(n);
	n.addEventListener("click",newGrid,false);


//End of paged loaded wrapper
});