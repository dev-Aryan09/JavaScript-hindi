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

console.log(a);
// console.log(b);
console.log(c);
