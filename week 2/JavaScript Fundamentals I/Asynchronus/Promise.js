   function getData(dataID, getNextData) {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               console.log("data", dataID);
               resolve("Success");

           }, 3000);
       })
   }

   getData(1)
       .then((res) => {
           return getData(2);
       })
       .then((res) => {
           return getData(2);
       })
       .then((res) => {
           console.log(res);
       })


   //---------------------->

   function asyncFunc1() {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               console.log("data1");
               resolve("success");
           }, 4000);
       });
   }

   function asyncFunc2() {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               console.log("data2");
               resolve("success");
           }, 2000);
       })
   }


   console.log("Fetching data1 ......");
   asyncFunc1().then((res) => {
       console.log("Fetching data2....");
       asyncFunc2().then((res) => {
           //console.log("")
       })
   })

   //----------->> Promise chain 





   //------------------------->>

   function getPromise() {
       return new Promise((resolve, reject) => {
           console.log("I am a promise");
           //reject("error");
           resolve("Successful");

       });
   };

   let promise = getPromise();
   promise.then((res) => {
       console.log("promise fulfilled", res);
   });

   promise.catch((err) => {
       console.log("rejected", err);
   });


   //      --------------> 


   let promise = new Promise((resolve, reject) => {
       console.log("I'm a promise");
       resolve("Succes");
   })

   function getData(dataID, getNextData) {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               console.log("data", dataID);
               resolve("Success");
               if (getNextData) {
                   getnextData();
               }

           }, 8000)
       })
   }


   function myDisplayer(some) {
       document.getElementById("demo").innerHTML = some;
   }

   let myPromise = new Promise(function(myResolve, myReject) {
       let x = 0;

       // The producing code (this may take some time)

       if (x == 0) {
           myResolve("OK");
       } else {
           myReject("Error");
       }
   });

   myPromise.then(
       function(value) { myDisplayer(value); },
       function(error) { myDisplayer(error); }
   );

   function getFile(myCallback) {
       let req = new XMLHttpRequest();
       req.open('GET', "mycar.html");
       req.onload = function() {
           if (req.status == 200) {
               myCallback(req.responseText);
           } else {
               myCallback("Error: " + req.status);
           }
       }
       req.send();
   }

   getFile(myDisplayer);

   const myPromise1 = new Promise((resolve, reject) => {
       setTimeout(resolve, 200, "King");
   });


   const myPromise2 = new Promise((resolve, reject) => {
       setTimeout(resolve, 100, "Queen");
   });

   Promise.allSettled([myPromise1, myPromise2]).then((results) =>
       results.forEach((x) => myDisplay(x.status)),
   );