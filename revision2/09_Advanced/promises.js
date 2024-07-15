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