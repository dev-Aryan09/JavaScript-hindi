// ---------------------- Truthy and Falsy values --------------------------------

// Falsy values :- They are treated as false if taken in boolean context.
// These are false, 0, -0, 0n(BigInt), ""(empty string), null, undefined, NaN.

// Truthy values :- They are treated as true if taken in boolean context.
// These are [], {}, function() {} and everything else.
// If we take falsy values in string then they will considered as truthy values.

if (false) {                          // falsy value
    console.log("execution 1");
  }
  
  if ("false") {                         // truthy value
    // console.log("execution 2");    
  }
  
  const arr = [];                             // how to check condition of empty array
  if (arr.length === 0) {
    // console.log("Array is empty");
  }
  
  const emptyObj = {};                         // how to check condition of empty object
  if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
  }
  