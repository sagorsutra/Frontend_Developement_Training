// 🔍 User Database: Find specific user
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" }
];


const user = users.find(user => user.id === 2);

const admin = users.find(user => user.role === "admin");

const index = users.findIndex(user => user.id === 3);

users.splice(index, 1);


const exists = users.find(user => user.email === "alice@email.com");
if (exists) {
    console.log("User already exists!");
}