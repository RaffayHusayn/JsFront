alert("code is starting");
console.log("This prints 3 everytime because we are using Var which creates a variable and hoist it in the global scope");
// for(var i = 0 ; i < 3 ; i++){
//     const log = ()=>{
//         console.log(i);
//     }
//     setTimeout(log, i*2000);
// }


console.log("This print 1 to 3 because this time we are using let which creates a variable whose scope is bounded by the for braces");
for(let i =0 ; i<3 ; i++){
    const log=()=>{
        console.log(i);
    }
    setTimeout(log, i*1000);
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


let nameArray = ["raffay", "ayesha", "nabia"];
nameArray.forEach(name=>{
    if(name.startsWith("r")){
        console.log(name);
    }
});