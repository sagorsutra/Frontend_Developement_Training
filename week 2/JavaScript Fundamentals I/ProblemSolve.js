// const str = "JavaScirpt is Fun";
// const wordArr = str.split(' ');
// console.log(wordArr[0]);

// function rev(arr) {

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {

//         let currwrd = arr[i];
//         let revword = "";


//         for (let j = currwrd.length - 1; j >= 0; j--) {

//             revword += currwrd[j];
//         }

//         result.push(revword);

//     }
//     return result.join(' ');
// }


// const reve = rev(wordArr);
// console.log(reve);















/*
//Question 1: Most Frequent Element

const arr = [5, 3, 9, 3, 5, 3, 1];

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






























// const itr = arr.entries();

// for (const [index, value] of itr) {
//     console.log(`index : ${index} , value : ${value}`);
// }