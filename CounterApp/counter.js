var counter = 0;
var values = [];
function clicked(){
	document.getElementById("counter").textContent = ++counter;
}
function save(){
	values.push(counter);
	document.getElementById("save-el").textContent ="Saved : " +values.join(" - ");
	counter = 0;
	document.getElementById("counter").textContent = 0;

}

