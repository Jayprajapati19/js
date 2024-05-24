// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER", a);
}

// console.log(a);
// console.log(b);

function one() {
    const username = "jay"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one();

if (true) {
    const username = "jayy"
    if (username === "jayy") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++ Interesting ++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}

addtwo(5)
const addtwo = function (num) {
    return num + 2
}



