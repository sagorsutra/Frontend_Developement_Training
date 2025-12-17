 console.log('Step 1');

 setTimeout(() => {
     console.log('Step 4');
 }, 0);


 Promise.resolve().then(() => {
     console.log('Step 3');
 }).then(() => {
     console.log('Step 5');
 });

 setTimeout(() => {
     console.log('Step 6');
 }, 0);
 k
 Promise.resolve().then(() => {
     console.log('Step 7');
 });

 console.log('Step 2');