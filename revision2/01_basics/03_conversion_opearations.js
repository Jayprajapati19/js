// let score = 33
// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
let score = "jay"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNum = Number(score)

// console.log(typeof valueInNum);
// console.log(valueInNum);


// "33"=>33
// "33abc" => NaN
// true => 1, false=> 0

// let isLoggedIn = 1 //true
// let isLoggedIn = "" //false
let isLoggedIn = "jay" //false

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "jay" => true


let someNumber = 33
let stringNum = String(someNumber)

// console.log(typeof stringNum);
// console.log(stringNum);

// ++++++  Operations +++++++


let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);


let str1 = "hello"
let str2 = " jay"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(3 + 4 * 5 % 6); //not right


// console.log(true);//true
// console.log(+true);//1

let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

// ++gameCounter;
// console.log(gameCounter);

/*

If used postfix, with operator after operand(for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand(for example, ++x), the increment operator increments and returns the value after incrementing. 

*/


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

/*
x starts at 3.
y is assigned the value of x before x is incremented.
    So, y is 3 and then x becomes 4.
*/

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*
a starts at 3.
a is incremented first, so it becomes 4.
b is assigned the value of a after it has been incremented.
So, both a and b are 4.*/

