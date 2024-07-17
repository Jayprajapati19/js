class User {
   constructor(email, password) {
      this.email = email
      this.password = password
   }

   get email() {
      return this._email.toUpperCase();
   }

   set email(value) {
      this._email = value;
   }

   get password() {
      return `${this._password}jay`
   }

   set password(value) {
      this._password = value
   }

}

const jay = new User("jd@gmail.com", "jay")
console.log(jay.password);
console.log(jay.email);

// RangeError: Maximum call stack size exceeded