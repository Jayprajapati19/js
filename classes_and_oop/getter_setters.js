// error : Maximum call stack size exceeded
class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value
    }

}

const jay = new User("JP@19gmail.com", 'abc')
console.log(jay.password);
// 9:28