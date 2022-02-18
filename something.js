var counter = 0;
var values = [];
function clicked(){
	document.getElementById("counter").innerText = ++counter;
}
function save(){
	values.push(counter);

	for(var i = 0 ; i < values.length;i++){
		console.log(values[i] + "-");
	}
}

