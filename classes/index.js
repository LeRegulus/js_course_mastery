import {Person, SoftwareEngineer }  from "./Classes.js";

const alex = new Person("Alex", "James", 25,"male"); 
const jamila =  new SoftwareEngineer("Jamila", "Muktar", 32, "female", ["JavaScript", "Python", "Java"]);

alex.fName = "Alexander"

//Properties
console.log(alex.firstName);
console.log(alex.lastName);
console.log(alex.age);
console.log(alex.gender)
console.log(alex.fullName);

//Behaviours
alex.sleep()
alex.eat()
alex.toString()

//Inheritance
//properties
console.log(jamila.firstName);
console.log(jamila.lastName);
console.log(jamila.age);
console.log(jamila.gender)
console.log(jamila.fullName);
console.log(jamila.programminLanguages);
//behaviours
jamila.sleep()
jamila.eat()
jamila.toString()
jamila.code()





