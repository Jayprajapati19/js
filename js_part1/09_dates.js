// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

// let myCretedDate = new Date(2024, 8, 19)  //months start in js 0
// let myCretedDate = new Date(2024, 8, 19, 5, 3, 5)
// let myCretedDate = new Date("2023-01-19")
let myCretedDate = new Date("01-14-2023")
// console.log(myCretedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCretedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})

