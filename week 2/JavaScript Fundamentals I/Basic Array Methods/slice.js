const users = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// Get first 3 users
const firstThree = users.slice(0, 3); // ["Alice", "Bob", "Charlie"]

// Get last 3 users
const lastThree = users.slice(-3); // ["Charlie", "Diana", "Eve"]

// Get all except first
const allButFirst = users.slice(1); // ["Bob", "Charlie", "Diana", "Eve"]

// Get all except last  
const allButLast = users.slice(0, -1); // ["Alice", "Bob", "Charlie", "Diana"]

// Get middle 3
const middleThree = users.slice(1, 4); // ["Bob", "Charlie", "Diana"]

const clone = original.slice();
// OR: const clone = [...original];