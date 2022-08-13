const person = {
  name: "Ram",
  age: 35,
  "phone number": 9999999999,
};

console.log(person.name);
// but cannot do console.log(person.phone number) or console.log(person."phone number") or console.log(person.("phone number"))
// we have to use bracket notation for these conditions
console.log(person["phone number"]);

// we can add
person.email = "abc@xyz.com";
console.log(person);

// we can also add using
person["weight"] = 70;
console.log(person);

// but if we want to add a key whose value is stored in any variable, we must use bracket notation for that
// we need to add a key with address
const key = "address";

// if we add using dot notation
person.key = "Baner";
console.log(person); // not the result we want

// using bracket notation
person[key] = "Baner"; // person["key"] = "Baner"; will also not give the desired result
console.log(person);
