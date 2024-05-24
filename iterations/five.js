const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

const myCoding = [
    {
        languageName: "java",
        fileName: ".java"
    },
    {
        languageName: "javascript",
        fileName: ".js"
    },
    {
        languageName: "python",
        fileName: ".py"
    },
    {
        languageName: "react",
        fileName: ".jsx"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName, ':-', item.fileName);
})