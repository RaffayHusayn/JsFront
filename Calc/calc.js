var tempString = "" ;
var result = "";
function operation(operator){
    operatorFlag++;
    console.log("operatorFlag = "+operatorFlag);

}

function numPressed(num){
    tempString += num;
    document.getElementById("numtext").value = tempString;


}

function calculate(){
    tempString = eval(tempString);
    document.getElementById("numtext").value = tempString;
}