"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("I can Talk");
    }
}
class FootballCoach extends Person {
    train(name) {
        console.log(`i train ${name} now`);
    }
}
const coach = new FootballCoach("William");
console.log(`My name is ${coach.name}`);
coach.speak();
coach.train("Sagor");
