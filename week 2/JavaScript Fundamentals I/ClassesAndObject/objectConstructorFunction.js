//Object constructor function 
function person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eye = eye;
}

const father = new person("Kamal", "uddin", 50, "brown");
console.log(father);
const mother = new person("Shorna", "sourobi", 50, "brown");
console.log(mother);

mother.changeName = function(first, last) {
    this.firstname = first;
    this.lastname = last;
}

mother.changeName("Doe", "Harly");
console.log(mother);