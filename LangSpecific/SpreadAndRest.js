/*
 ================================================
 =================Spread Operator================
 ================================================
*/

// ============ Concatenating Arrays using Spread operator ================== 
let arr1 = [1, 2, 3, 4];
let arr2 = ["raffay" , "ayesha" , "nabia"];

let combinedArr = [...arr1, ...arr2]
console.log("concatenating arrays using spread operator: " ,combinedArr);

//============= Pushing in the same array ==================
arr1.push(...arr2)
console.log("pushing using spread operator : " ,arr1);

Array.prototype.push.apply(arr1, arr2);
console.log("pushing using Array.prototype.push.apply()", arr1);

[].push.apply(arr2, arr1);
console.log("pushing using [].push.apply()", arr2);

// ============ Spreading a String ====================
let name = "Raffay";
let nameString = [...name];
console.log(nameString); // ['R','a','f','f','a','y']

/*
 ================================================
 ==================Rest Operator================
 ================================================
*/

// ============== Example # 1 ====================
class Student{
    constructor(...student){
        //rest operator turns multiple single arguments to a function into an array
        //it is usually used with .apply() which takes array of arguments not like 
        //how I'm doing it below
    this.name = student[0];
    this.age = student[1];
    }
}

const raffay = new Student("Raffay" , 16);
console.log(raffay);

// ============== Example # 2 ====================
function filterNumLarger(filterNum, ...args){
    return args.filter(arg=>arg > filterNum);
};
let returnArr = filterNumLarger(2,4,1,2,3); // the first argument will be filterNum and the remaining will be args because of rest operator
console.log("filter number function using rest operator result " , returnArr);


// =============== Example # 3 ====================
function sum(...args){
    let total = 0 ; 
    args.forEach(arg => total += arg);
    return total;
}
console.log(sum(1,2, 3, 4));



















