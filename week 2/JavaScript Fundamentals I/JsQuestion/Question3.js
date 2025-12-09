/*
Write a function that removes duplicate values from an array and returns a new array.
Input:
[10, 20, 10, 30, 20, 40]
Output:
[10, 20, 30, 40]
Conditions:
The original array must not be modified.

*/

//------> Updated Code 

const arr = [10, 20, 10, 30, 20, 40];

const uniqueSet = new Set();

for (let val of arr) {
    uniqueSet.add(val);
}

console.log(uniqueSet);







/*---> Older Code 



function NoDuplicate(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
            console.log(newArr);
        }
    }
    return newArr;
}



console.log(NoDuplicate(arr));

*/