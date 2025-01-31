const add = (a, b) => a + b;



//function who take a array of number and a given number and return the occurence of the number
const countOccurence = (tab, number) => {
    if (number === undefined) {
        throw new Error('number is required');
    }
    let occurence = 0;
    for (const i of tab) {
        if (i === number) occurence++;
    }
    return occurence;
}

const occurence = countOccurence([1,5,3,4,2,5,34,5,3,6,5], 3);
console.log(occurence);

export {
    add,
    countOccurence
};