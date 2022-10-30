// we donot want to call api on every input change but after a particular defined delay
// directly calling the getData function from addEventListner will trigger api call on every input change

// Solution: we can call getData function from debounce function with a defined delay

const getData = (e) => {
  console.log(e.target.value);
};

const debounce = (func, delay) => {
  let timeOutId;
  return (...args) => {
    if (timeOutId) {
      clearInterval(timeOutId);
    }
    timeOutId = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
};

const callingGetDataWithDebounce = debounce(getData, 1000);

let inputText = document.getElementById("input");
inputText.addEventListener("input", callingGetDataWithDebounce);

// Other Places where debouncing can be used:
//       Loading of data through scrolling (fb, insta)
//       Task defined of window resize
