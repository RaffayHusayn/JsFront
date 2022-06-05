window.onload = function(){
let inputElement = document.getElementById("input-el");
let buttonElement = document.getElementById("input-btn");
let ulElement = document.getElementById("ul-el");
let storeditems = [];

buttonElement.addEventListener('click', ()=>{
       storeditems.push(inputElement.value); 
       let li = document.createElement("li");
       li.appendChild(document.createTextNode(inputElement.value)); 
       ulElement.appendChild(li);
       inputElement.value = "";
       storeditems.forEach(item=>{
           console.log(item);
       })
    });

};
