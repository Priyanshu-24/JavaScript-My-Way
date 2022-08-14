// we have 7 primitive datatypes
// number, string, boolean, null, undefined, symbol, bigint

// refernce types are objects, arrays and functions
// all reference types have a typeof object

// primitive
let a = 1;
let b = a;
console.log(a, b); // 1 1
a++;
console.log(a, b); // 2 1

// reference
let c = [1, 2];
let d = c;
console.log(c, d); // [1, 2] [1, 2]
c.push(3);
console.log(c, d); // [1, 2, 3] [1, 2, 3]

// find out difference of above two examples
