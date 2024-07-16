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

   this.greetings = function () {
      console.log(`Welcome ${this.username}`);
   }

   return this
}

const userOne = new User("jay", 12, true)
const userTwo = new User("diyu", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

// new keyword use karte hai tab empty object create hota hai, jikso instance bola jata hai, construcotr function call hota hai new keyword ke karan  , argu ne pack kre inject kre, miljata hai function ke under

// intanceof method


// javascript kaa default behavoir is prototypel behaivour

