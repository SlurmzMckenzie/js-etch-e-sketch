
function defaultDiv() {

var div = document.createElement('DIV');

document.getElementById('container').appendChild(div);

}

document.addEventListener("DOMContentLoaded",defaultDiv,false);



//console log to check if the event listener was done correctly
//document.addEventListener("DOMContentLoaded", function(){console.log('I loaded from start')}, false);

