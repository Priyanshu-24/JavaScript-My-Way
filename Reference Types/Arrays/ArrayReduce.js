// verbose
// arr.reduce(callbackfn, initialValue);

// accepts two parameters (initialValue is optional)

// the function will be called for the each element of the array
// with the initial value at the beginning and then with the returned value from the last call

// The callback function has 4 parameters, (previousValue, currentValue,
//     currentIndex, array).
//     ● previousValue – The value returned from the last call of the
//     same function or the initial value at the beginning.
//     ● currentValue – Current value of the array.
//     ● currentIndex – Current index position of the iteration.
//     ● array – The array itself

// by using this method we can perform various kind of operation

// 1) Aggregation  (ex. sum of all the elements or multiplication of all the elements)

let sumArray = [1, 2, 3, 4, 5];

const sum = sumArray.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);

console.log(sum);

// 2) Segregation   (ex. we can group a certain set of values depending on our requirements)

const arrWithDecimals = [1.1, 1.2, 1.3, 2.2, 3.1, 3.2, 2.3, 2.4];

let segregatedObject = arrWithDecimals.reduce((previousValue, currentValue) => {
  let floored = Math.floor(currentValue);
  if (!previousValue[floored]) {
    previousValue[floored] = [];
  }
  previousValue[floored].push(currentValue);
  return previousValue;
}, {});

console.log(segregatedObject);

// if looked closely this method works like map data structure

// 3) Run in sequence
