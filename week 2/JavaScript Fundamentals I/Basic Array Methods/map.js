// Combine data from multiple sources
const products = [
    { id: 1, name: "Laptop", categoryId: 101 },
    { id: 2, name: "Mouse", categoryId: 102 }
];

const categories = [
    { id: 101, name: "Electronics", taxRate: 0.1 },
    { id: 102, name: "Accessories", taxRate: 0.08 }
];

const inventory = [
    { productId: 1, stock: 50, warehouse: "A" },
    { productId: 2, stock: 200, warehouse: "B" }
];

const productCatalog = products.map(product => {
    const category = categories.find(c => c.id === product.categoryId);
    const stockInfo = inventory.find(i => i.productId === product.id);

    return {
        productId: product.id,
        productName: product.name,
        category: category ? category.name : "Uncategorized",
        taxRate: category ? category.taxRate : 0,
        inStock: stockInfo ? stockInfo.stock : 0,
        warehouse: stockInfo ? stockInfo.warehouse : "Unknown",
        needsRestock: stockInfo ? stockInfo.stock < 100 : true
    };

});

console.log(productCatalog);






/* 
  
  Notes: 
  
  Time Complexity of .map() in JavaScript → O(n)
 It transforms EVERY item in an array and returns a NEW array. 

For each item, it calls your callback function exactly once





When returning object DIRECTLY → parentheses REQUIRED
users.map(user => ({ name: user.name }));

Why?

Because:

user => { name: "Alice" }


JavaScript interprets this as:

user => {
   name: "Alice" // <-- not valid code. JS thinks it's a label
}


So you MUST wrap the object:

✔ Correct

user => ({ name: "Alice" })

Case 2: When using a block { ... } + return → no parentheses needed

This:

user => {
    return { name: user.name };
}


Does NOT need parentheses.

Because JS clearly sees:

{ ... } → function body

return { ... } → object

So no ambiguity.

🧠 Why your example did NOT need parentheses?

Because you wrote:

user => {
    // multiple lines
    return { ... }
}


You used:

Multi-line logic

Variables

return {}

So this is explicit return, not implicit.

Therefore this form is correct and recommended:

user => {
    return { ... };
}

🔥 FINAL QUICK VISUAL SUMMARY
Implicit return (short version)

📌 Must use parentheses

user => ({ ... })


problem from here --------->>> 

const prices = [10, 20, 30, 40, 50, 60];

 --> adding 10 percent into the price 
 
 const withTax = prices.map(price => Number((price * 1.10).toFixed(2)));
 console.log(withTax);

[ 11, 22, 33, 44, 55, 66 ]





// Format as currency
 const fromatted = prices.map(price => `$${price.toFixed(2)}`);
[ '$10.00', '$20.00', '$30.00', '$40.00', '$50.00', '$60.00' ]






extrct the name : 
 const users = [
     { id: 1, name: "Alice", email: "alice@gmail.com" },
     { id: 2, name: "stephen", email: "Stephen@gmail.com" },
     { id: 3, name: "butcher", email: "butcher@gmail.com" }
 ];

  const user = users.map(user => user.name);
  [ 'Alice', 'stephen', 'butcher' ]





   // Raw API data (messy, inconsistent)

 const apiUsers = [
     { user_id: 1, user_name: "john_doe", email_address: "john@email.com" },
     { user_id: 2, user_name: "jane_smith", email_address: "jane@email.com" }
 ];








 // Raw API data (messy, inconsistent)

 const normalizedUsers = apiUsers.map(user => ({
     id: user.user_id,
     name: user.user_name,
     email: user.email_address,
     isActive: true,
     createAd: new Date().toISOString()
 }));

 console.log(normalizedUsers);

[
  {
    id: 1,
    name: 'john_doe',
    email: 'john@email.com',
    isActive: true,
    createAd: '2025-12-08T00:08:08.401Z'
  },
  {
    id: 2,
    name: 'jane_smith',
    email: 'jane@email.com',
    isActive: true,
    createAd: '2025-12-08T00:08:08.402Z'
  }
]



 */