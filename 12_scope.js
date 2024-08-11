// SCOPE determines the accessibility of variables or functions in different parts of the code

// var c = 300; // var declaration not includes in block scoping

// let a = 10;
// const b = 20;
// var c = 30;

let a = 300; // global scope

if (true) {
  // block scope
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// -------------- nested scope--------------

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one();

if (true) {
  const username = "aryan";
  if (username === "aryan") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);      // will returns an error because username is defined inside the scope of if.

// ++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

addOne();                            // this will work too
function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  // Function expression
  return num + 2;
};

addTwo(2);
