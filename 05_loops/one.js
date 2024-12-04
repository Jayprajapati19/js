// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log("5 is Best Number");
  }
  // console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer value : ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop value: ${j} amd onner loop ${i}`);
//         console.log(i + ' * ' + j + ' = ' + i * j); //table
//     }
// }

let myArr = ["jay", "oza", "superman"];

// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];

  // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         // break;
//     }
//     console.log(` Value of index ${index}`);

// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(` Value of index ${index}`);
}
