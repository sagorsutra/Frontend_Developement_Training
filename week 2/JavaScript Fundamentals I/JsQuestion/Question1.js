/*
Question 1: Most Frequent Element
Write a JavaScript function that takes an array of numbers and returns the number that appears most frequently.
Input:
[5, 3, 9, 3, 5, 3, 1]
Output:
3
Conditions:
The array will always have at least one element.
If multiple values have same frequency, return any one.
*/



//-----> Updated code 


const arr = [5, 3, 9, 3, 5, 3, 1];
let maxNum = 0;
let maxcount = 0;
const count = {};

for (const num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxcount) {
        maxcount = count[num];
        maxNum = num;
    }
}

console.log(`Most frequent: ${maxNum}  (${maxcount}times)`);





/*  Old Code

function frequElement(arr) {
    let result = 0;
    let maxcont = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        if (count > maxcont || count == maxcont) {
            maxcont = count;
            result = arr[i]
        }
    }
    return result;
}

const ans = frequElement(arr);
console.log(ans);

*/