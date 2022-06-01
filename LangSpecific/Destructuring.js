let person = {
    fname: "Raffay",
    lname:"Syed"
};

/* Destructuring: When Object properties and variables have the same name*/
let {fname , lname} = person;
console.log(fname);
console.log(lname);


/* Destructuring: When Object properties and variables have the different name*/
let { fname:firstName, lname:lastName}= person;
console.log(firstName);
console.log(lastName);


/* Destructuring: When Object doesn't have all the properties that we want to set the variable*/
let{fname: firstName1 , lname:lastName1, middleName1 = "Hussain"} = person;
console.log(firstName1);
console.log(lastName1);
console.log(middleName1);


/* Destructuring: When the Object is nested */
let phone = {
    company : "google",
    specs : {
        ram : 6,
        processor : "SnapDragon"
    },
    price : 450
};

let {specs : { ram: phoneRam , processor : phoneProcessor}} = phone;
console.log(`Phone object desctructured : ${phoneRam} and ${phoneProcessor}`);

