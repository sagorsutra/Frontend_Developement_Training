//  //Fetching the same functions after one by one by call back 

getData = (dataID, getnextData) => {
        setTimeout(() => {
            console.log("data", dataID);
            if (getnextData) {
                getnextData();
            }

        }, 2000);
    }
    //callback Hell(Nested Call back)
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        })
    });
});


const myNumbers = [4, 1, -20, -7, 5, 9, -6];


const posNumbers = removeNeg(myNumbers, (x) => x >= 0);


document.getElementById("demo").innerHTML = posNumbers;


function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}





//  getData(1)  not showing one after one even if the setTimeout has been setted. 
//  getData(2)
//  getData(3)


/*
sum = (a, b) => console.log(a + b);
calculator = (a, b, sumCallback) => sumCallback(a, b);
calculator(1, 2, sum); // Don't pass the paranthesis here of the function because neither the sum function will be execute no the  


*/