// create a promise that will be resolved after 5 sec

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 5000);
});

console.log(promise);

setTimeout(() => {
  console.log(promise);
}, 6000);

// we can assign .then method to the promise and it can only be called after Promise is resolved
// consuming a promise

// .then(onResolvedFuntion, onRejectedFunction)

promise.then((res) => {
  console.log(res);
});

// create a promise that will be rejected after 5 sec

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rejected");
  }, 5000);
});

promise2.then(null, (error) => {
  console.log(error);
});

promise2.catch((error) => {
  console.log(error);
});

// we can use .then second parameter for rejected promise or can by using a catch method
