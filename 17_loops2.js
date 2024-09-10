// while loop

let index = 0;
while (index <= 10) {
  //   console.log(`Value of index is ${index}`);
  index = index + 2;
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  //   console.log(`Value of index is ${myArray[arr]}`);
  arr = arr + 1;
}

let score = 11;

do {
  // console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

//                       -------------------------------------------------------------

// for of loop

const arr1 = [1, 2, 3, 4, 5];

for (const val of arr1) {
  // console.log(val);
}

const greetings = "Hello World!"

for (const greet of greetings) {
  if(greet == " "){
    // console.log("white space detected");
    continue
  }
  // console.log(greet);
}


// Map keyword
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set("IN","India") 
map.set("US","United States") 
map.set("Fr","France") 

// console.log(map);

for (const [key,value] of map) {
//   console.log(key);
//   console.log(value);
//   console.log(key,":-" ,value);
}


