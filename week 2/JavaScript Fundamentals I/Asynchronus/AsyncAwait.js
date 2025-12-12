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
    await getData(5);

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