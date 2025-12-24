"use strict";
/*
When you want to share real code then use abstract
Interface ব্যবহার করি যখন আমরা শুধু “কি কি থাকতে হবে” সেটা ঠিক করি।
Abstract class ব্যবহার করি যখন “কি কি থাকতে হবে + কিছু কাজ আগেই বানানো আছে”।

*/
class payment {
}
class cardPayment extends payment {
    payment(amount) {
        console.log(`The amount debitted from card is ${amount}`);
    }
}
class cashpayment extends payment {
    payment(amount) {
        console.log(`The payment was in Cash & amount is ${amount}`);
    }
}
const card = new cardPayment();
card.payment(550);
const cash = new cashpayment();
cash.payment(230);
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
//Child class to have implement this method
class Dog extends Animal {
    makeSound() {
        console.log("Woof Wooff!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Mewaaooo");
    }
}
const dog = new Dog();
dog.makeSound();
const cat = new Cat();
cat.makeSound();
