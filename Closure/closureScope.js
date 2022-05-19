/*
=============================================================================================
        # 1 : incrementing the variable from the global scope
=============================================================================================
*/
console.log("+++++++++++++++++++++++++++++++++++++++++++");

let globalVariable = 0;

function outside1(){
    function inside1(){
        globalVariable++;
        console.log(`Global Variable : ${globalVariable}`);
    }
    return inside1;
}

let counterGlobal1= outside1();
let counterGlobal2 = outside1();
counterGlobal1();
counterGlobal1();
counterGlobal2();
counterGlobal2();

/*
=============================================================================================
        # 2 : incrementing the variable from the outside function scope
=============================================================================================
*/

console.log("+++++++++++++++++++++++++++++++++++++++++++");

function outside2(){
    let outsideVariable = 0;
    function inside2(){
        outsideVariable++;
        console.log(`Outside Variable : ${outsideVariable}`);
    }
    return inside2;
}

let counterOutside1= outside2();
let counterOutside2 = outside2();
counterOutside1();
counterOutside1();
counterOutside2();
counterOutside2();

/*
=============================================================================================
        # 3 : incrementing the variable from the inside function scope
=============================================================================================
*/
console.log("+++++++++++++++++++++++++++++++++++++++++++");

function outside3(){
    function inside3(){
        let insideVariable = 0;
        insideVariable++;
        console.log(`Inside Variable : ${insideVariable}`);
    }
    return inside3;
}

let counterInside1 = outside3();
let counterInside2 = outside3();
counterInside1();
counterInside1();
counterInside2();
counterInside2();