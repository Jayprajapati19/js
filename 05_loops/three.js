// for of  --- array specific loop
// object in for of loop is not js object...mean of this object is kiske upr aap lopp lagana chahte honn

// { "", "", "" }
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// ++++++++++++++++++++++++++++++++++++++++++

// Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//  it is unique in the Map's collection

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'Unites State Of America')
map.set('JP', 'Japan')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':->', value);
}

const myObj = {
    game1: "NFS",
    game2: "ycity",
    game3: "GBMI"
}

// for (const [key, value] of myObj) {
//     onsole.log(key, ':->', value);
// }

