//.splice() removes, replaces, or inserts elements in an array. Think of it as a surgeon operating on an array!

const fruits = ["🍎", "🍌", "🍊", "🍇"];

// Remove 1 element at index 1
const removed = fruits.splice(2, 1);
console.log(removed);
console.log(fruits);
// removed = ["🍌"]
// fruits = ["🍎", "🍊", "🍇"]

// Insert "🍓" at index 1
fruits.splice(1, 0, "🍓");
// fruits = ["🍎", "🍓", "🍊", "🍇"]

// Replace 1 element at index 2 with "🥭"
fruits.splice(2, 1, "🥭");
// fruits = ["🍎", "🍓", "🥭", "🍇"]


//splice(index, element);   ----> Delete 


//arr.splice(index, cut(1,2)/dont_cut(0), element );

// For INSERT: (add without removing)
array.splice(position, 0, newItem);

// For REMOVE: (delete without adding)  
array.splice(position, howMany);

// For REPLACE: (remove and add)
array.splice(position, howMany, newItem);