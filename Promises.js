// Promises in JavaScript

const promise = new Promise((resolve, reject) => {
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