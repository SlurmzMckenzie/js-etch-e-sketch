
// Default Grid Size
var grid = Math.pow(20,2);
var gridWidth = 20;

//draws new grid from prompt
function gridPrompt() {
	gridWidth = prompt("How many squares wide would you like your grid?");
	grid = Math.pow(gridWidth,2);
	newGrid();
}

// creates DIV element inside container
function newGrid() {

// if statement to check input from prompt and ensure it's not too large that it will crash browser
	if (gridWidth > 200) {
		alert("Thats a lot of squares, you'll regret it. \nEnter a smaller number.");
		gridPrompt();
	};

/*
	If statement to check if the gridContainer DIV exists and if so destroy it
	
	if grid container exists destroy it

	if doesn't exist do nothing

*/
	var gridContainer = document.getElementById('gridContainer')

	if (gridContainer != null) {
		gridContainer.remove();
	};

//calculate width per grid square
	var blockWidth = 570/gridWidth+"px";
	var blockHeight = 400/gridWidth+"px";

// create a new gridContainer element
	var div = document.createElement('DIV');
	div.setAttribute("id", "gridContainer");
	document.getElementById('container').appendChild(div); 

// loop to create grid
	var i = 0;
	while ( i < grid) {
		var gridDiv = document.createElement('DIV');
		gridDiv.setAttribute("class", "gridsquare");
		gridDiv.style.width = blockWidth;
		gridDiv.style.height = blockHeight;
		document.getElementById('gridContainer').appendChild(gridDiv); 
		gridDiv.addEventListener("mouseover", mouseOver1);
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

// function to change class on mouseover to darker colour
function mouseOver1() {
	this.classList.add("mouseOver");
}


