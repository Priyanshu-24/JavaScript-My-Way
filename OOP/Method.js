// method = function inside an object

const person = {
  firstName: "Priyanshu",
  age: 22,
  about: function () {
    //console.log(`Person's name is ${firstName} and age is ${age}`); this will throw reference error
    console.log(`Person's name is ${this.firstName} and age is ${this.age}`);
  },
  thisKaFunda: function () {
    console.log(this);
    console.log(this === person);
  },
};

console.log(person.firstName); // normal thing
person.about();

person.thisKaFunda(); // this will teach you everything about this

// this is an object that is same as the object itself or it refers to the same object

console.log(this); // here this refers to the window object
console.log(this === window); // true

// window is global object
