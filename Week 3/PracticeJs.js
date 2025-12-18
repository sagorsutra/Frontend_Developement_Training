 async function getUserData() {

     try {
         const res = await fetch("https://api.example.com/user");

         if (!res.ok) {
             throw new Error("Request failed");
         }

         const data = await res.json();
         return data.name;


     } catch (err) {
         return "Anonymous";
     }
 }





 /*
function getUserData() {
    return fetch("https://api.example.com/user")
        .then(res => {
            if (!res.ok) {
                throw new Error("Request failed");
            }
            return res.json();
        })
        .then(data => {
            return data.name;
        })
        .catch(err => {
            return "Anonymous";
        });
}

 */

































 /*  
   EVent Loop 

  console.log("Start");

  setTimeout(() => console.log("Timeout"), 0); //-------------->first registered MicroTask 

  Promise.resolve() //----------------> microtasked queued 
      .then(() => console.log("Promise 1"))
      .then(() => console.log("Promise 2"));

  async function test() {
      console.log("Async Start");
      await Promise.resolve();
      console.log("Async End");
  }

  test();
  console.log("End");


  answer is : 
  Start 
  Async Start 
  End
  Promise 1
  Promise 2
  Async End
  Timeout



  */