class User {
   constructor(username) {
      this.username = username;
   }
   logMe() {
      console.log(`USERNAME is ${this.username}`);
   }
}

class Teacher extends User {
   constructor(username, email, passowrd) {
      super(username)
      this.email = email;
      this.passowrd = passowrd;
   }

   addCourses() {
      console.log(`A new Course was added by ${this.username}`);
   }
}

const jay = new Teacher("jay", "jd@gmail.com", "123")

jay.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(jay instanceof User);


