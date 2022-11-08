# JavaScript Mastery

## Introduction

Extensions → One Dark Pro, Live Server

Drag and drop folder in vscode to use it
create two files → index.html, script.js

***console.log(”print in console”);***

use ***html:5*** as boilerplate

***<script src=”script.js”></script>***

***Seperate window for console and web page***
Click vertical triple dot(…) in console corner → Dock side

***Remove Error Messages in Live Server***
Settings icon in console → Tick the box “Selected context only” under Console

***Ctrl + +*** to increase size in both vscode and chrome console

## Variables and Data Types

### Variables

Steps of creating variable
Create → Store → Use → Change

***`var variableName = “value”;`***

After ES6 we have 2 new ways of declaring variables

***`let variableName = “value”;`***

***let** is the preferred way of creating variables in Modern JavaScript*

***`const variableName = “value”`***
the value of const cannot be changed throughout the program
(**`Uncaught TypeError`:** Assignment to constant variable)

variableName is called ***Identifier***

Rules for creating Identifiers:

1. two identifiers cannot have the same name 
(**`Uncaught SyntaxError`:** Identifier has already been declared)
2. identifer cannot have the name of reserved keywords
(**`Uncaught SyntaxError`:** disallowed as a lexically bound name / Unexpected token)
3. identifierscan only start with alphabet, underscore, dollar
and cannot have any special character in between them also
(**`Uncaught SyntaxError`:** disallowed as a lexically bound name / Unexpected token)

### Data Types

Types of values is data types

Data Types → Strings, Numbers, Booleans, Null, Undefined, Object, Symbol

`typeof` variableName → get datatype of a variable

**Strings** → “Two Three Four Wonderful Wonderful Wonderful”
**Numbers** → 2, 3, 4
**Booleans** → true or false
**Null** → ***null*** → *specifies we have something to store value in but the value is non-existent*
**Undefined** → ***undefined*** → *specifies that we neither have the variable nor the value*
**Objects** → Most important datatype forms the building blocks for modern JS
**Symbol** → Extremely rarely used

### Comments

**Ctrl + /** *without even selecting the line* comments it

Single Line Comment
// Single Line Comment

Multiline Line Comment
/* Multi Line Comment */

Comments increases readability
Some say code should be clean enough to be understandable

### Strings

Three types of Strings in JS → ‘***Single Quotes’, “Double Quotes”, `Back Ticks`***

`const singleQuotes = 'Hello';`
`const doubleQuotes = "Hello!!";`
`const backTicks = `Hello?`;`

There are no difference between Single and Double Quotes String
They are also called ***Simple Strings***

BackTicks or ***Complex Strings*** provide extended functionalities
They allow us to embed expressions and variables into a String
by wrapping them in dollar signs then curly braces

### Embedding Variables into Strings

```jsx
const name = 'Alan';
const backTicks = `Hello, ${name}!`;  // Hello, Alan!

const backTicks2 = `2 + 2`;       // 2 + 2
const backTicks3 = `${2 + 2}`;    // 4
```

Single and Double Quotes can be used for normal cases
Backticks can be used when we want to apply *extended functionalities*

### Numbers

JS is untyped so a number is decimal or integer is taken care by JS at runtime

*`const wholeNumber = 5;`*

*`const decimalNumber = 0.5;`*

`const result = firstNumber / secondNumber;`

If we do operations on values that are not numbers we get result `**NaN**`(not a number)

`const result = string / secondNumber;`   // NaN

***typeof NaN** is **number,** it is acutally a number that can’t be represented by actual numbers*

### Booleans

only have two possible values `true` or `false`

`const isCool = true;`

let age  = 20;

`console.log(age < 18);`  // false

### Null and Undefined

null simply represents a value that is null or empty
`let age = null;`
`console.log(age);`  // null

If a varaible is not assigned but declared then it is undefined
`let x;`
`console.log(x);`  // undefined

JS nevers sets a value to null by default
But uninitialised values are set to undefined by default

`typeof undefined;` // **undefined**

`typeof null;` // **Object**

typeof null is Object because there is a ***bug***

Which was not solved intentionally as 
lots of codes that are made before would breakdown if changed

### Objects

Forms building blocks of modern JS

All other datatypes are primitive datatypes

Ins simplest form an object is a collection of variables

`const person = {
    name: 'John',
    age: 25,
}`

person is the object

Here we have keys and values

Dot(.) notation is used to get specific value

`console.log(typeof person);` // object
`console.log(typeof person.name);` // string

### Arrays

It is another type of object in JavaScript
it is used to store ordered data collection

`const arr = [1, 2, 3, 4];`

here we have indexes instead of keys and values

### Date

`const date = new Date();`

console.log(date) → current date with weekday time date etc

***Arrays, Data and others are not datatypes they belong to 
single Object datatype and they are extended in various ways***

`console.log(typeof arr);` // object
`console.log(typeof date);` // object

### Statically vs Dynamically Typed Languages

### Statically Typed

Datatype of a variable is known at compile time

### Dynamically Typed

Datatype of a variable is determined at runtime
So datatype of a variable can be changed overtime

*JavaScript is Dynamically Typed*

## Operators and Equality

### Introduction

Types of Operators in JS → `Arithmetic, Comparison, Logical, Assignment, Ternary`

### Arithmetic Operators

+ - * / %

** → exponent

++, --

**Working of modulus**
a % b → 14 % 11
14 / 11 → 1(3)
3/11 → 0(3) so result is 3 

### Comparison Operators

returns of a comparison operator is `true` or `false`

< > <= >= == !=

**Strict Equality and Inequality**

`a === b
a !== b`

***Strict Equality** is **preferred to use**
Strict Equality compares `VALUES` and `DATATYPES`
true only if **both are the same***

**== → Loose Equality (does not compare datatype)
=== → Strict Equality (compares both values and datatype)**

**Examples**
0 == ‘’ → true
false == ‘false’ → false
false == ‘0’ → true

# [https://dorey.github.io/JavaScript-Equality-Table/](https://dorey.github.io/JavaScript-Equality-Table/)

Good Reference

### Logical Operators

AND → `&&`
OR → `||`
NOT → `!`

```jsx
const age = 19;
const isCool = true;

// is cool and is above the age of 18
if(isCool && age > 18) {
    console.log('You may enter!');
} else {
    console.log("You can't enter!");
}
```

`console.log('truthy' && 0 && 'test' && 999);`
*Each operands are evaluated from left to right
evaluating each to truthy or falsy values
`&&` → all values must evaluate to truthy
`||` → if one evaluates to be true the **others are not even evaluated**
`!` → just reverses the truthy or falsy to the other*

### Assignment Operators

`=`

It can be merged with other arithmetic operators +=, -=, /=, *=

`number += 5` it is similar to `number = number + 5`

These can work with any datatype

`const string = "Alan";
let string2 = "Hello, ";
string2 += string;
console.log(string2);`  // Hello, Alan

## Logic and Control Flow

### if, else if, else statement

```jsx
const age = 21;

if(age > 18) {
    console.log("You may enter");
} else if(age == 18) {
    console.log("You just turned 18, Welcome");
} else {
    console.log("Grow up!");
}
```

### Truthy and Falsy values

`Truthy` → evaluates to boolean true
`Falsy` → evaluated to boolean false

*There are **only 6 falsy values** rest all are truthy*

**Six Falsy values → `false, 0, ‘’, null, undefined, NaN`**

### Switch statement

it is used when we have multiple conditions
*switch statement internally uses `**Strict Equality**`*

```jsx
const superHero = 'Thor';

switch(superHero) {
    case 'Iron Man':
        console.log('I am Iron Man...');
        break;
    case 'Thor':
        console.log('That is my hammer!');
        break;
    case 'Captain America':
        console.log('I can do this all day');
        break;
    case 'Black Widow':
        console.log('See you in a minute');
        break;
    default:
        console.log('Enter a valid super hero name');
}
```

### Ternary Operator

It is good for simple if-else check
`condition ? true : false`

`age ? console.log("You can drive") : console.log('Grow up');`

### While and For Loops

`**DRY**` → Don’t Repeat Yourself

```jsx
// while Loop
let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

// for Loop
for(let i = 0 ; i < 10 ; i++) {
    console.log(i);
}

// infinite loop (don;t use)
for(;;) { console.log(1); }
```

## Functions

### Introduction

Function is a block of code tht that performs a task
Example → console.log() is a function that prints in console

Function Decalaration → defining a function
Function Call → calling / executing a function

`function square(number) {
    return number * number;
}`

function keyword is used to create a function
square is the name of the function
number is the parameter

### Declaring Functions

There are few ways of declaring function
`Function Declaration` `Function Expression` `Arrow Function`

`Arrow Function` is the shorter and modern way, it is ***recommended*** to use
`Function Declaration` is used when to need to use **`this`** keyword

```jsx
// Function Declaration
function name(params) {
    // statements 
}

// Function Expression
const name = function(params) {
    // statements
}

// Arrow Function
const name = (params) => {
    // statements
}
```

### Function Return

*Every function returns **`undefined`** unless mentioned*

If a function returns something it does not check what’s beneath

### Arrow Functions

`const square = (number) => {
    return number * number;
}`

We can have even shorter Arrow function if there is only return
`**const square = (*number*) => *number* * *number*;**`

If there is only one parameter we  do not need the bracket
`**const square = *number* => *number* * *number*;**`

### Parameters vs Arguments

`Parameters` → used when declaring function

`Arguments` → real values passed when making a function call

*If an argument is not sent it becomes* `**undefined**`

Inorder to not have undefined use `Default Parameters`

```jsx
const sayHi = (name, age = 0) => {
    console.log(`${name} is ${age} years old.`);
}

sayHi('Alan', 21);

const add = (a, b = 0) => {
    return a + b;
}
const result1 = add(10,2);
const result2 = add(10);
console.log(result1);
console.log(result2);
```

## Tricky Parts

### Scope

![Screenshot from 2022-08-10 16-30-08.png](JavaScript%20Mastery%2082d88ba51245462ca7e94c15ba5b303f/Screenshot_from_2022-08-10_16-30-08.png)

`**Global Scope**` → variables declared outside any function
**Advantage** → can be used throughout the program
**Disadvantage** → Remains in the memory till the end of the program

`Local Scope` → variables defined within a function

`Block Scope` → variables defined within if-else, loops etc

***var** variables can be accessed outside blocks so their usage was discontinued*

*Always declare variables in the scope where it needs to be used*

### Hoisting

Hoisting never occurs in Modern JS but is asked in interviews

***only declaration** of all variables, functions are **hoisted to the top of their scope***

*Hoisitng occurs only for `var` and `function`
Hoisitng does not occur for `let` and `const`*

***Always declare variables at the top and never depend on hoisting***

```jsx
console.log(age);    // Uncaught ReferenceError
```

```jsx
console.log(age);    // undefined
var age = 10;
```

Here only the var age is hoisted to the top of scope not the assignment

```jsx
// The Hoisted code is as follows
var age;
console.log(age);
age = 10;
```

### Closures

***Functions in JavaScript creates Closures***

Once running of a function is over the contents of the function call are dead but
*Closures lets us have access to Parent Scope from inner scope*

In JS a closure is created everytime we define a function

```jsx
const outer = () => {
    const outerVar = 'Hello!';

    const inner = () => {
        const innerVar = 'Hi!';
        console.log(outerVar, innerVar);
    }
    return inner;
}
const innerFn = outer();
innerFn();    // Hello! Hi!
```

***Closures let inner() function access outerVar variable which is in Parent Scope***

```jsx
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
```

## Strings

### Introduction

String is a primitive datatypes

Tree ways of declaraing strings → ‘’, “”, ``

*Special Feature of **Backticks** is they can be **expanded to multiple lines***

`Escape Character` → `\`

### String Length and Basic Properties

Length of a string → `string.length`

character at certain position → `string[index]`

Last letter of string → `string[string.length -1]`

### Change String Case

Lower Case → `string.toLowerCase()`

UpperCase → `string.toUpperCase()`

These methods do not affect the original string 
they return a new string so we have to store them in a new variable

***.length** is a **property** while **.toLowerCase()** is a **method***

### Searching for a Substring

`.indexOf('substring')` → returns the index of first occurence of the substring, **-1** if not

`.lastIndexOf('substring')` → returns the index from the back end first occurence 

`.includes('substring')` → returns **true** if present **false** if not

`.startsWith('substring')` → returns true if the string starts with the substring

`.endsWith('substring')` → returns true if the string ends with the substring

***includes()** is used in a regular basis it is **recommemded***

### Getting a Substring

Get substring → `.slice(startIndex, endIndex)`

*the **endIndex** is **not included***

### Split a String

Split String → `.split('splitter')`

this method returns an array of all the splits

spliter can be nothing ‘’ or a space ‘ ‘ or comma ‘,’

### Reverse Repeat and Trim a String

Reverse String → `string.split('').reverse().join('')`

this is because reverse() only works on arrays so convert them to an array

Repat String → `string.repeat(noOfTimes)`

Remove Empty Spaces at start and end → `string.trim()`

### String Excercise

```jsx
// String Excercise
// Guets
const guestList = 'Our guests are: emma, jacob, isabella, ethan';

// 1. Get a length of the string. Store it in a variable called length
const length = guestList.length;
console.log(length);

// 2. Uppercase the entire string.
// Store the result in a variable called uppercaseGuestList.
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

// 3. Check whether 'ETHAN' is on the uppercasedGuestList. 
// Store the answer in a variable called is EthanOnTheList.
// The data type of the variable must be a boolean.
const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
console.log(isEthanOnTheList);

// 4. Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'.
// Store the answer in a variable called substringGuests.
const substringGuests = uppercasedGuestList.slice(uppercasedGuestList.indexOf('EMMA'));
console.log(substringGuests);

// 5. Out of the substring you just created,
// create an array of names of people that are on the list.
// Store that array in a variable called guests.
const guests = substringGuests.split(", ");
console.log(guests);
```

## Arrays

### Introduction

Convention → use plural for naming arrays

Arrays are special data structure to stored ordered collection

JS Arrays are ***`Dynamic`*** in nature

`const months = ['January', 'February', 'March', 'April'];`

Datatype of Arrays is `Objects`

*Arrays can have values of different datatypes*

`const values = [
    'Apple',
    {name: 'John'},
    true,
    () => {}
];`

### Array Methods

`arr.push(element)` → adds new element to the end of array
*push() method **returns the new length of array** as integer*

`arr.pop()` → deletes the last element
pop() method ***returns the removed element***

`arr.shift()` → deletes the first element

`arr.unshift(element)` → adds to the start of array

### splice and slice

`arr.splice(start,noElementsToBeDeleted,elementsToBeAddedSeperatedByCommas);`

names.splice(2, 2, 'Jenny', 'Johnny');
we start from index “2”, then remove “2” elements then add elements “Jenny” “Johnny”

***splice()** is very powerful can be used to **delete or add  in between***

`arr.slice(startIndex, endIndex)` 
creates a new array contains elements from startIndex to the element before endIndex

### forEach

forEach takes a callback function

`arr.forEach((elemet, index) => { //function });`
`arr.forEach((elemet) => { //function });`

*forEach() methods returns `undefined`*

**Use Case** → when we want to work on each element of array
**Not Use Case** → when we need to **break the loop**, working with **async code**

```jsx
names.forEach((name, i) => {
    console.log(name, i);
});
```

```jsx
const logTheName = (name, i) => console.log(name, i);
names.forEach(logTheName);
```

Both snippets are same

### map

map is similar to forEach but has a return value

```jsx
const inventory = [
    { price: 5, name: 'eggs'},
    { price: 4, name: 'ham'},
    { price: 3, name: 'mayo'},
    { price: 5, name: 'bread'},
];

const prices = inventory.map((item) => item.price);
const items = inventory.map((item) => item.name);
console.log(items);  // ['eggs', 'ham', 'mayo', 'bread']
console.log(prices);  // [5, 4, 3, 5]
```

### filter

filter elements with a `callback function`

filter does not change the original array, it returns the new array

*If return of callback function is **true** then the element is added to filtered array*

```jsx
const numbers = [-10, 0, -2, 15, -36, 25];

const positiveNumber = numbers.filter((number) => {
    return number >= 0;
});

console.log(positiveNumber);  // [0, 15, 25]
```

```jsx
// Employees with 7 or more overtime hours
const employeesData = [
    {name: 'Sebastian', overtime: 5},
    {name: 'Cardy', overtime: 10},
    {name: 'Georgie', overtime: 12},
];

const rewardedEmployees = employeesData.filter((employee) => employee.overtime >= 7);
const names = rewardedEmployees.map((employee) => employee.name);
console.log(names);  // ['Cardy', 'Georgie']
```

### find

finds the first element in array that satisfies the condition

it takes a callback function

`const value = numbers.find((*number*) => *number* > 5);`

returns the first number that is greater than 5

```jsx
// First state that begins with a letter C
const states = ['Alaska', 'California', 'Colorado', 'Hawaii'];
const stateWithC = states.find((state) => state.startsWith('C'));
console.log(stateWithC);  // California
```

### includes

Checks if the element is present in array, returns true if present

`array.includes(element)`

includes() method is **case-sensitive**

### sort

sorts an array alphabetically

`arr.sort()` → sorts the original array itself

***sort() sorts the array lexicographically***
so [1,2,11] → [1,11,2]

***Sort numbers in Ascending order → `numbers.sort((a, b) => a - b);`***

### some

`array.some(function)` → checks if any element of array makes function return true

```jsx
const array = [1, 2, 3, 4, 5];

//Array Some
const greaterThan3 = (number) => number > 3;
console.log(array.some(greaterThan3));  // true
```

```jsx
console.log(array.some((number) => number > 3));
```

Both snippets are same

### every

`array.every(function)` → returns true if the function returns true for all elements

```jsx
console.log(array.every((number) => number > 3));
```

### reduce

***reduce()** computes all elements in an array and then **returns a single value***

It can be object, strings, number anything

**reduce()** takes 2 parameters → `callback function` and initial value of `accumulator`(0)

**callback()** takes 2 parameters → `accumulator` and `element`

```jsx
const total = groceryList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
```

reduce() is just concise nothing more special

## Objects and Methods

### Introduction

objects is an unordered collection of related data in form of key and value pairs

```jsx
// Introduction
const firstName = 'Johnny';

const person = {
    firstName: firstName,
    lastName: 'Cruise',
    age: 40,
    car: {
        brand: 'Toyota',
        year: 2015,
        color: 'red',
    }
}

console.log(person);
```

`firstPerson: firstPerson` can be replaced with `firstPerson`

If key value pair has same name it is replaced by the first variable with same name

### Accessing, Adding and Updating properties of an object

There are two notations → Dot Notation `.` and Bracket Notation `[]`

```jsx
console.log(person.firstName);  // Accessing
person.dog = { name: 'Fluffy', age: 2}; // Adding
person.age = 25;  // Adding
```

```jsx
console.log(person['firstName']);  // Accessing
```

Bracket Notation helps to set properties dynamically

```jsx
const property = 'age';
console.log(person[property]);
```

*If there are multiple words in the property name use “ “*

### Object Methods

Methods assigned as properties of an object

```jsx
const dog = {
    name: 'Fluffy',
    age: 2,
    bark: () => {
        console.log('Woof Woof!');
    }
}
```

Inorder to use properties of object in the method we need to use `this`
but this does not work in arrow functions

```jsx
const dog = {
    name: 'Fluffy',
    age: 2,
    listAllProperties: function() {
        console.log(this.name, this.age);
    }
}
```

### Static Object Methods

Objects Methods are used directly in object constructors 
and use the object instance as parameter

`Object.keys(objectName)` → returns array of names of all the properties

`Object.values(objectName)` → returns array of values of all the keys

`Object.entries(objectName)` → returns array of arrays [[key, value], [key, value]]

`Object.freeze(objectName)` → prevents modification, addition or removal

`Object.seal(objectName)`  → prevents adding new properties but allows modification

## Values vs Reference

### Introduction

Primitive values → Number, String, Boolean

Complex values → Objects, Arrays

***Primitive Values have Values
Complex Values have Reference***

```jsx
// Copying string (Primitive)
let firstPerson = 'Mark';
let secondPerson = firstPerson;
firstPerson = 'Austin';
console.log(firstPerson);  // Austin
console.log(secondPerson); // Mark
```

```jsx
// Copying Objects (Comlex)
const person = {
    firstName: 'Jon',
    lastName: 'Snow'
};
const otherPerson = person;
person.firstName = 'Johnny';
console.log(person);      // {firstName: 'Johnny', lastName: 'Snow'}
console.log(otherPerson); // {firstName: 'Johnny', lastName: 'Snow'}
```

### Explanation

When a variable is assigned primitive value it just copies the value 
for complex value it is given reference of the object location in memory

```jsx
// Copying Objects
const person = {
    firstName: 'Jon',
    lastName: 'Snow'
};
const otherPerson = person;
person.firstName = 'Johnny';
console.log(person);      // {firstName: 'Johnny', lastName: 'Snow'}
console.log(otherPerson); // {firstName: 'Johnny', lastName: 'Snow'}
console.log(person === otherPerson); // true
```

Both person and otherPerson points to the same location in memory

### Shallow Cloning

- **Array Cloning**
    
    Way 1: Spread Operator → `...arrayName`
    
    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    const copiedNumbers = numbers;
    const newNumbers = [...numbers];
    console.log(numbers === copiedNumbers); // true
    console.log(numbers === newNumbers);    // false
    ```
    
    Way 2: Array Slice → `array.slice()`
    
    slice() without arguments copies all the elements
    
    ```jsx
    const numbers = [1, 2, 3, 4, 5];
    const copiedNumbers = numbers;
    const newNumbers = numbers.slice();
    console.log(numbers === copiedNumbers); // true
    console.log(numbers === newNumbers);    // false
    ```
    
- **Object Cloning**
    
    Way 1: Spread Operator → `...object`
    
    ```jsx
    const person = {name: "john", age: 20};
    const otherPerson = { ...person };
    person.age = 22;
    console.log(person);      // {name: 'john', age: 22}
    console.log(otherPerson); // {name: 'john', age: 20}
    ```
    
    Way 2: Object Assign → `Object.assign({}, objectName)`
    
    Takes 2 parameters→ where we want to store which is {} and the object to be copied
    
    ```jsx
    // 2nd Way: Object.assign()
    const person = {name: "john", age: 20};
    const otherPerson = Object.assign({}, person);
    person.age = 22;
    console.log(person);      // {name: 'john', age: 22}
    console.log(otherPerson); // {name: 'john', age: 20}
    ```
    

***Spread Operator `...`** is preferred as it is more cleaner*

### Deep Cloning

If objects have ***nested objects*** then even if we shallow clone them 
the nested object has reference to the same location

- Drawback of Shallow Cloning
    
    ```jsx
    const person = {
        firstName: 'Emma',
        car: {
            brand: 'BMW',
            color: 'blue',
            wheels: 4
        }
    }
    const newPerson = {...person};
    newPerson.car.color = 'red';
    console.log(person.car);    // red
    console.log(newPerson.car); // red
    ```
    

`JSON.stringify(object)` → converts JavaScript objects to String

`JSON.parse(string)` → converts string to JavaScript object

```jsx
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
console.log(person.car);    // blue
console.log(newPerson.car); // red
```

## DOM

### Introduction

DOM → Document Object Model
It is a standard to access and share documents over the internet

### Selecting Elements

Emmet Shortcuts → `h1#id-name`, `h2.class-name`

document holds everything in the HTML page

**Element ID** → `document.getElementById('element-id');`
this is the most efficient way select specific element with **id property**

**Tag Name** → `document.getElementsByTagName('h1')`
here it is *Elements* so it returns an array of elements

**Class Name** → `document.getElementsByClassName('class-name')`
it is used for selecting multiple element having same **class property**

**Query Selector All** → `document.querySelectorAll('h2.test');`
selects all *<h2> with class=’test’ ,* SelectorAll selects mulitple elements
`document.querySelector(’h1#id-name’);` for specific element

### Element Properties and Methods
