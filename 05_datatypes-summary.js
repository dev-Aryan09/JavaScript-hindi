// Primitive datatypes

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

let id = Symbol("123");
let anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 12323423987478623989824982n; // bigint


// Non - primitive datatypes

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "aryan",
  age: 22,
};


let myFunction = function() {
    console.log("hello world");
}


// +++++++++++++++++++++++++++++++++++ STACK and HEAP MEMORY +++++++++++++++++++++++++++++++++++++++++
// Stack (contains Primitive datatypes), Heap (contains Non-Primitive datatypes)

// Stack memory gives copy of value

// Heap value gives reference of original value

let myYouTubename = "HiteshChaudharydotcom"

let anothername = myYouTubename
anothername = "chaiaurcode"

// console.log(myYouTubename);
// console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}
// console.log(userOne);

let userTwo = userOne
// console.log(userOne);

userTwo.email = "hitesh@google.com"

console.log(userOne);
console.log(userTwo);