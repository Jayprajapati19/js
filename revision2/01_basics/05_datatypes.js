// Primitive --> call by value , Original data na aape copy kri ne ape


// Symbol used for value ne unique banava mate

// 7 types : String , Number ,  Boolean , null , undefined, Symbol ,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null //Empty

let userEmail; //undefiend

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 212121212424343243432432n

// console.log(typeof bigNumber); // BigInt


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Non-Primitve // Reference Type
// Arryas , Objects , Functions  

const heros = ["jay", "deep", "tarun", "keval"];

let myObj = {
    name: "jay",
    age: 18,
}


const myFunction = function () {
    console.log("hello jay");
}

// console.log(typeof OutsideTemp);
console.log(typeof myFunction);




/*

Undefined -->	"undefined"
Null -->	"object"(reason)
Boolean -->	"boolean"
Number -->	"number"
BigInt	--> "bigint"
String -->	"string"
Symbol -->	"symbol"

Function(implements[[Call]] in ECMA - 262 terms; classes are functions as well)  -->"function"

Any other object -->	"object" 
*/