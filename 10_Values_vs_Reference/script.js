// // Copying number
// let x = 1;
// let y = x;
// x = 2;
// console.log(x);
// console.log(y);

// // Copying string
// let firstPerson = 'Mark';
// let secondPerson = firstPerson;
// firstPerson = 'Austin';
// console.log(firstPerson);
// console.log(secondPerson);

// // Copying Arrays
// const animals = ['dogs', 'cats'];
// const otherAnimals = animals;
// animals.push('llamas');
// console.log(animals);
// console.log(otherAnimals);

// // Copying Objects
// const person = {
//     firstName: 'Jon',
//     lastName: 'Snow'
// };
// const otherPerson = person;
// person.firstName = 'Johnny';
// console.log(person);
// console.log(otherPerson);
// console.log(person === otherPerson)

// Cloning Arrays

// // 1st way: Spread Operator
// const numbers = [1, 2, 3, 4, 5];
// const copiedNumbers = numbers;
// const newNumbers = [...numbers];
// console.log(numbers === copiedNumbers);
// console.log(numbers === newNumbers);

// // 2nd way: Array Slice
// const numbers = [1, 2, 3, 4, 5];
// const copiedNumbers = numbers;
// const newNumbers = numbers.slice();
// console.log(numbers === copiedNumbers);
// console.log(numbers === newNumbers);

// Cloning Objects

// // 1st Way: Spread Operator
// const person = {name: "john", age: 20};
// const otherPerson = { ...person };
// person.age = 22;
// console.log(person);
// console.log(otherPerson);

// // 2nd Way: Object.assign()
// const person = {name: "john", age: 20};
// const otherPerson = Object.assign({}, person);
// person.age = 22;
// console.log(person);
// console.log(otherPerson);

// // Disadvantages of Shallow Cloning
// const person = {
//     firstName: 'Emma',
//     car: {
//         brand: 'BMW',
//         color: 'blue',
//         wheels: 4
//     }
// }
// const newPerson = {...person};
// newPerson.car.color = 'red';
// console.log(person.car);
// console.log(newPerson.car);

// Deep Cloning
const person = {
    firstName: 'Emma',
    car: {
        brand: 'BMW',
        color: 'blue',
        wheels: 4
    }
}

const newPerson = JSON.parse(JSON.stringify(person));
newPerson.car.color = 'red';
console.log(person.car);
console.log(newPerson.car);