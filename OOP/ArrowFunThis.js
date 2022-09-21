const person = {
  firstName: "Priyanshu",
  age: 22,
  about: function () {
    console.log(`Person's name is ${this.firstName} and age is ${this.age}`);
  },
};

person.about();

const person2 = {
  firstName: "Priyanshu",
  age: 22,
  about: () => {
    console.log(`Person's name is ${this.firstName} and age is ${this.age}`); // undefined in this case
    console.log(this);
  },
};

person2.about();

// arrow function does not have any this
// it borrows this from up one level
// we cannot change this of arrow function that we use to do by using call method in normal functions

person2.about.call(person2); // will be undefined in this case also
