"use strict";
function print(val) {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
}
function check(p) {
    if ("permission" in p) {
        console.log(p.permission);
    }
}
class Dogg {
    bark() { }
}
function sound(a) {
    if (a instanceof Dogg) {
        a.bark();
    }
}
