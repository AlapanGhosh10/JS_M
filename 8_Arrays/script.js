// // Introduction
// const months = ['January', 'February', 'March', 'April'];
// months[4] = 'May';

// for(let i = 0 ; i < months.length ; i++) {
//     console.log(months[i]);
// }

// console.log(months.length);

// const values = [
//     'Apple',
//     {name: 'John'},
//     true,
//     () => {}
// ];

// console.log(values);

// // Array Methods
// const names = ['Jon', 'Bob', 'David', 'Mark'];

// // Array Push - adds new element to the end of array
// const length = names.push('Dean');
// console.log(names);
// console.log(length);

// // Array Pop - deletes the last element
// const removedValue = names.pop();
// console.log(names);
// console.log(removedValue);

// // Array Shift - deletes first element of array
// names.shift();

// // Array Unshift - adds element to the start of array
// names.unshift('Alan');

// console.log(names);

// // Array Splice - adds or removes from any position
// names.splice(2, 2, 'Jenny', 'Johnny');
// console.log(names);

// // Array Slice - copies parts of araay into a new array
// const noOneLikesJon = names.slice(1,3);
// console.log(noOneLikesJon);

// // Array forEach
// const names = ['Jon', 'Jenny', 'Johnny'];

// names.forEach((name, i) => {
//     console.log(name, i);
// });

// const logTheName = (name, i) => console.log(name, i);
// names.forEach(logTheName);

// // Array Map
// const inventory = [
//     { price: 5, name: 'eggs'},
//     { price: 4, name: 'ham'},
//     { price: 3, name: 'mayo'},
//     { price: 5, name: 'bread'},
// ];

// const prices = inventory.map((item) => item.price);
// const items = inventory.map((item) => item.name);
// console.log(items);
// console.log(prices);

// // filter
// const numbers = [-10, 0, -2, 15, -36, 25];

// const positiveNumber = numbers.filter((number) => {
//     return number >= 0;
// });

// console.log(positiveNumber);

// // Employees with 7 or more overtime hours
// const employeesData = [
//     {name: 'Sebastian', overtime: 5},
//     {name: 'Cardy', overtime: 10},
//     {name: 'Georgie', overtime: 12},
// ];

// const rewardedEmployees = employeesData.filter((employee) => employee.overtime >= 7);
// const names = rewardedEmployees.map((employee) => employee.name);
// console.log(names);

// // Array find
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = numbers.find((number) => number > 5);
// console.log(value);

// // First state that begins with a letter C
// const states = ['Alaska', 'California', 'Colorado', 'Hawaii'];
// const stateWithC = states.find((state) => state.startsWith('C'));
// console.log(stateWithC);

// // Array includes
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));

// const pets = ['cats', 'dog', 'llama'];
// console.log(pets.includes('cat'));

// // Array sort
// const names = ['Anne', 'Carl', 'Bob', 'Dean'];
// names.sort();
// console.log(names);

// const numbers = [6, 3, 1, 7, 9, 2, 23, 11, 44];
// numbers.sort();
// console.log(numbers);

// // Ascending Order
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// const array = [1, 2, 3, 4, 5];

// //Array Some and Array Every
// const greaterThan3 = (number) => number > 3;
// console.log(array.some(greaterThan3));

// console.log(array.some((number) => number > 3));
// console.log(array.every((number) => number > 3));

// // Array reduce
// const groceryList = [29, 12, 45, 35, 87, 110];

// const total = groceryList.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(total);

// // Find total sum using forEach loop
// let sumOfPrices = 0;
// groceryList.forEach((price) => sumOfPrices += price);
// console.log(sumOfPrices);

