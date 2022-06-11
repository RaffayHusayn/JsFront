window.onload = function(){
let btnElement = document.getElementById("callAsync");
let objectList = [
    {name: "Raffay", age : 25},
    {name: "Ayesha", age : 23}
]
function returnList(){
    return setTimeout(()=>{
        let output = '';
        objectList.forEach(element => {
            let {name, age} = element;
            output += `<li>${name} and the age is ${age}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}

function addToList(newObj, callback){
    btnElement.addEventListener("click", ()=>{
        setTimeout(()=>{
            objectList.push(newObj);
            callback();
        }, 3000); 
    })
} 
let newObject = {name:"Nabia", age: 14};
addToList(newObject, returnList);
};