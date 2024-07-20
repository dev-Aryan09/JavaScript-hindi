const name = "aryan"
const repoCount = 50

// console.log(name + repoCount + " value");     // not good practice in present days scenario

// console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);    // ** GOOD practice, use case of template literals

const gameName = new String('aryans')    // another way of declaring string, this will give object
// console.log(gameName);
// console.log(gameName[0]);           // indexing
// console.log(gameName.__proto__);      

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)       // returns a part of the original string as a new string
// console.log(newString);

const anotherString = gameName.slice(-3, 4)    //  returns a part of the original string as a new string, but we can use -ve number too
// console.log(anotherString);

const newStringOne = "   aryan   "
// console.log(newStringOne);
// console.log(newStringOne.trim());    // removes white space from start and end of string

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'));        // searches a value at first occurance in the string and returns a newstring with the value replaced

// console.log(url.includes('aryan'));      // finds the given value exists in the string or not, returns true & false


// practice more & more and explore other string methods to improve knowledge.