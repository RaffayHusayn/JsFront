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

function addToList(newObj){
    let myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let error = true;
            if(newObj != null){
                error = false;
            }
            objectList.push(newObj);
            if(!error){
                resolve();
            }else{
                reject("Error: Something went wrong");
            }

        console.log("inside of the settimeout in the addtolist function")
        }, 3000);
        console.log("outside of the settime out in the addtolist function")
    });
    return myPromise;
}
console.log("outside of all the functions");

let newObject = {name:"Nabia", age: 14};
addToList(newObject)
.then(returnList)
.catch(err => console.log(err)); 
