//callbackfunction 

let hello = (val) => { `hello ${val}` }



// Simple example
// setTimeout(() => {
//     console.log('This runs after 2 seconds');
// }, 2000);

// // Real scenario: Reading a file
// fs.readFile('data.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.error('Error reading file:', error);
//         return;
//     }
//     console.log('File content:', data);
// });


// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:


// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// let x = sumAll(1, 2, 3, 6, 7, 8, 5)

// console.log(x);

// function sumAll() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;

//Strict Mode 
// ❌ WITHOUT strict mode (BAD)
// function createUser() {
//     username = "John"; // Oops! Forgot 'let/const/var'
//     // Creates global variable 'username' (pollutes global scope)
// }
// createUser();
// console.log(username); // "John" 

// "use strict";

// function createUser() {
//     username = "John"; // ❌ Throws: ReferenceError
//     // Must declare: let username = "John";
// }
// // console.log(username);
// createUser();









//Function 
//callback function 


// let score = [10, 20, 30];

// function addBonus() {
//     score = [5]; // 😱 Oops! Meant to do score.push(5)
//     // Now the entire original array is gone!
// }

// addBonus();
// console.log(score); // [5] - your data is lost!



// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback(); // calling the callback function
// }

// function sayBye() {
//     console.log("Goodbye!");
// }

// greet("Sagor", sayBye);






//arrow function 

/*
const calculationPrice = (price, discountpercentage) => {

    let discount = price * (discountpercentage / 100);
    return price - discount;
}

console.log(calculationPrice(950, 10));




const add = (a, b) => a + b;
const sum = (a, b, c) => a + b + c;
console.log(` The sum is here $${sum(1, 2, 3)}`);

*/






//Key object value 

//Scope defines from where varibale can access! (where variables live)
//Global Scope 

/*
const API_KEY = "1245@";

function ApiConnect() {
    console.log(API_KEY);
    // console.log(newApi_Key);
}

//Local scope

function connectToApi() {
    let newApi_Key = "abc12345";
    console.log(newApi_Key);

    function newconnect() {
        console.log(newApi_Key);
    }
    newconnect();

}

let value1 = ApiConnect();
//let value2 = connectToApi();
let value3 = connectToApi();

//block scope 

if (true) {
    let Api_pass = "1456hti";
    console.log(Api_pass);



}

*/


// console.log(Api_pass);


// function calculatePizzaPrice(size, toppings) {
//     let pizzaSizeMultiplier = 1;
//     let basePrice = 10;

//     //checking type safety check

//     if (typeof size !== 'string' || typeof toppings !== 'number') {
//         console.error("Invalid input types");
//         return 0;
//     } else {

//         if (size == "medium") {
//             pizzaSizeMultiplier = 1.5;
//         } else if (size == "large") {
//             pizzaSizeMultiplier = 2;
//         }

//         let addTopping = toppings * 2;

//         let pizzaPrize = (basePrice * pizzaSizeMultiplier) + addTopping;

//         return pizzaPrize;
//     }



// }
// let orderPizza = calculatePizzaPrice("large", "JKDL")

// console.log(`Your pizza costs : $${orderPizza}`)