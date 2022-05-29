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


/*Creating objects*/
const raffay = new Employee("Raffay", 66000);
const ayesha = new Employee("Ayesha", 55000);

console.log(raffay);
raffay.incrementSalary(20);
console.log(raffay);
