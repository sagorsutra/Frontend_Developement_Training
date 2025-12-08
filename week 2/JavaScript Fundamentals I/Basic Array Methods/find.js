// 🔍 User Database: Find specific user
const seats = [
    { seatNumber: "A1", reserved: false, type: "window" },
    { seatNumber: "A2", reserved: true, type: "aisle" },
    { seatNumber: "B1", reserved: false, type: "window" },
    { seatNumber: "B2", reserved: false, type: "aisle" },
    { seatNumber: "C1", reserved: true, type: "window" }
];


//find the available window seat
const windowSeat = seats.findIndex(s => !s.reserved && s.type === "window");
console.log(windowSeat);
console.log(seats.find(s => !s.reserved && s.type === "window"));
console.log(seats.filter(s => !s.reserved && s.type === "window"));


const users = [
    { id: 101, name: "Alice", email: "alice@email.com", role: "admin" },
    { id: 102, name: "Bob", email: "bob@email.com", role: "user" },
    { id: 103, name: "Charlie", email: "charlie@email.com", role: "user" },
    { id: 104, name: "Diana", email: "diana@email.com", role: "moderator" }
];

// const user = users.find(u => u.id === 102);
// console.log(user);

// console.log(users.find(u => u.email === "diana@email.com"));
console.log(users.find(u => u.role === "admin"));