function sayMyName() {
    console.log("J");
    console.log("A");
    console.log("Y");
    console.log("P");
}

// sayMyName();
//   Parameter
// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
    let result = num1 + num2
    // return result;
    return num1 + num2;
}

// addTwoNum(3, null); //Arguments

const result = addTwoNum(3, 9);
// console.log("Result: ", result);

function loginUserMessage(username = "JAY Prajapati") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just  logged In`
}

// console.log(loginUserMessage("jayy"));
// console.log(loginUserMessage("Gudiiii"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 50000));

const user = {
    username: "jayy",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 500, 100]

function returnSecondValue(getArray) {
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue(myNewArray));