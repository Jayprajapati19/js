// Stack (Primitive), copy , Heap(Non-primitive), fererence



let myYTName = "jaypdotcom"

let anothername = myYTName
anothername = "chai our code "

console.log(myYTName);
console.log(anothername);

let userOne = {
    email: "jayp@gmail.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "gudii@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);