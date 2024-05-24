// const tinderUser = new Object() // singletton object
// const tinderUser = {}  //non singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "JayyPrajapati"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jay@gmail.com",
    fullname: {
        userfullname: {
            firstaname: "jay",
            lastname: "prajapati"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstaname);

const obj1 = { 1: "A", 2: "B" }
const obj2 = { 3: "C", 4: "D" }
const obj4 = { 5: "E", 5: "F" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "j19@gmail.com",

    },
    {
        id: 1,
        email: "j19@gmail.com",

    }

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ***** Destructuring *****

const course = {
    coursename: "js with jayy",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
// console.log(instructor);



// {
//     "name": "jay",
//         "course": "js",
//             "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

