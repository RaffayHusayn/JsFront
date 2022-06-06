window.onload = function(){
let inputElement = document.getElementById("input-el");
let buttonElement = document.getElementById("input-btn");
let ulElement = document.getElementById("ul-el");
let storeditems = [];

buttonElement.addEventListener('click', ()=>{
       storeditems.push(inputElement.value); 
       let li = document.createElement("li");
       let a = document.createElement("a");
    //    a.setAttribute("href", "http://"+inputElement.value); 
    //    a.textContent = inputElement.value;
    //    a.target = "_blank";
       Object.assign(a,{
           href : "http://" + inputElement.value,
           textContent : inputElement.value,
           target : "_blank"
       });
       li.appendChild(a);
       ulElement.appendChild(li);
       inputElement.value = "";
       storeditems.forEach(item=>{
           console.log(item);
       })
    });

};
