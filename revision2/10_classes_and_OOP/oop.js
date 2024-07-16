// object litaral

const user = {
   username: "jay",
   email: "jd@gmail.com",
   age: 18,
   signIn: true,

   getUserdDetails: function () {
      // console.log("Got user details from DB");
      // console.log(`Username: ${this.username}`);
      console.log(this);

   }
}

// console.log(user.username);
// console.log(user.getUserdDetails());
// console.log(this);

// Current Context --> this key word
// new key word is constructor function -> ak hi objects litarl se multiple instances bana shako 

function User(username, loginCount, isLoggedIn) {
   this.username = username
   this.loginCount = loginCount
   this.isLoggedIn = isLoggedIn

   return this
}

const userOne = new User("jay", 12, true)
const userTwo = new User("diyu", 11, false)
console.log(userOne);
console.log(userTwo);








