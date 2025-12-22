// class player {
//     // private name : string;
//     // public age : number;
//     // public country : string;
//     // //readonly country : string; ----> only i can read but i can't access that.

//     // constructor(n: string , a: number , c: string){
//     //     this.name = n; 
//     //     this.age=a; 
//     //     this.country=c;
//     // }

    
// // When we use access modifier then the class formation should be another easy way

//     constructor(
//         private name : string,
//         public age : number, 
//         readonly country : string,
//     ){}
 
//     play(){
//         console.log(`${this.name} from ${this.country} is playing!`);
//     }

// }
 

const mashrafi = new player('Mashrafi',40, 'Bangladesh');
const sakib = new player('sakib',38, 'Bangladesh');


// const players : string[]=[];
const players : player[]=[];   //mentioning class as a type can be possible 
players.push(sakib);
players.push(mashrafi);


console.log(mashrafi.age);  //Can use from the outside . To restric the access we can use the access modifier.
sakib.age = 50;
console.log(sakib)