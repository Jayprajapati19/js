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


const chai = () => {
    let username = "jay"
    console.log(this.username);
}

chai()