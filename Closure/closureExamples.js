// Example # 1: prints 12 
var a =12;
function example1(){
    console.log("Example # 1 : "+ a);
}
example1();


//Example # 2: prints 12 again

var b = 5;
function example2(){
    var b = 12;
    console.log("Example # 2 : "+ b);
}
example2();

//Example # 3: prints 12 again
var c = 10;
function example3() {
  var c = 12;
  return function innerFunc() {
    console.log("Example # 3 : " + c);
  };
};
var exampleVar3 = example3();
exampleVar3();

/* Example # 4: prints 12 again because the first anonymous funtion 
inside of the outermost function just changes the value of the function
that exists outside so that var doesn't exist in the first inner execution
context but it can still change/modify the value of the variable in the 
parent function*/

let d = 10;
var x = (function() {
  (function() {
    d = 12; // <<< look carefully at this line.
  })();
  return (function() {
    console.log("Example # 4 : "+ d);
  });
})();
x();