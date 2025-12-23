 //Gerenic code style as demand of logic and data 

//  interface ApiResponse<T>{
//     port : number ;
//     status : number ;
//     data : T;
//  }

//  const resp : ApiResponse<object> = {
//     port : 200,
//     status : 404,
//     data : {
//         Lodge : 500, 
//         Weight : "Pound"
//     }
//  }


// console.log(resp);

// generic type , you've to mention the type while mentioning
class box<T> {
    private content: T;

    constructor(content : T){
        this.content = content;
    }
    getContent():T{
        return this.content;
    }
}

const val = new box<string>("Wrapped box");
console.log(val.getContent());





// const addID = <T extends {
//     name : string;
//     age: number;
// }> (obj: T) =>{
//     let id = Math.floor(Math.random() * 100);
//     return {...obj, id};
// }

// const user = addID({name: "Sagor", age: 50})

// console.log(user);

// let user = addID({
//     name: "Mashrafi",
//     age : 59,
//     country : 'Bangladeshi'

// });
 
// let user = 'Mashrafi'



 