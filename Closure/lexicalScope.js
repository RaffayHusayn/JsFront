for(var i = 0 ; i < 3 ; i++){
    const log = ()=>{
        console.log(i);
    }
    setTimeout(log, 1000);
}

function outerFunc(){
    let outerVariable = "outervariable";
    function innerFunc(){
        console.log(outerVariable);
    }
    innerFunc();
}

console.log("Calling outer function which defines and call inner function");
outerFunc();