//The JavaScript prototype property allows you to add new properties to object constructors:



// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)




const employee = {
    calTax() {
        console.log("Tax rate is 10% ");
    }
};


const karanArjun = {
    salary: 5000
};

karanArjun.__proto__ = employee;
console.log(employee.calTax());

karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const father = new Person("sagor", "Sutra", 39, "Blue");
console.log(father);
console.log(`${father} and his nationality is : ${father.nationality}`);