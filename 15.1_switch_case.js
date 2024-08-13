// The switch statement executes a block of code depending on different cases. 
//The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed.

let month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;                              // to avoide further execution of code after a valid case, use 'break'. 
  case 2:
    console.log("Febuary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");

  default:
    console.log("default case match");
    
    break;
}

