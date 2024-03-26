// OOP Object Oriented Programming
// FOP Functional Oriented Programming

// console.log(new Date());
// function date() {

// }
let a = 2;
class Human {
  constructor({ name, age }) {
    if (this.constructor === Human) {
      console.log("San Abstraction class yarata olmaysan");
    }
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `Your name ${this.name}. Your age is ${this.age}, Your surname is `;
  }
}
const alisher = new Human({
  name: "Alisher",
  age: 25,
  surname: "Rasulov",
});
const Javohir = new Human({
  name: "Javohir",
  age: 18,
});
console.log(alisher.getInfo());
// console.log(alisher.getInfo());
// console.log(Javohir.getInfo());
class Woman extends Human {
  constructor(props) {
    super(props);
  }
  method() {
    return gender;
  }
}
const Ziyoda = new Woman({
  name: "Ziyoda",
  age: 21,
  surname: "SSS",
  gender: "female",
});
console.log(Ziyoda.getInfo());
