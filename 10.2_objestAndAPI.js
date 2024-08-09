// object destructuring
// Destructuring is a technique that allows you to unpack values from arrays or objects into separate variables.

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// -------------------------------------------- A P I  introduction---------------------------------------------------
// Application Progamming Interface
// An application programming interface is a way for two or more computer programs or components to communicate with each other.

// JSON format
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

// {
//     "name": "aryan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
