// const tinderUser = new Object()    // singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "aryan",
      lastname: "saini",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = Object.assign({}, obj1, obj2, obj3);     // merging objects using assign()
// console.log(obj4);

const obj4 = {...obj1, ...obj2, ...obj3}      // 
// console.log(obj4);


const users = [         // array of objects
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "someone@gmail.com"
    }
]

// console.log(users);
// console.log(users[1].id);

console.log(tinderUser);

console.log(Object.keys(tinderUser));   // output will be in the form of an array
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));    // will convert each key-value pair in an individual array

console.log(tinderUser.hasOwnProperty('name'));  // wil check the existance of property

