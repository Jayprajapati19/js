// let myName = "jayy     "


// console.log(myName.trueLength);

let myHeros = ["jay", "keval", "deep"]

// let heroPower = {
//     jay: "firstclass",
//     keval: "secondclass",

//     getjayPower: function () {
//         console.log(`jay Power ${this.keval}`);
//     }
// }

// heroPower.jay()

// Inheritance 

const Teacher = {
    makeVideo: true
}

const TeacingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS makeAssignment",
    fullTime: true,
    __proto__: TeacingSupport
}



Teacher.__proto__ = TeacingSupport.prototype
