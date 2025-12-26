"use strict";
//scope and usage of unknown type narrow
/*
let value : unknown;

if(typeof value === "string"){
    value.toUpperCase();
}


 

function checks(valu : any){
     return valu.toUpperCase();
}


// console.log(checks());
console.log(checks("hello"));



 
/*
type admin = {role : "admin"; access:  string[] };
type user = { role: "User"; email : string};

//type narrowing
//First write a function

function CheckRole (person : admin | user){
    if("access" in person){
        console.log("admin access : ", person.access)
    }
    else{
        console.log("User email: ", person.email);
    }
     
}

const person : user = {
    role : "User",
    email : "Hr34@gmail.com"
}


const role = CheckRole(person);

*/ 
