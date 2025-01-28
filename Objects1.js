//Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    isMale: true,
    balance: 100.00,
    dob : new Date('1970-01-01'),
    toString: function(){
        console.log(`Name :${this.firstName}, age: ${this.lastName}`);
        this.car.forEach(car => {
            console.log(car);
        });
    },
    car: ['Honda', 'Toyota', 'Ford'],
}
//add a property
// person.lastName = "Smith";
person["lastName"] = "Smith";
person.deleteMe = true;
//delete a property
delete person.deleteMe;
delete person.lastName;
console.log(person);
person.toString();

//show the property of the object the same that Object.keys() method
for (p in person) {
    console.log(p);
}

//show the values of the property of the object the same that Object.values() method
for( p in person){
    console.log(person[p]);
    
}


//Object Destructuring
// const {firstName, age, balance , address: {city} } = person;

// console.log(firstName);
// console.log(age);
// console.log(balance);
// console.log(city);

//Spread Operator
const address =  {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
};

const John = {
    ...person,
    ...address
}

console.log(John);

// Enhanced Object Properties

const brandProp = 'Brand';

const calculate = (brand, price) => ({
        [brandProp.toLocaleLowerCase()]:brand,
        price,
        getDiscount(){
            return this.price - (this.price * .20)
        }
});
const casio = calculate('Casio', 100);

//Lexical this
const alou = {
    firstName: "Alou",
    age: 50,
    cars: ['Honda', 'Toyota', 'Ford'],
    toString: function(){
        console.log(this);
        this.cars.forEach(car => {
            console.log(`${this.firstName} owns a ${car}`);
        });
    }
}

alou.toString();
