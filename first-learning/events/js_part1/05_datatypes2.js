// Primitive

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bignum = 59535933935395989898989898n




// Reference (Non primitive)

// Array, Objects , Function

const heros = ["jay", "keval", "deep"];

let obj = {
    name: "jay",
    age: 22,
    city: "ahm"
}

const myfun = function () {
    console.log("hello world!");
}

// console.log(typeof heros);



