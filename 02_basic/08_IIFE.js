//  Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIfe
    console.log(`DB CONNECTED`);
})();

// ()() //IIFE

((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED2 ${name}`);
})("jay");



