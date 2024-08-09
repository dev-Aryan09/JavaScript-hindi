// Functions and parameters
// A function is a block of code used to perform a task
// Once a function is created then it can be used many times.

function sayMyName() {
  console.log("a");
  console.log("r");
  console.log("y");
  console.log("a");
  console.log("n");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2); // console only do printing
// }

// const result = addTwoNumbers(3, 4);
// console.log(`Result: ${result}`); // this will give "undefined"

// function addTwoNumbers(number1, number2) {
//   //   let result = number1 + number2;
//   //   return result;                       // return the result after the execution of function
//   return number1 + number2;
// }

// const result = addTwoNumbers(3, 4);
// console.log(`Result: ${result}`); //  this will give output

function loginUserMessage(username) {
  if (username === undefined) {
    // also  -- !username --, here ! = logical not operator
    console.log("Please enter a username");
  }
  return;

  return `${username} just logged in`;
}

// console.log( loginUserMessage("aryan"));
console.log(loginUserMessage()); // if we don't pass any argument then we will get "undefined"
