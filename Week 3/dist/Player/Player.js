"use strict";
var player = /** @class */ (function () {
    // private name : string;
    // public age : number;
    // public country : string;
    // //readonly country : string; ----> only i can read but i can't access that.
    // constructor(n: string , a: number , c: string){
    //     this.name = n; 
    //     this.age=a; 
    //     this.country=c;
    // }
    // When we use access modifier then the class formation should be another easy way
    function player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing!"));
    };
    return player;
}());
