// array
// JavaScript arrays are resizable and can contain a mix of different data types.

// JavaScript array - copy operations create shallow copies. (All standard built -in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.


const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["jay", "nagaraj", "keval"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array Methods

// myArr.push(7)
// myArr.push(8)

// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);
// console.log( newArr);



// slice, splice 

// console.log("A ", myArr);

const MYn1 = myArr.slice(1, 3)

// console.log(MYn1);

// console.log("B ", myArr);

const MYn2 = myArr.splice(1, 3)
// console.log("C ", myArr);

//
// console.log(MYn2);









