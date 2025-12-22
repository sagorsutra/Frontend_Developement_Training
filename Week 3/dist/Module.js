import { player } from './Classes/Player.js';
const mashrafi = new player('Mashrafi', 40, 'Bangladesh');
const sakib = new player('sakib', 38, 'Bangladesh');
// const players : string[]=[];
const players = []; //mentioning class as a type can be possible 
players.push(sakib);
players.push(mashrafi);
console.log(mashrafi.age); //Can use from the outside . To restric the access we can use the access modifier.
sakib.age = 50;
console.log(sakib);
console.log(mashrafi);
