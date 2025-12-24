type User = { name: string };
type Admin = { name: string; role: "admin" };

function isAdmin(person: User | Admin): person is Admin {
    return (person as Admin).role === "admin";   //Type Assertion
}

function printRole(person: User | Admin) {
    if (isAdmin(person)) {
        console.log(person.role); // ✅ Admin
    }
}
 




































function processResponseBad(response: any) {
    console.log(response.data.name.toUpperCase()); 
    // Runtime error হতে পারে যদি data বা name না থাকে
}

function processResponseGood(response: unknown) {
    // টাইপ চেক ছাড়া কিছু করা যাবে না
    if (typeof response === "object" && 
        response !== null && 
        "data" in response &&
        typeof (response as any).data === "object" &&
        (response as any).data !== null &&
        "name" in (response as any).data) {
        
        console.log(((response as any).data as any).name.toUpperCase());
    }
}


interface ApiResponse {
    data: {
        name: string;
    };
}

function isApiResponse(obj: unknown): obj is ApiResponse {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "data" in obj &&
        typeof (obj as any).data === "object" &&
        (obj as any).data !== null &&
        "name" in (obj as any).data &&
        typeof (obj as any).data.name === "string"
    );
}

function processResponseBest(response: unknown) {
    if (isApiResponse(response)) {
        console.log(response.data.name.toUpperCase()); // Type-safe
    }
}


/*
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

let d : object;

d = [1,2,3,65];
console.log(d)

console.log(c)

//Dynamic type

let val  : any

val = 5;
val = 'Sumit';

let valu: any[] = [];   // declaring type a arrray -> let val : any[] = []
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
