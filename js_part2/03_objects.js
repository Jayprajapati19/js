// singleton
// Object.create

// object literals 


const mySym = Symbol("key1")



const JSUser = {
    name: "jay",
    "full name ": "Jay Prajapati",
    [mySym]: "mykey1",
    age: 18,
    location: "ahemdabad",
    email: "jay19@gmail.com",
    isLoggedIN: false,
    lastLoginDays: ["monday", "Saturday"]

}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name "]);
// console.log(typeof JSUser[mySym]);

JSUser.email = "jayyy@8.com"
// Object.freeze(JSUser)
JSUser.email = "jayyy@google.com"
// console.log(JSUser);

JSUser.greeting = function () {
    console.log("hello js user ");
}

JSUser.greetingTwo = function () {
    console.log(`Hello js USer , ${this.name}`);
}

console.log(JSUser.greeting());
// console.log(JSUser.greetingTwo());

