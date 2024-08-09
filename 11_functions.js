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
// console.log(loginUserMessage()); // if we don't pass any argument then we will get "undefined"


// --------- more on functions -------------

function calculateCartPrice(val1, val2, ...num1) {        // using rest in function parameter
  // rest in function
  return num1;
}

// console.log(calculateCartPrice(200, 400, 600, 1000));

const user = {                          // passing object as parameter
  username: "aryan",
  price: "199",
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)            
// handleObject({
//     username: "Sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondArray(getArray) {         // passing array as parameter
  return getArray[1];
}

// console.log(returnSecondArray(myNewArray));
console.log(returnSecondArray([300, 500, 800, 900]));

