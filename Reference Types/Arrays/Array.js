let arr = []; // array
let obj = {}; // object

console.log(typeof arr); // object
console.log(typeof obj); // object

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

// Array.isArray is used to check array

// learn about array methods like:

// forEach (find difference between forEach and for loop)
// filter, map
// reduce - confusing
// sort - tricky in case of numbers
// find
// every, some (both the methods are opposite of each other)
// fill
// splice