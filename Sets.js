//Sets in jascript are a collection of unique values.

const numbersArray = [1, 1, 2, 2, 3];
console.log(numbersArray);

const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3);

console.log(numbersSet);

numbersSet.delete(2);
console.log(numbersSet);
console.log(numbersSet.has(2));

numbersSet.add("Hello", "World");
console.log(numbersSet);


