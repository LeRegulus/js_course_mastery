//Working with arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(number=> console.log(number));

console.log(numbers[3]);
numbers[3] = 11;
console.log(numbers[3]);
numbers.push(12);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

console.log(numbers.indexOf(5));
numbers.splice(2, 1);
console.log(numbers);
