// singleton
// Object.create 

// object literals

const sym = Symbol("key1")

const jsUser = {
    name: "jay",
    "full name": "jay prajapati",
    [sym]: "mykey1",
    age: 18,
    cources: "IT",
    collage: "LD",
    location: "jd@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["mon", "sat"]
};

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[sym]);

// Object.freeze(jsUser)
// jsUser.age = 20

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS user");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting);


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());







