// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is Best Number");
    }
    // console.log(element);

}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop value: ${j} amd onner loop ${i}`);
        console.log(i + ' * ' + j + ' = ' + i * j); //table
    }
}





