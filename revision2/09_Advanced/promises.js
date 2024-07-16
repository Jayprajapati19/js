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

// async function getAllUsers() {
//    try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await response.json()
//       console.log(data);
//    } catch (error) {
//       console.log("E: ", error);
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/Jayprajapati19')
   .then((response) => {
      return response.json()
   })
   .then((data) => {
      console.log(data);
   })
   .catch((error) => console.log(error));

/*
The XMLHttpRequest API worked like a charm back then, but as the web grew, it became so difficult to work with that JavaScript frameworks, notably jQuery, had to abstract it to make implementation easier and success / error handling smoother.

Introducing the Fetch API 🔥
In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, and it has subsequently become the de facto standard for making asynchronous calls in web applications.One significant advantage Fetch has over XMLHttpRequest is that it leverages promises, allowing for a simpler and cleaner API while avoiding callback hell.

The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

*/