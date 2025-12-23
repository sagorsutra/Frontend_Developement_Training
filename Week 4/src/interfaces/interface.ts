/*
What does it describe?

No logic
No default behavior
No shared state
Just “what must exist”

👉 That is exactly what interfaces are for.
*/



import{Player} from '../Classes/Player.js'
import {IsPlayer} from './IsPlayer.js'

const mashrafi = new Player('Mashrafi', 40 , 'Bangladesh');
let sakib : IsPlayer;

sakib = new Player("sakib", 35, "bangladesh"); 
console.log(sakib);



interface coach{
    name : string,
    yearExperience : number,
    getAdvice() : string;
    train(player : string) :void;
}



//-----------> Now you can make as much as type of coach as you want

class footballCoach implements coach{
    name : string;
    yearExperience : number;
    constructor( name : string, experience : number  ){
        this.name = name;
        this.yearExperience = experience;
    }
    getAdvice =() =>{
        return  `${this.yearExperience} says: Practice more!`;    
        }
        train(player: string) {
        console.log(`${this.yearExperience} is training ${player}`);
    }
}




/*

//type optionType = {width : number , length : number} ///---> This is type Alliass but w'll use Interface

interface RectangleOptions{
    width : number;
    length : number;
    height : number;
}

function drawRectangle(options : RectangleOptions){
     let w = options.width;
     let l = options.length;
}

let threeDdoptions ={
     width : 30,
    length: 20,
    height : 10,
} 



drawRectangle(threeDdoptions)

console.log(drawRectangle)




function drawRectangle({w , l} :  {w : number , l : number}){
}
drawRectangle({
    w: 30,
    l: 20
})

console.log(drawRectangle)

*/