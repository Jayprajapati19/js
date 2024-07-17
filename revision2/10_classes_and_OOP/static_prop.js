
class User {
   constructor(username) {
      this.username = username;
   }

   logMe() {
      console.log(`USername: ${this.username}`);
   }

   static createId() {
      return `123`
   }

}

const jay = new User("jay")
// console.log(jay.createId())

class Teacher extends User {
   constructor(username, email) {
      super(username)
      this.email = email

   }
}

const iphone = new Teacher("iphone", "jpd@gmail.com")
console.log(iphone.createId());
