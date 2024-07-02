const promiseOne = new Promise(function (resolve, reject) {
    // Do async calls 
    // DB calls, crypography, network 

    setTimeout(function () {
        console.log("Async task is compeleted");
        resolve()

    }, 1000)

})

promiseOne.then(function () {
    console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async two resolved");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "jay", email: "jay@gmail.com" });
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "jayy", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("The Promise is either resolved or rejected"))



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javaScript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumedPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseFive();
