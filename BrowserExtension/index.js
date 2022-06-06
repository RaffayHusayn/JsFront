window.onload = function(){
let inputElement = document.getElementById("input-el");
let buttonElement = document.getElementById("input-btn");
let ulElement = document.getElementById("ul-el");
let storeditems = [];

buttonElement.addEventListener('click', ()=>{
       storeditems.push(inputElement.value); 
       let liElement = document.createElement("li");
       let aElement = document.createElement("a");
    //    a.setAttribute("href", "http://"+inputElement.value); 
    //    a.textContent = inputElement.value;
    //    a.target = "_blank";
       Object.assign(aElement,{
           href : "http://" + inputElement.value,
           textContent : inputElement.value,
           target : "_blank"
       });
       liElement.appendChild(aElement);
       ulElement.appendChild(liElement);
       inputElement.value = "";
       storeditems.forEach(item=>{
           console.log(item);
       })
    });

inputElement.addEventListener("keyup",(event)=>{
    event.preventDefault();
    if(event.key==="Enter"){
        buttonElement.click();
    }


})

};
