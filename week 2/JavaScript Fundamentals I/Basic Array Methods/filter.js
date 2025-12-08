 const allProducts = [
     "Apple iPhone 15 Pro",
     "Samsung Galaxy S24",
     "Google Pixel 8",
     "Apple MacBook Pro",
     "Samsung Smart TV",
     "Google Nest Hub"
 ];

 const SearchProduct = (query) => { ///filtering function
     if (!query.trim()) return allProducts;

     const searchprod = query.toLowerCase();

     return allProducts.filter(productName => productName.toLowerCase().includes(searchprod));
 }

 console.log(SearchProduct(""));
 console.log(SearchProduct("Samsung"));





 const products = [
     { id: 1, name: "Laptop", price: 999, inStock: true, category: "electronics", rating: 4.5 },
     { id: 2, name: "Coffee Mug", price: 15, inStock: false, category: "home", rating: 4.2 },
     { id: 3, name: "T-Shirt", price: 25, inStock: true, category: "clothing", rating: 3.8 },
     { id: 4, name: "Headphones", price: 199, inStock: true, category: "electronics", rating: 4.7 },
     { id: 5, name: "Book", price: 12, inStock: true, category: "books", rating: 4.9 }
 ];

 //Product filtering 

 const stockItem = products.filter(user => user.inStock);
 console.log(stockItem);

 const affordBuy = products.filter(prod => prod.price < 500 && prod.category === "electronics");
 console.log(affordBuy);


 const fiftyTO500 = products.filter(user => user.price > 50 && user.price < 500);
 console.log(fiftyTO500);





 const employees = [
     { id: 1, name: "John", role: "admin", department: "IT" },
     { id: 2, name: "Sarah", role: "manager", department: "Sales" },
     { id: 3, name: "Mike", role: "developer", department: "IT" },
     { id: 4, name: "Lisa", role: "developer", department: "IT" },
     { id: 5, name: "Tom", role: "sales", department: "Sales" }
 ];

 // Find IT department only

 const ItEmploye = employees.filter(user => user.department == "IT");
 console.log(ItEmploye);

 const dev = employees.filter(user => user.department === "IT" && user.role === "developer");
 console.log(dev);

 const Admin = employees.filter(user => user.role === "manager" || user.role === "admin");
 console.log(Admin);




 const users = [
     { id: 1, name: "Alice", isActive: true, lastLogin: "2024-01-15" },
     { id: 2, name: "Bob", isActive: false, lastLogin: "2023-11-20" },
     { id: 3, name: "Charlie", isActive: true, lastLogin: "2024-01-10" },
     { id: 4, name: "Diana", isActive: true, lastLogin: "2023-12-05" }
 ];


 const activeUser = users.filter(user => user.isActive);






 const people = [18, 22, 15, 30, 17];
 const adults = people.filter(age => age >= 18);

 console.log(adults);