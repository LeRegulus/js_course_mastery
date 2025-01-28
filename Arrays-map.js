//Arrays Map returns a new array with the results of calling a provided function on every element in this array.

const numbers = [1, 2, 3, 4, 5];
const numbersTimeTwo = numbers.map(number => console.log(number * 2));
// console.log(numbersTimeTwo);

//reduce method
const sum = numbers.reduce((acc, number) => acc - number);
// console.log(sum);

//Spread Operator with Arrays

const numbers2 = [6, 7, 8, 9, 10];

const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

//Arrays Destructuring

const names = ['John', 'Jane', 'Jack', 'Jill'];

const [first, second, ...rest] = names;

// console.log(first);
// console.log(second);
// console.log(rest);
// console.log(names);

//The Map 

const map = new Map();
map.set('name', 'John').set('age', 30).set('isDelete', true);

console.log(map);
console.log(map.size);
console.log(map.get('name'));
console.log(map.has('age'));
console.log(map.delete('isDelete'));
// const ob = Object.fromEntries(map.entries());
// console.log(ob);

// map.clear();
console.log(map);

for (let [key, value] of map) {
    console.log(key, value);    
}

for (let entry of map) {
    console.log(entry);    
}









