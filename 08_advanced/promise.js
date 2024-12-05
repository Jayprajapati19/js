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

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "jay", email: "DevJp@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "DevJP", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

// call-back hell, chaining
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise either resolve or rejected "));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumedPromisedFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromisedFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/Jayprajapati19")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
