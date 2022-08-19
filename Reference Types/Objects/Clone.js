// we can clone object by using spread operator and assign method

let a = {
  name: "Priyanshu",
  age: 22,
};

let b = a; // not cloning here, just assigning the same object

let c = { ...a }; // method 1

let d = Object.assign({}, a); //  method 2

a.addresss = "Baner";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
