
var person = {
    firstName: "Jamila",
    age: 32,
    isFemale: true,
    balance: 100.75,
    dob: new Date("1998, 01, 01").toJSON(),
    address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        zip: "62701"
    }
}


console.log(person);
console.log(person.firstName);
console.log(person.age);
console.log(person.isFemale);
console.log(person.balance);
console.log(person.address);
console.log(person.address.city);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));
