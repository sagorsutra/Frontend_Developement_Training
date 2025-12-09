const arr1 = [1, 2, 3, 5];
const arr2 = [6, 9, 8, 5, 7];
const arr3 = [7, 4, 1, 2, 5];

const newArr = [...arr1, ...arr2, ...arr3];
const comArr = arr1.concat(arr2, arr1);
console.log(newArr);