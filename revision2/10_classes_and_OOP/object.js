function nultiplyBy5(num) {
   return num * 5
}

nultiplyBy5.power = 2

console.log(nultiplyBy5(5));
console.log(nultiplyBy5.power);
console.log(nultiplyBy5.prototype);


function createUser(username, score) {
   this.username = username
   this.score = score
}

createUser.prototype.increment = function () {
   this.score++
}

createUser.prototype.primtMe = function () {
   console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.primtMe()



