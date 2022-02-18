var counter = 0;
var values = [];
function clicked(){
	document.getElementById("counter").innerText = ++counter;
}
function save(){
	values.push(counter);
	document.getElementById("save-el").innerText = values;
}

