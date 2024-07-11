// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currVal : ${currval}`);
//     return acc + currval
// }, 0)


// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js ",
        price: 2999,
    },
    {
        itemName: "python ",
        price: 9999,
    },
    {
        itemName: "mobile dev ",
        price: 5999,
    },
    {
        itemName: "data sciences ",
        price: 12999,
    },
]

const pricetoPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetoPay);
