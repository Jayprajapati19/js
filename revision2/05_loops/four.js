const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

const programming = ['js', 'cpp', 'rb', 'py', 'java']

// for (const key in programming) {
//     console.log(programming[key]);
// }

// map is not itretable

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'Unites State Of America')
map.set('JP', 'Japan')
map.set('FR', 'France')
map.set('IN', 'India')

for (const key in map) {
    console.log(key);
}


