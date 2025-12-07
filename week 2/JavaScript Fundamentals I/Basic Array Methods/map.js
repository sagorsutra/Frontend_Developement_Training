 const prices = [10, 20, 30, 40, 50, 60];

 const fromatted = prices.map(price => `$${price.toFixed(2)}`);
 console.log(fromatted);

















 /* Time Complexity of .map() in JavaScript → O(n)
For each item, it calls your callback function exactly once



 --> adding 10 percent into the price 
 
 const withTax = prices.map(price => Number((price * 1.10).toFixed(2)));
 console.log(withTax);

[ 11, 22, 33, 44, 55, 66 ]



// Format as currency
 const fromatted = prices.map(price => `$${price.toFixed(2)}`);
[ '$10.00', '$20.00', '$30.00', '$40.00', '$50.00', '$60.00' ]
 */