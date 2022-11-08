// // Introduction
// const firstName = 'Johnny';

// const person = {
//     firstName: firstName,
//     lastName: 'Cruise',
//     age: 40,
//     car: {
//         brand: 'Toyota',
//         year: 2015,
//         color: 'red',
//     }
// }

// console.log(person);

// // Accessing, Adding and Updating of and object
// // DOT notation
// const person = {
//     firstName: 'Brad',
// }
// console.log(person.firstName);
// person.dog = { name: 'Fluffy', age: 2};
// person.age = 25;
// console.log(person);
// console.log(person.dog.name); 

// // SQUARE BRACKET Notation
// const property = 'age';
// console.log(person[property]);

// // Object Mehtods
// const dog = {
//     name: 'Fluffy',
//     age: 2,
//     listAllProperties: function() {
//         console.log(this.name, this.age);
//     }
// }
// dog.listAllProperties();

// // Initialize an object
// const employees = {
//     boss: 'Micheal',
//     secretary: 'Pam',
//     sales: 'Jim',
//     accountant: 'Oscar'
// };

// const positions = Object.keys(employees);
// console.log(positions);

// const names = Object.values(employees);
// console.log(names);

// // Initialize and Object
// const operatingSysem = {
//     name: 'Ubuntu',
//     version: 20.04,
//     license: 'Open Source'
// };
// const entries = Object.entries(operatingSysem);
// console.log(entries);

// Initialize Object
const user = {
    username: 'John',
    password: '123123'
};

// const admin = Object.freeze(user);

// admin.username = 'test'
// admin.password = '123123123'

// console.log(admin);

const newUser = Object.seal(user);

newUser.password = "test123";
newUser.active = true;

console.log(newUser);