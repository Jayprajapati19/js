// fetch('http://somethind.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
   // DO as async task
   // DB task, cryptography, network call
   setTimeout(function () {
      console.log('Async task is compeleted');
      resolve()
   }, 1000)
})
promiseOne.then(function () {
   console.log("Promise Consumed");
})

new Promise(function (resolve, reject) {
   setTimeout(() => {
      console.log("Async Task 2 ");
      resolve()

   }, 1000);
}).then(function () {
   console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
   setTimeout(() => {
      resolve({ username: "jay", email: "jayp19@gmail.com" })

   }, 1000);
})


promiseThree.then(function (user) {
   console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
   setTimeout(() => {
      let error = true;
      if (!error) {
         resolve({ username: "jay", password: "123" })
      } else {
         reject("ERROR: Something went wrong")
      }
   }, 1000);
})

// callback hell
promiseFour
   .then((user) => {
      console.log(user);
      return user.username

   })
   .then((username) => {
      console.log(username);
   })
   .catch(function (error) {
      console.log(error);
   })
   .finally(() => console.log("The Promise Is either or Rejected"))


const promiseFive = new Promise((resolve, reject) => {
   setTimeout(() => {
      let error = true;
      if (!error) {
         resolve({ username: "javascript", password: "123" })
      } else {
         reject("ERROR: JS Went Wrong")
      }
   }, 1000);
})


async function consumedPromiseFive() {
   try {
      const response = await promiseFive
      console.log(response);
   } catch (error) {
      console.log(error);
   }
}

consumedPromiseFive()