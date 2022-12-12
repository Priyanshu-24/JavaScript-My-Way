const promise = Promise.resolve("I am Resolved");

async function handlePromise(promise) {
  try {
    const res = await promise;
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Task Done");
  }
}

handlePromise(promise);

// const example = async () => {
//   // await can be used
// };
//
// const example = async function () {
//     // await can be used here
// };

// a function declared with async returns a promise

const example = async (promise) => {
  try {
    const res = await promise;
    return res;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Task Done");
  }
};

example(promise).then((res) => {
  console.log(res);
});

// check the order of execution here
