const user = {
  username: "hitesh",
  price: "999",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);            // 'this' keyword tells us the current context
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // here this returns empty object

// function chai() {
//   let username = "aryan";
//   console.log(this.username);
// }
// chai();

// const chai = function () {
//   let username = "aryan";
//   console.log(this.username);
// };
// chai();


// -------------------------------- Arrow function -------------------------------------

// another way of declaring a function

const chai = () => {
  let username = "hitesh";
  console.log(this.username);
};
// chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwo(3, 4));

const add = (a, b) => a + b;              // implicit return 
// console.log(add(5, 6));

const obj = () => ( {username: "hitesh"})
console.log(obj());
