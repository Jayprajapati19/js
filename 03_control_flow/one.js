//  if

const isUserLoggedIn = true
const temp = 41

if (temp === 40) {
    // console.log("less than 50");
} else {

    // console.log("temp is greaten than 50");
}
// console.log("Excuted");

// <, >, <=, >=, ==, !=, ===, !==, 

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);



// Implicit Scope

// const balance = 1000
// if (balance > 500) console.log("Test");

// nesting

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

if (loggedInFromGoogle || loggedInfromEmail) {
    console.log("User Logged In");
}






