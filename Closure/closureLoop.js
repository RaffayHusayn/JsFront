/*
example # 1 : Incorrect Closure Loop because there is no closure here and we will print 10 ten times
*/
console.log("Calling the incorrect Closure Loop");
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

/*
example # 2: Correct Closure Loop because inside function creates a closure with the execution environment of the outside function which contains 
the varible so this time we print 0 to 9 with 1 sec delay like intended
*/

function outside() {
    for (var i = 0; i < 10; i++) {
        function inside(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        inside(i);
    }
}
console.log("Calling the correct Closure Loop");
outside();
