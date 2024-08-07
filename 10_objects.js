// singleton
// Object.create  // constructor method

// object literal

const mySym = Symbol("key1");
// console.log(typeof mySym);

const jsUser = {
  name: "aryan",
  "full name": "aryan saini",
  [mySym]: "key1",
  age: 18,
  location: "Sikar",
  email: "aryan@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);            // Accessing values from keys
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.age = 19; // updapating the existing value

// Object.freeze(jsUser)    // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

jsUser.age = 20;
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello js user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());