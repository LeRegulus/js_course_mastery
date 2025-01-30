// Promises in JavaScript

console.log("synchronous1");


const promise = new Promise((resolve, reject) => {

    // let i = 0;
    // while(i < 1_000_000_000_000) {
    //     i++
    // }
    // resolve("promise executing")
    const value = Math.random();
    if (value > 0.5) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise.then((value) => {
    console.log(value);
}).catch((error) => {    
    console.log(error);
});


console.log("synchronous2");