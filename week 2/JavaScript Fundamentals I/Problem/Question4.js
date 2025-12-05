/*
 Question 3: Password Validator
    Write a function isValidPassword(password) that returns true if the password:
    Has at least 8 characters
    Contains at least 1 uppercase letter
    Contains at least 1 number
    Otherwise, return false.
    Input:
    "Test1234"
    Output:
    true
*/

const pass = "Testsfdf";

function isValidPassword(pass) {

    if (pass.length < 8) {
        return false;
    }
    let hasUpperCase = false;
    let number = false;

    for (let i = 0; i < pass.length; i++) {
        const char = pass[i];

        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }

        if (char >= '0' && char <= '9') {
            number = true;
        }

        if (hasUpperCase && number) {
            return true;
        }

    }

    return hasUpperCase && number;


}

console.log(isValidPassword(pass));