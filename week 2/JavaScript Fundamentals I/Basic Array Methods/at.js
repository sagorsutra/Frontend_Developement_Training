const fruits = ["🍎", "🍌", "🍊", "🍇", "🍓"];

console.log(fruits.at(-4));
// ❌ OLD WAY: Verbose and error-prone
const lasts = array[array.length - 1];
const secondLasts = array[array.length - 2];
const thirdLasts = array[array.length - 3];

// ✅ NEW WAY: Clean and intuitive
const last = array.at(-1);
const secondLast = array.at(-2);
const thirdLast = array.at(-3);
/*
.at() is the modern way to access array elements

*/