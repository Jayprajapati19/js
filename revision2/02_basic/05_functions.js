

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
// console.log(loginUserMessage("gudu"))

function calculateCardPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCardPrice(200, 300, 900, 10s09, 440, 1909))

// ...rest,spred operator

const user = {
    username: "jay",
    prices: 193
}

function handleObj(anyObj) {
    // console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`);
}


// // handleObj(user)
// handleObj({
//     username: "sam",
//     price: 200
// })

const myArr = [200, 400, 100, 190]

function returnSecondValue(getArr) {
    return getArr[1]
}

// console.log(returnSecondValue(myArr));
// console.log(returnSecondValue([200, 400]));

