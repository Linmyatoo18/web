function add(){
    document.getElementById("result").innerHTML = 5+2;
}
function subtract(){
    document.getElementById("result").innerHTML = 5-2;
}
function multiply(){
    document.getElementById("result").innerHTML = 5*2;
}
function divide(){
    document.getElementById("result").innerHTML = 5/2;
}

//command
/*hhh
222
*/

 x = 5;
 y = 2;
 z = x ** y;

console.log(z)

console.log(5e-5)

const pi = 3.14159

console.log(pi)

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.name)

console.log(myObj.myCars.car2)

let i = temp(5);
console.log(i)

function temp(num){
    return 5 * num
}

let obj = "Phone";
const phone = {color:"Black", os:"Android", model:"pixel"};
console.log(phone.color,phone.os, phone.model);

const book = {
    title:"C",
    pages_count: 250,
    hight: 16,
    width: 9,
    color:"BnW",
    fille: function(){
        return this.title + " " + this.color;
    }
};

const Class = new Object();

Class.Name = "A";
Class.students = 20;
Class.tables = 10;
Class.teacher = "John";

document.getElementById("C0").innerHTML = Class.Name;

console.log(Class["teacher"]);
console.log(Class.teacher);
console.log(book.fille());

document.getElementById("ClassName").innerHTML = "Class : " + Class.Name;
document.getElementById("ClassStudent").innerHTML = "Students: " + Class.students;
document.getElementById("ClassTables").innerHTML = "Tables : " + Class.tables;
document.getElementById("ClassTeacher").innerHTML = "Calss Teacher: " + Class.teacher;

person = {
    firstname: "John",
    hight: 170,
}
let age = person.age;


person.firstname + " is " + person["age"] + " years old.";

let a = "firstname";
let b = "age";
person[a] + " is " + person[b] + " years old.";

document.getElementById("person").innerHTML = person[a] + " is " + person[b] + " years old.";

console.log(book.fille())

let player = {
    name:"Jerry",
    level:12,
    rank:"Silver",
    ActiveTime:5.6,
    p: function(){
        return this.name + ":" + this.rank;
    }
}

console.log(player.name)
console.log(player.level)
console.log(player.rank)
console.log(player.ActiveTime)
console.log(player.p())