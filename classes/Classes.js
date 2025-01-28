// Classe in JavaScript
class Person {

    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender
    }

    get fullName (){
        return `${this.firstName} ${this.lastName}`
    }

    set fName(fName){
        this.firstName = fName;
    }

    sleep() {
        console.log(`${this.firstName} ${this.lastName} is sleeping`);
    }

    eat() {
        console.log(`${this.firstName} ${this.lastName} is eating`);
    }

    toString() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and is a ${this.gender}`;
    }

}


class SoftwareEngineer extends Person {
    constructor(firstName, lastName, age, gender, programminLanguages) {
        super(firstName, lastName, age, gender);
        this.programminLanguages = programminLanguages;
    }

    code () {
        console.log(`${this.fullName} is coding using ${this.programminLanguages}` );
    }
}

export{
    Person,
    SoftwareEngineer
} 