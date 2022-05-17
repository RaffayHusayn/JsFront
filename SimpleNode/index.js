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
    move2(move) {
        return () => {
            console.log(this.name + " is doing the " + move);
        };
    },
    move3(move){
        console.log(`${this.name} is doing the third move `+move);
    }
}

fighter.move("inamari roll");
fighter.move2("gillotine")();
fighter.move3("rear naked choke");



// 18005544555 guest relations after 12 the manager is Dan