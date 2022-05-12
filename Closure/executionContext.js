function func1(){
    let foo = "first function";
    console.log(foo);
}

function func2(){
    let foo = "second function";
    console.log(foo);
    console.log("Printing arguments in the function 2 :");
    console.log(arguments.length);
}

let foo = "global";
console.log(foo);
func1();
func2("argument1 ", "argument 2");
