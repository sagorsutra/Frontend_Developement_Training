/*
Question 2: Reverse Each Word in a Sentence
Write a function that reverses each word in a sentence without reversing the sentence order.
Input:
"JavaScript is Fun"
Output:
"tpircSavaJ si nuF"
Conditions:
The sentence may contain multiple spaces.
Do not use external libraries.
*/

const str = "JavaScirpt is Fun";
const wordArr = str.split(' ');
console.log(wordArr[0]);

function rev(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let currwrd = arr[i];
        let revword = "";


        for (let j = currwrd.length - 1; j >= 0; j--) {

            revword += currwrd[j];
        }

        result.push(revword);

    }
    return result.join(' ');
}


const reve = rev(wordArr);
console.log(reve);