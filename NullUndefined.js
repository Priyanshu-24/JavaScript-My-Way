// undefined
let firstName;
console.log(typeof firstName, firstName); //undefined undefined

var lastName;
console.log(typeof lastName, lastName); //undefined undefined

console.log(typeof undefined, undefined); //undefined undefined

//const realName; // error at this line as we must initialize a const declaration with any value

//null
let myName = null;
console.log(typeof myName, myName); // object null
// typeof(null) = object is a bug
// null is used when we need to explicitly assign no value to any variable
