const arr = [1, 2];

const [a, b] = arr; // array destructuring

console.log(a, b); // these two will act as two individual variables
console.log(typeof a, typeof b);

// we can also do
const arr1 = [1, 2, 3, 4, 5];
const [a1, b1] = arr1;
console.log(a1, b1); // first two array elements will be stored in this case

// if we wany to skip any index then
const arr2 = [1, 2, 3, 4, 5];
const [a2, , b2] = arr2; // skipping index by using empty commas
console.log(a2, b2); // 1 3

// array destructuring and rest operator
const arr3 = [1, 2, 3, 4, 5];
const [a3, b3, ...c3] = arr3;
console.log(a3, b3, c3); // rest all elements will be stored in c3 as an array by using rest operator
