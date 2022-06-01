let person = {
    fname: "Raffay",
    lname:"Syed"
};

/* ======= #1 Object Destructuring: When Object properties and variables have the same name =============*/
let {fname , lname} = person;
console.log(fname);
console.log(lname);


/* ======= #2 Object Destructuring: When Object properties and variables have the different name ============*/
let { fname:firstName, lname:lastName}= person;
console.log(firstName);
console.log(lastName);


/* ======= #3 Object Destructuring: When Object doesn't have all the properties that we want to set the variable ======= */
let{fname: firstName1 , lname:lastName1, middleName1 = "Hussain"} = person;
console.log(firstName1);
console.log(lastName1);
console.log(middleName1);


/* ======= #4 Object Destructuring: When the Object is nested ==============*/
let phone = {
    company : "google",
    specs : {
        ram : 6,
        processor : "SnapDragon"
    },
    price : 450
};

let {specs : { ram: phoneRam , processor : phoneProcessor}, price:phonePrice} = phone;
console.log(`Phone object desctructured : ${phoneRam} and ${phoneProcessor} with price ${phonePrice}`);

/* ======= #5 Object Destructuring: You can destructure an function invokation ==============*/
function Dog(breed, name, age){
    this.breed = breed;
    this.name = name;
    this.age = age;
    return this;
}

let {breed, name, age} = Dog("german shepherd" , "bullet" , 4);// no need to use new keyword here JS will take care of it
console.log(`Destructing the return object from a constructor function => breed : ${breed}, name : ${name}, age : ${age}`);


/* ======= #6 Object Destructuring: Function argument ==============*/
function sellPhones({company, specs: {ram, processor} , price}, seller){
    console.log(`The seller ${seller} is selling his phone : company = ${company} | specs = ram ${ram} | processor = ${processor} | price = ${price}`);
};

sellPhones(phone, "Raffay");


/* ======= #7 Array Destructuring ==============*/
let personArray = ["raffay" , 25, "NED"];
let[personName, personAge, personCollege] = personArray;
console.log(`Destructuring the Array=> name : ${personName} , age:${personAge}, college:${personCollege}`);


/* ======= #8 Array Destructuring : String spliting ==============*/
let personString = "Raffay,Syed,this is the string";
let[firstnameString, lastnameString, messageString] = personString.split(",");
console.log(`Destructuring the String after spliting it=> First Name: ${firstnameString} , Last Name: ${lastnameString}, Message: ${messageString}`);


