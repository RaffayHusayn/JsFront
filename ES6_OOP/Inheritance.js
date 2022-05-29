
class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    };
    incrementSalary(percentage){
        console.log(`the current salary of ${this.name} is ${this.salary}`);
        this.salary = this.salary*(1+(percentage/100));
        console.log(`the salary after increment of ${this.name} is ${this.salary}`);
    };
    incrementYear(){
        this.year++;
    }
}

class Manager extends Employee{
    constructor(name, salary, managerSecret){
        super(name, salary);
        this.managerSecret = managerSecret;
    }
    fireEmployee(firedEmployee){
        console.log(`${firedEmployee} is been fired by the manager`);
    }
}

const vj = new Manager("vijay" , 100000, "password");
console.log(vj);


