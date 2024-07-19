const accountId = 144553;
let accountEmail = "aryan@google.com"
var accountPswd = "12345"                     // var is old practice
accountCity = "Jaipur" // not a good practice
let accountState;

//accountId = 2 // not allowed

/*
Prefer not to use var
because of issue in block and functional scope
*/

accountEmail = "hc@hc.com"
accountPswd = "21212121"
// accountId = "Bangluru"  constant variable can't be changed

console.table([accountEmail, accountPswd, accountCity, accountState ]); 

//using "console.table([]) we can print multiple values
