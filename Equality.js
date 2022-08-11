// == vs === and != vs !==
let n1 = "7";
let n2 = 7;

console.log(n1 == n2); // true
console.log(n2 === n1); // false

console.log(n1 != n2); // false
console.log(n2 !== n1); // true

// == and != only checks value not the datatype
// === and !== checks value and datatype both

// these all are falsy values, ... other than these all values are truthy values
let a = false;
let b = 0;
let c = null;
let d = "";
let e = undefined;

//this is true
let f = " ";

if (a) {
  console.log(true);
} else {
  console.log(false);
}

if (b) {
  console.log(true);
} else {
  console.log(false);
}

if (c) {
  console.log(true);
} else {
  console.log(false);
}

if (d) {
  console.log(true);
} else {
  console.log(false);
}

if (e) {
  console.log(true);
} else {
  console.log(false);
}

if (f) {
  console.log(true);
} else {
  console.log(false);
}
