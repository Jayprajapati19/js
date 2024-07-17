// let myName = "jayp     "
// let mychannl = " chai     "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
   thor: "hammner",
   spiderman: "sling",

   getSpiderPower: function () {
      console.log(`Spidy  Power is ${this.spiderman}`);
   }
}

Object.prototype.jay = function () {
   console.log(`jay is present in all objects `);
}
Array.prototype.heyJay = function () {
   console.log(`jay says helllo`);
}

// heroPower.jay()
// myHeros.jay()
// myHeros.heyJay()
// heroPower.heyJay()


// inheritance

const user = {
   name: "jay",
   email: "jp@gmail.com",

}

const Teacher = {
   makeVideo: true
}

const TeachingSupport = {
   isAvailable: false
}

const TASupport = {
   makeAssignment: "JS Assignment",
   fullTime: true,
   __proto__: TeachingSupport,

}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "JAY prajapati        "

String.prototype.truelength = function () {
   console.log(`${this}`);
   console.log(`True lenght is : ${this.trim().length}`);
}

anotherUsername.truelength()
"jay".truelength()
"icetea".truelength()
