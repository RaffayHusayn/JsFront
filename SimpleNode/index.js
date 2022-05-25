// class Person{

//     constructor(name, age, height){
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }

//     sing(){
//         this.name = "gay";
//     }
// }

// let raffay = new Person("Raffay", 25, "5'10");
// raffay.sing();
// console.log(raffay);
let fighter = {
    name: "Ryan Hall",
    weight_class: "light-weight",
    record: "12-1-0",
    nickname: "wizard",
    move(move) {
        console.log(this.name + " is doing the " + move);
    },
    // this work because arrow function doesn't have this keyword but it takes this from the context outside which in this 
    // case is move2 function
    move2(move){
        return () => {
            console.log(this.name + " is doing the " + move);
        };
    },
    // this doesn't work because arrow function doesn't have this keyword or something like that
    move3 : (move)=>{
        console.log(this.name + " is doing the third move "+ move);
    },
    //using tempelate literals "${}" inside of `` not quotes
    move4(move){
        console.log(`${this.name} is doing the third move ${move}`); 
    }
}

fighter.move("inamari roll");
fighter.move2("gillotine")();
fighter.move3("guard");
fighter.move4("rear naked choke");

const Obj1 = {
    val: "object 1 value"
}

class Class1{
    constructor(){
        this.class1Varibale = "object 3 variable";
    }
}

const Obj2 = {
    val2 : Obj1.val,
    print(){
        console.log(Obj1.val);
    }

}



Obj2.print();
const obj3 = new Class1();
console.log("constructor object variable : " + obj3.class1Varibale);
