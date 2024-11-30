// two typs -> Stack(primitive) --> yaha se copy milta haii and Heap(non-primitive) --> yaha se refrence milta hai original value ka......

let myYtname = "JayPrajapatidot.com";

let anotherYtname = myYtname;

anotherYtname = "Chai Our Jay.com";

console.log(myYtname);
console.log(anotherYtname);

let userOne = {
  email: "Jayp1909@gmail.com",
  usiId: "jay@sbi",
};

userTwo = userOne;

userTwo.email = "jay@google.com";

console.log(userOne.email);
console.log(userTwo.email);
