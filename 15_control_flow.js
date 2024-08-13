// -------------------------------------- Control Flow -------------------------------------------

// if and if-else

// const isUserLoggedIn = true;
// const temperature = 51;

// if (temperature < 50) {
//   console.log("less than 50");
// } else {                                           // else will execute when all the above conditions become false
//   console.log("temperature is greater than 50");
// }

// console.log("always execute");  // because this is outside of if and else

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//   let power = "fly";
//   console.log(`Use power: ${power}`);
// }

// console.log(`Use power: ${power}`);      // gives ERROR because power is defined inside if so is can't be accessed outside the scope.

const balance = 1000;

// if(balance > 500) console.log("test");  // implicit scope

// if (balance < 500) {                        //  nested if-else
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 900");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {                    // && --> logical and operator
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {        // || -> logical or operator
  console.log("User logged in");
}
