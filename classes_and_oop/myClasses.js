// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    chaneusername() {
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("jay", "jay@gmail.com", "1909")

console.log(chai.encryptPassword());
console.log(chai.chaneusername());