//Creating Errors

// const err = new Error('This is an error message');
// const error = new SyntaxError('This is an error message');

// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);
// console.log("Invalid");
// console.log(err);
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);
// console.log("Invalid");
// console.log(error);

class MyError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

const myError = new MyError('This is a custom error message');

const divide = (a,b) => {
    if(b === 0){
        throw new MyError('Divide by zero error');
    }
    return a/b;
}

try {
    console.log(divide(10,0));
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Invalid");
    console.log(error);
    
}


 