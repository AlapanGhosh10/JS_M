// // Introduction
// const sum = (a,b) => a + b;
// const total = `The sum is ${sum(4,5)}`;
// console.log(total);

// // String length
// const name = "Alan";
// console.log(name.length);

// const firstLetter = name[0];
// const lastLetter = name[name.length - 1];
// console.log(firstLetter, lastLetter);

// // Change String Case
// const mixedCase = "Hello! How are you?";
// const lowerCaseString = mixedCase.toLowerCase();
// const upperCaseString = mixedCase.toUpperCase();
// console.log(lowerCaseString, upperCaseString);

// // Searching for a Substring
// const hobbies = 'I like HTML, CSS and JavaScript.';

// // indexOf()
// const index = hobbies.indexOf('JavaScript');
// console.log(index);

// // includes() 
// const includesJavaScript = hobbies.includes('JavaScript');
// console.log(includesJavaScript);
// console.log(hobbies.includes('fwef'));

// // startsWith()
// console.log(hobbies.startsWith('I'));

// // endsWith()
// console.log(hobbies.endsWith('JavaScript.'));

// // Getting a Substring
// const exampleString = 'hotdog';

// // slice()
// const dog = exampleString.slice(3, 6);
// console.log(dog);

// // Split a String
// const exampleString = 'The quick brown fox jumps over the lazy dog';

// // split()
// const letters = console.log(exampleString.split(' '));
// console.log(letters);

// // Reverse a string
// const exampleString = 'test';

// const reversedString = exampleString.split('').reverse().join('');
// console.log(reversedString);

// // repeat()
// const dogSays = 'woof';
// console.log(dogSays.repeat(5));

// // trim()
// const email = ' wefef@mail.com   ';
// console.log(email.trim());

// // String Excercise
// // Guets
// const guestList = 'Our guests are: emma, jacob, isabella, ethan';

// // 1. Get a length of the string. Store it in a variable called length
// const length = guestList.length;
// console.log(length);

// // 2. Uppercase the entire string.
// // Store the result in a variable called uppercaseGuestList.
// const uppercasedGuestList = guestList.toUpperCase();
// console.log(uppercasedGuestList);

// // 3. Check whether 'ETHAN' is on the uppercasedGuestList. 
// // Store the answer in a variable called is EthanOnTheList.
// // The data type of the variable must be a boolean.
// const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
// console.log(isEthanOnTheList);

// // 4. Create a substring that only contains the following:
// // 'EMMA, JACOB, ISABELLA, ETHAN'.
// // Store the answer in a variable called substringGuests.
// const substringGuests = uppercasedGuestList.slice(uppercasedGuestList.indexOf('EMMA'));
// console.log(substringGuests);

// // 5. Out of the substring you just created,
// // create an array of names of people that are on the list.
// // Store that array in a variable called guests.
// const guests = substringGuests.split(", ");
// console.log(guests);