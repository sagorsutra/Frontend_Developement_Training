class Person{
    name : string;

    constructor(name : string){
        this.name = name;
    }

    speak(){
        console.log("I can Talk");
    }
}

class FootballCoach extends Person{
    train(name : string){
        console.log(`i train ${name} now`)
    }
}

const coach = new FootballCoach("William");
console.log(`My name is ${coach.name}`);
coach.speak();
coach.train("Sagor");