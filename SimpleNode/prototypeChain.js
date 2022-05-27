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