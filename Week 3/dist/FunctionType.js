"use strict";
var userDetails = function (id, user) {
    console.log("User id is ".concat(id, ", name is ").concat(user.name, " and age is ").concat(user.age));
};
var sayHello = function (user) {
    console.log("Hello ".concat(user.age > 50 ? "Sir" : "Mr.", " ").concat(user.name));
};
/*
const myFunc = (a : string, b: string, c?: string)  => {
    console.log(`Hello ${a}, ${b}`);
}

myFunc('A', 'B');



let myFunc : Function;

myFunc = ()  =>{
    console.log("Hello");
}



*/ 
