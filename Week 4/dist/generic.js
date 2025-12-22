"use strict";
//Gerenic code style as demand of logic and data 
const resp = {
    port: 200,
    status: 404,
    data: {
        Lodge: 500,
        Weight: "Pound"
    }
};
console.log(resp);
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = addID({ name: "Sagor", age: 50 });
// console.log(user);
// let user = addID({
//     name: "Mashrafi",
//     age : 59,
//     country : 'Bangladeshi'
// });
// let user = 'Mashrafi'
