//   ------------------------------------------------------------ A R R A Y  --------------------------------------------------------------------

const myArray = [0, 1, 3, 4, 5]
// console.log(myArray);
// array index start from 0
// console.log(myArray[2]);     // accessing element of array through indexing

const myArray2 = new Array(9, 8, 7, 6, 5)
// console.log(myArray2);
// console.log(myArray2[3]);

// ---------- methods------------------

// myArray.push(8,9)           // add an element from end
// console.log(myArray);
// myArray.pop()               // removes an element from end
// console.log(myArray);

// myArray.unshift(2,3)        // add an element from start
// console.log(myArray);
// myArray.shift()            // removes an element from start
// console.log(myArray);       

// console.log(myArray.includes(11));
// console.log(myArray.indexOf(2));

const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

console.log("A", myArray);

const myn1 = myArray.slice(1,3)     // returns a COPY of section of an array
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C", myArray);         // returns a section of an array, NOT a copy

// NOTE :- 1. The major difference between slice() and splice() is that slice returns a copy of an array and splice returns a section of an array.
//         2. Splice will change the original array.