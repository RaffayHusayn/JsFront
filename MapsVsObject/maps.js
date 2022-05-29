let obj1 = {
    name: "Raffay",
    age: 25
};

let obj2 = {
    name: "Ayesha",
    age: 23,
    console(){
        console.log("this is the console method of obj2");
    }
};
console.log(obj1);
console.log(obj2);

// two ways to run functions that are inside the method
obj2.console();
obj2["console"]();
console["log"]("using console log like a stupid person");

let combinedMap = new Map();
combinedMap.set("first", obj1);
combinedMap.set("second", obj2);

console.log(combinedMap);
    
combinedMap.forEach((v, k) =>{
    console.log(k + " === "+ v.name);
});

for(let[k,v] of combinedMap){
    console.log(k+ " ::: " + v.name);
}
