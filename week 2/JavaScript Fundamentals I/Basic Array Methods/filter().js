// 🛒 Shopping Cart: Filter products
const products = [
    { name: "Shirt", price: 25, inStock: true, category: "clothing" },
    { name: "Laptop", price: 999, inStock: false, category: "electronics" },
    { name: "Coffee", price: 15, inStock: true, category: "food" }
];


const available = products.filter(product => product.inStock);

const affordable = products.filter(product => product.price < 50);

const clothingInStock = products.filter(product =>
    product.category === "clothing" && product.inStock
);

const searchTerm = "sh";
const searchResults = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
);