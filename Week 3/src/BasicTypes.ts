 
//Normal varibales 
let numbers   = [1,2,3];

const country  = "I love Cat";
console.log(country);

let b : string | number ;
let a: (string | number) [] = []


b = 'sumit';

a.push('Sumit', 4 );
console.log(a)

//Object

let c : {
    name : string, 
    age: number,
    adult: boolean
};

c = {
    name :  'Sagor',
    age : 34,
    adult : true
};

let d : object ;

d = [1,2,3,65];
console.log(d)

console.log(c)

//Dynamic type

let val  : any

val = 5;
val = 'Sumit';

let valu: any[] = [];
valu.push("Bangladesh");

valu.push(34);

let obj: {
    name : any,
    age : any
};

obj = {
    name : 'Bangladesh',
    age : 45 
}

 





/*


//Tuples for key numbers values.

// let user : [number, string] = [1,'Mosh'];
// user.push(1);
// console.log 


let sales= 123_456_789;
let course  ='TypeScript';
let is_published = true;
let level;
level =1;
level ='a';

function render(document ){
    console.log(document);
}

*/

 


// // console.log("Hello World");

// let age : number = 20;
// if (age<50) {
//     age +=10;
// }

// function greet(name: string): string {
//     return "Hello " + name;




// }

// console.log(greet("Sagor"));
