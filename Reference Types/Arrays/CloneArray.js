// ways to clone array, as directly assigning value will not work for cloning(refer primitive vs reference file)

let a = [1, 2, 3, 4, 5];
let a1 = a;

//method 1
let b = a.slice(0);

//method 2
let c = [].concat(a);

//method 3
let d = [...a];

a.push(6);
a.push(7);

console.log(a);
console.log(a1);
console.log(b);
console.log(c);
console.log(d);

// we can see that change in a doesnot effect b,c and d which was not the case with a1