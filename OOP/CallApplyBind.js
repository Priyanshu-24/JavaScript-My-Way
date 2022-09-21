function a() {
  console.log("Hello world!");
}
a.call(); // we can call any function using call method

function about(hobby) {
  console.log(`Person's name is ${this.firstName} and age is ${this.age}`);
  console.log(`Hobby is ${hobby}`);
}

const user1 = {
  firstName: "John",
  age: 21,
};

const user2 = {
  firstName: "Lina",
  age: 56,
};

about.call(user1, "Cooking");
about.call(user2, "Dancing");

// we need to just tell the call method that which this (or object) is used as the first argument
// then after first argument we can use any numbers of arguments that we want
// we borrow about method to user1 and user2 using call method

// apply and call are same
// just apply method only has two arguments and we pass all the other arguments as an array
about.apply(user1, ["Cooking"]);

// bind will return any array
// bind method will bind the object with that function
const x = about.bind(user2, "Dancing");
x();
