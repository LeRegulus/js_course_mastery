// While
// While loops are used to execute a block of code multiple times as long as a condition is true.


var names = [
    'Alex',
    'John',
    'Jane',
    'Doe'
];

var index = 0;

while (index < names.length) {
    // code block to be executed
    console.log(names[index]);
    index++;
}

condition = true;

do{
    // code block to be executed
    console.log('Hello');
    condition = false;
}while(condition);