// Dates and time

let myDate = new Date()          // declaration of date
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023, 0, 23)       // YYYY, MM, DD
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)    // YYYY, MM, DD, HH, mins   
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")        // Indian standard  
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp, "milli seconds");     // in milli seconds 

// console.log(Math.floor(Date.now()/1000), "seconds");     // in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {       // we can define object in this way inside toLocalString() method
    weekday: "long"
})