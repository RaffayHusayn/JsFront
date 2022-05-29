/*
Creating a simple Object using new keyword so we don't have to do all the 
heavy lifting
*/

function Employee(name, salary){
    this.name = name; 
    this.salary = salary;
    this.durationOfEmployement = 0;
}

/*
 * Adding Methods to the Prototype property which is an ordinary Object
 * Associated with the Employee function
 */ 

Employee.prototype.incrementSalary = function(percentage){
    console.log(`the current salary of ${this.name} is ${this.salary}`);
    this.salary = this.salary*(1+(percentage/100));
    console.log(`the salary after increment of ${this.name} is ${this.salary}`);
};
Employee.prototype.incrementYear = function(){
    this.durationOfEmployement++;
}


/*Creating objects*/
const raffay = new Employee("Raffay", 66000);
const ayesha = new Employee("Ayesha", 55000);

console.log(raffay);
raffay.incrementSalary(20);
console.log(raffay);
