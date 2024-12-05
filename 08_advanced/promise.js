// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// create a new Promise object
promiseOne = new Promise((resolve, reject) => {
  // Do in async task
  // DB calls, cryptography, network class
  setTimeout(() => {
    console.log("Async operation is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed..");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation is completed Two....");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async Two Resolved..");
});
