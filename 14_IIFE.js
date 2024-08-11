// Immediately Invoked Function Expression (IIFE)
// A JavaScript IIFE is a function that runs the moment it is invoked or called in the JavaScript event loop.
// commonly used to create private scope in JS.
// To avoide variables/declarations of global scope.

(function chai() {
    // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');
