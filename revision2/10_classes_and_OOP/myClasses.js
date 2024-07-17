// ES6

// class User {
//    constructor(username, email, password) {
//       this.username = username
//       this.email = email
//       this.password = password
//    }

//    encryptPassword() {
//       return `${this.password}abc`

//    }
//    channeUsername() {
//       return `${this.username.toUpperCase()}`
//    }

// }

// const chai = new User("chai", "jp@gmail.com", "1909")

// console.log(chai.encryptPassword());
// console.log(chai.channeUsername());


// behind the seen 

function User(username, email, password) {
   this.username = username
   this.email = email
   this.password = password
}

User.prototype.encryptPassword = function () {
   return `${this.password}abc`
}


User.prototype.channeUsername = function () {
   return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "jd@gmail.com", "1909")

console.log(tea.encryptPassword());
console.log(tea.channeUsername());
