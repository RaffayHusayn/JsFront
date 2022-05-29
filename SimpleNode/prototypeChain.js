let functionStoreEmployee ={
    species : "Homosapiens",
    eat(){
        console.log("human is eating");
    }
};

function Employee(name, id){
    let newEmp = Object.create(functionStoreEmployee);
    newEmp.name = name;
    newEmp.id = id;
    return newEmp;
}

const raffay = new Employee("Raffay", 41);
raffay.__proto__.eat();
console.log(functionStoreEmployee);


function Website(protocol){
    this.protocol = protocol;
    this.url = protocol + "://somewebsite.com";
    this.printurl = function(){
        console.log(this.url);
    };
};

Website.prototype.printProtocol = function(){
    console.log(this.protocol);
}

const unprotected = new Website("http");
const protected = new Website("https");

console.log(unprotected);
console.log(protected);
console.log("printing the protocol which is a function described using prototype property of the constructor function");
unprotected.printProtocol();
protected.printProtocol();
