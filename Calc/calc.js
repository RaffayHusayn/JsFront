var tempString = "" ;
var operatorFlag = 0;
function operation(operator){
    operatorFlag++;
    console.log("operatorFlag = "+operatorFlag);

}

function numPressed(num){
    if(operatorFlag === 1){
        tempString = "";
        document.getElementById("numtext").value = tempString;
        tempString +=num;
        document.getElementById("numtext").value = tempString;

    }else{
    tempString += num;
    document.getElementById("numtext").value = tempString;

    }

}