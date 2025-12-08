 // With query parameters
 //JOin is a String assembler -> it takes an array and connects all elements into a single string. 

 // Building API endpoints
 const apiBase = "https://api.example.com";
 const version = "v1";
 const endpoint = "users";
 const userId = 123;

 const urlParts = [apiBase, version, endpoint, userId];
 const apiUrl = urlParts.join("/");
 console.log(apiUrl);

 const params = {
     page: 1,
     limit: 20,
     sort: "name",
     active: true
 };

 const queryString = Object.entries(params).map(([key, value]) => `${key}=${value}`).join("&");
 console.log(queryString);




 const words = ["Hello", "World", "!"];
 console.log(words.join());

 /*


 */