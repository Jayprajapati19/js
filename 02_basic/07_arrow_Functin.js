const user = {
    username: "jay",
    price: 99,

    welcomeMessage: function () {
        // console.log(`${this.username} ,  welcome to website`);
        // console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log();

// function one() {
//     let username = "jay"
//     console.log(this.username);
// }

// one()


// const chai = () => {
//     let username = "jay"
//     console.log(this);
// }

// chai()

// ++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "jay" });

console.log(addTwo(3, 4))



// const myArr = [2, 3, 4, 5, 6]
// myArr.forEach(() => {

// })