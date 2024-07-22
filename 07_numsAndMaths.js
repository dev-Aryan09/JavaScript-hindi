const score = 400;

const balance = new Number(100); // strictly saying this is a number
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(1));    // returns a string
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(5));
// console.log(otherNumber.toPrecision(6));

const hundreds = 1000000;
// console.log(hundreds);
// console.log(hundreds.toLocaleString('en-IN'));  // The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone

// ++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,3,0,2,1));
// console.log(Math.max(4,2,0,5));

// console.log(Math.random());               // gives a random integer b/w 0 & 1
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
