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

/*
 * Creating a child object which will inherit from the Employee Object
 */
function Manager(managerSecret, ...args) {
    Employee.apply(this, args);
    this.managerSecret= managerSecret;
}

const vj = new Manager("vijay",20000, "newsecretpassword");
console.log(vj);


