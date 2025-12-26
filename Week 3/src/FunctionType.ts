

let UserDetails : (id: number | string , userInfo: {
    name : string,
    age : number
}) => void; 


UserDetails = (id : number | string , user: {
    name : string,
    age : number
}) => {

}
 

let add: (x: number, y: number) => number |string;

add = (a: number , b: number ) =>{
    return a+b;
}


let calculation : (x : number , y:number , z: string) => number;

calculation = (a: number, b: number , c: string) =>{
    if(c==="add"){
        return a+b;
    }else{
        return a-b;
    }
}

 




// ==========================> Function Signature


let UserDetails : (id: number | string , userInfo: {
    name : string,
    age : number
}) => void; 


UserDetails= (id : number | string , user: {
    name : string,
    age : number
}) => {
    console.log();
}




//========================>>> Type aliassss

type stringOrNum = string | number;
type userType = {name: string, age: number }



 const userDetails = (
    id: stringOrNum ,
    user :  userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);

};

const sayHello = (user: userType)=> {
    console.log(`Hello ${user.age> 50? "Sir" : "Mr."} ${user.name}`);
}


//||||--> comparing code 

type stringOrNum = string | number;
type userdetail ={ name: string , age : number }
 const userDetails = (
    id: string | number ,
    user : userdetail
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);

};

const sayHello = (user: {name : string ; age: number})=> {
    console.log(`Hello ${user.age> 50? "Sir" : "Mr."} ${user.name}`);
}








const myFunc = (a : string, b: string, c?: string)  => {
    console.log(`Hello ${a}, ${b}`);
}

myFunc('A', 'B');



let myFunc : Function;

myFunc = ()  =>{
    console.log("Hello");
}



