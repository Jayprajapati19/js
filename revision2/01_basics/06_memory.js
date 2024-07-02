// Stack (Primitive) --> ye memory use hoti tab jo hamne variable declarerd kiya hai uski copy milti hai, ==> copy male

// Heap(Non - Primitive) --> Refrence of original value , jo bhi chgane  karenge wo original value me change hoga => refrence male update thay e original value ma j thay

let myYTName = "jayprajapati.yt"

let anotherName = myYTName
anotherName = "Dev with jay"

console.log(myYTName);
console.log(anotherName);



let userOne = {
    email: "user@gmail.com",
    upi: "ser@ybl"
}


let userTwo = userOne

userTwo.email = "jd@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
