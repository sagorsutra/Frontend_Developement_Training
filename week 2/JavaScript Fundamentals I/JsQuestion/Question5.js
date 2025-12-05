/*
Question 6:
Create a function that checks if a given number is a palindrome.

*/

const str = "madam";

function Ispalindrome(str) {
    let revstr = str.split('').reverse().join('');
    console.log(revstr);
    return revstr;
}

if (str == Ispalindrome(str)) {
    console.log("true");
} else {
    console.log("false");
}