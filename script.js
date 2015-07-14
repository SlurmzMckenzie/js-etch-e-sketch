
// Default Grid Size
var grid = Math.pow(16,2);


//draws new grid from prompt
function gridPrompt() {
	grid = Math.pow(prompt("How many squares wide would you like your grid?"),2);
	newGrid();
}

//creates DIV element inside container
function newGrid() {
/*
	If statement to check if the gridContainer DIV exists and if so destroy it
	
	if grid container exists destroy it

	if doesn't exist do nothing

*/
	if (grid > 1000000) {
		alert("Thats over 1 million squares, you'll regret it, enter a smaller number.");
		gridPrompt();
	};

	var gridContainer = document.getElementById('gridContainer')

	if (gridContainer != null) {
		gridContainer.remove();
	};

// create a new gridContainer element


	var div = document.createElement('DIV');
	div.setAttribute("id", "gridContainer");
	document.getElementById('container').appendChild(div); 


	var i = 0;
	while ( i < grid) {
		var gridDiv = document.createElement('DIV');
		gridDiv.setAttribute("class", "gridsquare");
		document.getElementById('gridContainer').appendChild(gridDiv); 
		i++;
	}

}

//creates div on page load
document.addEventListener("DOMContentLoaded",newGrid,false);



//This wrapper ensure that everything is run after the DOM is loaded
window.addEventListener("load",function(){

	//button listener event

	var n = document.getElementById('newGridButton');
	console.log(n);
	n.addEventListener("click",gridPrompt,false);


//End of paged loaded wrapper
});