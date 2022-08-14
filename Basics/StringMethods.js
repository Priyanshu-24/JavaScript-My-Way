//trim()
let firstName = "      Priyanshu     ";
console.log(firstName.trim()); // Priyanshu

let realName = firstName.trim();
console.log(firstName.length, realName.length);

//trim() will not change the original string, it will return the new string
 

//toUpperCase() and toLowerCase() will also not change the original string but will return the new string


//slice()

let fruit = "Banana";

let newString = fruit.slice(0, 3);
console.log(newString);
console.log(fruit); 

// slice() will take first index and last index but will not include the last index in the string

