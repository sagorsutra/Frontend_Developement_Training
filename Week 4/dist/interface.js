import { Player } from './Classes/Player.js';
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
let sakib;
sakib = new Player("sakib", 35, "bangladesh");
console.log(sakib);
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
