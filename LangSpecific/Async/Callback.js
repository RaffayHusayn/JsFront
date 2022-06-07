let objectList = [
    {name: "Raffay", age : 25},
    {name: "Ayesha", age : 23}
]
function returnList(objList){
    setTimeout(()=>{
        objList.forEach(element => {
            let {name, age} = element;
            document.body.innerHTML += `<li>${name} and the age is ${age}</li>`;
        });
    }, 2000);
}
returnList(objectList);
// console.log(returnList(objectList));