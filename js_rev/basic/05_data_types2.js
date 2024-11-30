// Primitive data types

// Changes in copy not original value

// 7 - types: String, Number, Boolean, null, undefined. Symbol, BigInt
// javaScript is a dynamically typed language.

// What does "dynamically typed" mean?
// The type of a variable is determined at runtime, not at compile time.
// You can assign values of different types to the same variable without declaring its type explicitly.

let x = 10; // x is a number
x = "Hello"; // Now x is a string
x = true; // Now x is a boolean

// console.log(x);
// console.log(typeof x);

// This flexibility is a feature of dynamically typed languages but can also lead to runtime errors if not handled carefully.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof outSideTemp);

// console.log(id === anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Non-Primitive types ( refrence types)

const heros = ["shaktiman", "jayy", "tikooo", "bhim", "patlu"];

let myObj = {
  name: "jay",
  age: 22,
  city: "ahm",
};

const myFunc = function () {
  console.log("Hello World!");
};

// console.log(typeof myObj);
// console.log(typeof myFunc);
// console.log(typeof heros);

// Array, Object, Functions
// memory ne direact usaka refrence diya jata haii
