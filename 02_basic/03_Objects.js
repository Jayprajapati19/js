// const tinderUser = new Object() //--> this is a singleton Object

const tinderUser = {}

tinderUser.id = "123jdp",
    tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jd19@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jay",
            lastname: "prajapati"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  //optin chaning

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 3: "e", 4: "j" }

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "jd@gmail.com"
    },
    {
        id: 2,
        email: "jp@gmail.com"
    },
    {
        id: 1,
        email: "jr@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser).length);

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

