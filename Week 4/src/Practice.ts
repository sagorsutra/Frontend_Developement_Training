
 
// Create a safe JSON parser
// Takes unknown input, returns parsed object or null
// Use try-catch with proper types


























 

// What's the problem here? Fix it.
function process(value: unknown) {
  if(typeof value ==="number"){
        return value.toString();;
    }
}



3.2
function txt(str : unknown): boolean{
    if(typeof str ==="string" && str.length>5){
        return true;
    }
    else {
        return false
    }
}

 
type str = unknown;

function txt(st : str){
    if(typeof st ==="string" && st.length>5){
        return true;
    }
    else {
        return false
    }
}




type UserRoles = "admin" |"user" | "guest";

const roles :  UserRoles[] = ["admin","user" ,"guest"];

roles.push("admin");



// Fix the type error
const mixed = [1, "two", 3, "four"];
const first: number = mixed[0] as number; //  when i know the exact type
const second: string = mixed[1] as string;  


const arr = (val : number[]) : number[] =>
{
//let nArr : number[] = new Array<number>();

    val.filter(num => num %2 === 0);

    // val.forEach(element => {
    //     if(element%2==0){
    //         nArr.push(element);
    //     }
    // });

    return val;
}

// type trafficLight ={  This is a object type but i've to make a literal type.
//     Red : string ,
//     green : string,
//     yellow : string
// }
type trafficLight = "red" | "greem" | "yellow";

const trafficFunc = (lights : trafficLight) =>{
    console.log(`the color is : ${lights}`);

}

console.log(trafficFunc);
// function traf(trafficLight) {
    
// }




//Red : string , green : string, yellow : string


 
// What's wrong here? Fix it.
type Point = { x: number; y: number; z?:number};
let point: Point = { x: 10, y: 20, z: 30 };
 
type User = {
    id : number;
    name : string;
    email : string;
    age : number;
}

const user1 : User = {
    id : 54,
    name: "sagor",
    email : "sagoremil.com",
    age : 45
}





//  let describe : (value : number | string) => number | string;

//  describe = (val : number | string) => {
//     return val;
//  }

function describe(value: number | string) :  string {
     if(typeof value === "number"){
        return `Number : ${value}`;
     }
     else{
         return `String : ${value}`;
     }
}


let userId : string | number;
 
userId = 123;
userId = "USER_123";  

let stat;
status = "active";
stat = 404;  
*/
 

 



 
type ApiUser = {
    id?: number;
    name?: string;
    email?: string | null;
};

// const user: ApiUser = {
//         id: 212,
//         name: "Sagor",
//         email: "Sagorsutra16@gmail.com"
// };
// console.log(user);

function processUser(user: ApiUser){
    if(user.email!= null){
        const upperEmail = user.email.toUpperCase();
        console.log(upperEmail);
    }
    else{
        console.log("No email found");
    }

}






















//In JavaScript, strings are like read-only documents. You cannot edit the original document; you can only print a new copy that is modified.


//Q1
let value: unknown = "Sagor";
 
if(typeof value === "string"){
    console.log("Enter in the if conditon");
    value = value.toUpperCase(); // ❌ error
}
console.log(value)

// Fix it properly (no any)



//Q2
function printId(id: number | string) {
    if (typeof id === "string"){
        console.log(id.toUpperCase());
    }
    
}



//Q3
interface ApiService<T> {
    get(url: string): Promise<T>;
}

   class HttpService implements ApiService<User> {
    async get(url: string): Promise<User> {
        return { name: "Sagor" };
    }
}





//Q4
abstract class BaseComponent {
    abstract render(): void;

    log() {
        console.log("Rendered");
    }
}

class HomeComponent extends BaseComponent {
    render(): void {
        
    }
}     



//Q5
type User = {
    id?: number;
    name?: string;
    password?: string;
};


type withOutPass = Omit<User,'password'>;
type PartialUser = Partial<User>;





type Roles = "admin" | "user" | "guest";
type AdminOnly = Extract<Roles,'admin'>;


interface Us {
    name: string;
}

interface Us {
    age: number;
}

interface Us {
    name : string;
    age: number;
}



//gemini question

 
// You have a student object. You need to change a value and remove a property.

// first of all ts wont allow you to change variables , because it'll effect in the later code.
// So when you define thing at the initial phase then you can change later(make a fixed rule for a object) , it'll prevent unnecessary error 
 
type student ={
    name : string;
    isGraduated? : boolean;
};

 let student : student= {
    name: "New Student",
    isGraduated: false  // i can't make change here directly in a object. before that i've to mention that value could be anything in the declaration
};// but in the js you don't have to make rules, you just needed to use the delete variable.

student.name = "Prant";
delete student.isGraduated;



*/