// function declaration
function sumTwoNumbers(a, b) {
  console.log(a + b);
}

sumTwoNumbers(2, 3);

// function expression
const sumTwo = function (a, b) {
  console.log(a + b);
};

sumTwo(1, 2);

// arrow function
const sumThreeNumbers = (a, b, c) => {
  console.log(a + b + c);
};

sumThreeNumbers(1, 2, 3);

// just check syntax for arrow functions with single argument and with single line return statements

console.log(typeof sumTwoNumbers, typeof sumTwo, typeof sumThreeNumbers); // function function function
