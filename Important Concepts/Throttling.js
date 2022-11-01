// used for performace optimization or limit the function call for a particular time delay
// here we trigger the function call im every certain time limit

const expensiveFunction = () => {
  console.log("Trigerred...!");
};

const throttle = (func, delay) => {
  let flag = true;
  return (...args) => {
    if (flag) {
      func.call(this, ...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterExpensiveFunction = throttle(expensiveFunction, 1000);

window.addEventListener("resize", betterExpensiveFunction);

// the real magic in throttling and debouncing lies in returning the closure
