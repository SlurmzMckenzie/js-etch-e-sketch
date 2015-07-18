
// Default variables
var grid = Math.pow(40,2);
var gridWidth = 40;

var rgba1 = 220;
var rgba2 = 225;
var rgba3 = 228;
var mode = "standard";
console.log(mode);


//draws new grid from prompt

function gridPrompt(v) {
	mode = v;
	console.log(mode);
	gridWidth = prompt("How many squares wide would you like your grid?");
	grid = Math.pow(gridWidth,2);
// if statement to check input from prompt and ensure it's not too large that it will crash browser
	if (gridWidth > 200) {
		alert("Thats a lot of squares, you'll regret it. \nEnter a smaller number.");
		gridPrompt();
	} else if (gridWidth == "") {
		alert("You didn't enter anything, try again.");
		gridPrompt();
	} else if (gridWidth ==null) {
		alert("You didn't enter anything, try again.");
		gridPrompt();
	}

}


/*function gridPrompt() {
	gridWidth = prompt("How many squares wide would you like your grid?");
	grid = Math.pow(gridWidth,2);
	
	newGrid();
}
*/
// creates DIV element inside container

function newGrid(v) {
	gridPrompt(v);
	killGrid();
	drawGrid();
}

/*
	If statement to check if the gridContainer DIV exists and if so destroy it
	if grid container exists destroy it
	if doesn't exist do nothing
*/
function killGrid(){
	console.time('remove exisiting grid');
	var gridContainer = document.getElementById('gridContainer')
	
	if (gridContainer != null) {
		gridContainer.remove();
		//$('#gridContainer').empty();
		//while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
		//gridContainer.innerHTML  ="";
	console.timeEnd('remove exisiting grid');
	}
}


function drawGrid() {
console.time('Drawing Grid');

//calculate width per grid square
	var blockWidth = 570/gridWidth+"px";
	var blockHeight = Math.ceil(400/gridWidth)+"px";

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
		if (mode == "standard") {
			gridDiv.addEventListener("mouseover", standard,false);
		} else {
			gridDiv.addEventListener("mouseover", modular,false);
		};
		// gridDiv.addEventListener("mouseover", function() {drawMode(mode);} ,false);
		i++;
	}
console.timeEnd('Drawing Grid');

}


//creates div on page load
document.addEventListener("DOMContentLoaded",drawGrid,false);



//This wrapper ensure that everything is run after the DOM is loaded
window.addEventListener("load",function(){

	//button listener event
	var newGridButton = document.getElementById('newGridButton');
	var modularButton = document.getElementById('modularButton');
	//console.log(n);
	newGridButton.addEventListener("click",function () {newGrid("standard")},false);
	modularButton.addEventListener("click",function () {newGrid("modular")},false);


//End of paged loaded wrapper
});

// function to change class on mouseover to darker colour
function standard() {
	this.classList.add("mouseOver");
}


function modular() {
	rgba1 = valBetween(rgba1+getRandomInt());
	rgba2 = valBetween(rgba2+getRandomInt());
	rgba3 = valBetween(rgba3+getRandomInt());
	var rgba = "rgba("+valBetween(rgba1)+","+valBetween(rgba2)+","+valBetween(rgba3)+", 1)";
	console.log(rgba);

	this.style.backgroundColor = rgba;
}

function getRandomInt() {
  return Math.round(Math.random() * (9 - -9 )) + -9;
}

function valBetween(v) {
    return (Math.min(255, Math.max(0, v)));
}  

/*function drawMode(mode) {
	if (mode == "standard") {
		standard();
	} else {
		modular();
	};
}*/