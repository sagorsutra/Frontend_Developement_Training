//Implement your own forEach()

const arr = [1, 2, 3, 4, 5];

function transArr(arr, transf) {
    transf(arr.map(val => val * 2));
}


transArr(arr, )
















//1. Level 1

function checkOdd(num, callback) {
    let sqaure = num * num;
    return callback(sqaure)

}

//arraow version 

const squareNum = (num, cb) => cb(num * num)
squareNum(5, square => con)


checkOdd(4, sqaure => {
    console.log("Sqaure : ", sqaure);
});


//2.


function checkStr(str, callback) {
    if (str.includes('a')) return callback(true);
    else {
        return callback(false);
    }
}

checkStr("Hole", function(answer) {
    console.log(answer);
})

//3.Multiply array numbers --> retrieve the 

const arr = [1, 2, 3, 4, 5]

function multiplyArr(arr, multiplyer) {
    const nArr = arr.map(val => val * 2)
    return multiplyer(nArr) // let const = 
}


function multiplyArr(arr, multiplyer) { // Multiplication of array number 
    let product = 1;
    arr.forEach(num => {
        num = product * num;
    });

}

multiplyArr(arr, ans => console.log(ans));





// Exercise 1: Create a calculator

// function that takes two numbers and a callback operation


const prompt = require("prompt-sync")();

let val1 = Number(prompt("Enter the first value (give input in decending oder): "));
let val2 = Number(prompt("Enter the Second value: "));


function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multi = (a, b) => a * b;
const div = (a, b) => a / b;


console.log(calculate(val1, val2, add));
console.log(calculate(val1, val2, minus));
console.log(calculate(val1, val2, multi));
console.log(calculate(val1, val2, div));



//diff between normal and callback function.

function normalFunc() {
    console.log("Hello forest");
}

normalFunc();

function asyncFunc(callback) {
    setTimeout(callback, 1000);
}

asyncFunc(function() {
    console.log("Hello Sea");
})


//comparing two call backfunction

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework...`);
    setTimeout(() => {
        console.log(`Just finished my ${subject} homework`);
        callback();
    }, 6000);

}
doHomework("math", function() {
    console.log("No more study for today");
});




function orderPizza(type, callback) { //Just worte the function 
    console.log(`  Cooking ${type} pizza...`);

    console.log(`  ${type} pizza ready!`);
    callback(); // Call the callback

}

//Now calling the function
orderPizza("Pepperoni", function() {
    console.log("3, ding dong eat this pizza");
})



const cart = [
    { item: "Shirt", price: 25, quantity: 2 },
    { item: "Pants", price: 40, quantity: 1 },
    { item: "Shoes", price: 60, quantity: 1 }
];

const total = cart.reduce((sum, product) => {
        return sum + (product.price * product.quantity);
    }, 0

);

const number = [1, 2, 3, 4];

const sum = number.reduce((acc, current) => {
        console.log(`current: ${acc} , current: ${current}`);
        return acc + current;
    }, 0

);



//callbackfunction 

//let hello = (val) => { `hello ${val}` }

//Normal function vs arrow function 


setTimeout(() => console.log("done"), 1000)


setTimeout(function() {
    console.log("done");
}, 1000);


setTimeout(() => console.log("done"), 1000);







Array.map(function(item) {
    return item * 2;
});

array.map(item => item * 2);

array.filter(user => user.active)

array.filter(function(user) {
    return user.active;
})

let users = [
    { name: "A", active: true },
    { name: "B", active: false }
];

//bring me the active user 
users.filter(user => user.active)




// Simple example
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);

// Real scenario: Reading a file
fs.readFile('data.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    console.log('File content:', data);
});


// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).

// This way you can simply use a function to find (for instance) the highest value in a list of numbers:


x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

let x = sumAll(1, 2, 3, 6, 7, 8, 5)

console.log(x);

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;

    //    Strict Mode WITHOUT strict mode(BAD)

    function createUser() {
        username = "John"; // Oops! Forgot 'let/const/var'
        // Creates global variable 'username' (pollutes global scope)
    }
    createUser();
    console.log(username); // "John" 

    "use strict";

    function createUser() {
        username = "John"; //   Throws: ReferenceError
        // Must declare: let username = "John";
    }
    // console.log(username);
    createUser();









    // Function
    // callback

    // function


    let score = [10, 20, 30];

    function addBonus() {
        score = [5]; // 😱 Oops! Meant to do score.push(5)
        // Now the entire original array is gone!
    }

    addBonus();
    console.log(score); // [5] - your data is lost!



    function greet(name, callback) {
        console.log("Hello " + name);
        callback(); // calling the callback function
    }

    function sayBye() {
        console.log("Goodbye!");
    }

    greet("Sagor", sayBye);






    //arrow function 


    const calculationPrice = (price, discountpercentage) => {

        let discount = price * (discountpercentage / 100);
        return price - discount;
    }

    console.log(calculationPrice(950, 10));




    const add = (a, b) => a + b;
    const sum = (a, b, c) => a + b + c;
    console.log(` The sum is here $${sum(1, 2, 3)}`);








    //Key object value 

    //Scope defines from where varibale can access! (where variables live)
    //Global Scope 


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




    console.log(Api_pass);


    function calculatePizzaPrice(size, toppings) {
        let pizzaSizeMultiplier = 1;
        let basePrice = 10;

        // checking type safety check

        if (typeof size !== 'string' || typeof toppings !== 'number') {
            console.error("Invalid input types");
            return 0;
        } else {

            if (size == "medium") {
                pizzaSizeMultiplier = 1.5;
            } else if (size == "large") {
                pizzaSizeMultiplier = 2;
            }

            let addTopping = toppings * 2;

            let pizzaPrize = (basePrice * pizzaSizeMultiplier) + addTopping;

            return pizzaPrize;
        }



    }
    let orderPizza = calculatePizzaPrice("large", "JKDL")

    console.log(`Your pizza costs : $${orderPizza}`)



    *
    /