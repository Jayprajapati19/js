

// console.log("j");

function sayMyName() {
    console.log("j");
    console.log("a");
    console.log("y");
    console.log("p");
    console.log("r");
    console.log("a");
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//      console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {

    // let result = num1 + num2;
    // console.log("jay");
    // return result;

    return num1 + num2;

}

const result = addTwoNumbers(3, 9)

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please Enter a User Name");
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("jayy"))
console.log(loginUserMessage("gudu"))





