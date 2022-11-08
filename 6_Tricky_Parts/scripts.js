// // Global Scope
// const name = 'Alan';

// const logName = () => {
//     console.log(name);
// }
// logName();

// // Local Scope
// const someFunction = () => {
//     // Local Scope 1
//     const name = "John";
//     console.log(name);

//     const anotherFunction = () => {
//         // Local Scope 2
//         const name = 'Jen';
//         console.log(name);
//     }

//     anotherFunction();
// }
// someFunction();

// // Block Scope
// if(true) {
//     let name = "John";
//     console.log(name);
// }
// console.log(name);

// // Hoisting
// const age = 10;
// console.log(age);

// // Closures
// const outer = () => {
//     const outerVar = 'Hello!';

//     const inner = () => {
//         const innerVar = 'Hi!';
//         console.log(outerVar, innerVar);
//     }
//     return inner;
// }
// const innerFn = outer();
// innerFn();

const init = () => {
    // local variable created by init function
    const hobby = 'Learning JS';

    // displayHobby is the inner function, a closure
    const displayHobby = () => {
        // using a variable created in the parent function
        console.log(hobby);
    }
    return displayHobby;
}
const myFunc = init();
myFunc();