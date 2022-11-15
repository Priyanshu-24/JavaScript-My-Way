// in closure we need to understand that a function in JS can return a function

const printFullName = (firstName, lastName) => {
  const printName = () => {
    console.log(firstName + " " + lastName);
  };
  return printName;
};

let result = printFullName("Priyanshu", "Pandey");
result();

// when a function is returned from any function, the retuned function will return along with its lexical environment

// Example 2

const hello = (c) => {
  let a = "Val-A";
  let b = "Val-B";
  return () => {
    console.log(a, b, c);
  };
};

let ans = hello("Val-C");
ans();

// debouncing code is great example for closure
