const loadbtn = document.getElementById('loadBtn');
const userContainer = document.getElementById('userContainer');

const API_URL = 'https://jsonplaceholder.typicode.com/users/';

loadbtn.addEventListener('click', async() => {
    try {
        userContainer.innerHTML = '<p class="loading"> Loading user data......</p>';
        const randNum = Math.floor(Math.random() * 10) + 1;

        const response = await fetch(API_URL + randNum);

        if (!response.ok) {
            throw new Error('User not found');
        }

        const user = await response.json();

        userContainer.innerHTML = `
        <div class="user-card">
            <h3> ${user.name}</h3>
            <p><strong>Email : </strong> ${user.email}</p>
            <p><strong>Company : </strong> ${user.company.name}</p>
            <p><strong>city : </strong> ${user.address.city}</p>
            <p><strong>website : </strong> ${user.website}</p>


        </div>
        `;


    } catch (error) {
        userContainer.innerHTML = `
            <div class="error">
                ❌ Failed to load user: ${error.message}
                <br><small>Try clicking again</small>
            </div>
        `;
    }
});
window.onload = () => {
    loadbtn.click();
};


































/*
Why async / await exists (the pain it fixes)?
Promise with .then() (harder to read)
 





const order = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 2000);

});

// order.then(result => console.log(result));      ----------------> instead of this , uses for async and await to work with the promises
async function MakeOrder() {
    try {
        const result = await order;
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

MakeOrder();
*/
/*
function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("Success");
        }, 2000);
    })
}


(async function getAllData() { // here i've to mention the function name to execute but 
    await getData(1); //  i want to execute without mentioning the function for 
    await getData(2); // for that i've to use the IIFE to directly execute the code
    await getData(3);
    await getData(4);
    await getData(5);f

})(); // (function)();


async function getFile() {
    let myPromise = new Promise(function(resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                resolve("File not Found");
            }
        };
        req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

getFile();

*/