class Person{

    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    sing(){
        this.name = "gay";
    }
}

let raffay = new Person("Raffay", 25, "5'10");
raffay.sing();
console.log(raffay);