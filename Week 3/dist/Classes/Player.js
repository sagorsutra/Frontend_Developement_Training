export class player {
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
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
