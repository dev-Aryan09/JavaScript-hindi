const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    // console.log(item);
  return item;                             //  not return any value instead gives undefined
});

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => {
    return num > 4 && num > 6
})
// console.log(newNums);

const newNums2 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});

// console.log(newNums2);


// map() method

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => num + 10);

const newNums3 = myNumbers
              .map( (num) => num * 10)
              .map( (num) => num + 1)
              .filter( (num) => num>= 40)
// console.log(newNums3);


// reduce()

const myNums2 = [1,2,3]

// const myTotal = myNums2.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

const myTotal = myNums2.reduce( (acc, curval) => acc + curval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(priceToPay);
