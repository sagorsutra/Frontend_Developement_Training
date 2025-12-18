 //---------> Difining User

 //  const user = {
 //      id: null,
 //      name: '',
 //      tasks: []
 //  }
 //  const task = {
 //      title: "Task Title",
 //      completed: false
 //  };

 const allUser = [];
 let userIdCounter = 0;
 const createInitialUser = (username) => {
     const newUser = {
         id: ++userIdCounter,
         name: username,
         tasks: []
     }
     allUser.push(newUser);
     return newUser;
 }

 const addTaskToUser = (userObj, taskTitle) => {

     if (!userObj) {
         return false;
     }


     const newTask = {
         title: taskTitle,
         completed: false
     };
     userObj.tasks.push(newTask);
 }



 const User1 = createInitialUser("ALice");
 const user3 = createInitialUser("John");;

 addTaskToUser(User1, "learn JS");
 addTaskToUser(user3, "Fundamental of JS");

 User1.tasks[0].completed = true;
 //user3.tasks[0].completed = true;

 //  console.log(User1);
 //  console.log(user3);
 //  allUser.forEach(user => {
 //      console.log(user);
 //  })


 const getUserById = (id) => {
     return allUser.find(user => user.id == id);
 }


 //  console.log("Here is the user by ID: ");
 //  console.log(getUserById(2));


 const getCompletedTasks = allUser.filter(user => user.tasks.some(task => task.completed === true));


 //  console.log(getCompletedTasks);
 //  getCompletedTasks.forEach(taskss =>  {
 //      console.log(taskss);

 //  })

 //  console.log(allUser.map(user => ({
 //      UserName: user.name,
 //      tasks: user.tasks
 //  })));

 allUser.forEach(user => {
     console.log(`${user.name}'s tasks`);
     console.log(user.tasks);
     console.log("-------");
 })
































































































 /*
                 // ============== MODULE 1: TYPES & SCOPE ==============
                 // Let's practice variable types and scope concepts

                 const RESTAURANT_INFO = {
                     name: "JS Bistro",
                     established: 2020,
                     rating: 4.5
                 };

                 let dailyRevenue = 0;  // Global scope variable
                 let customerCount = 0;

                 // Block scope demonstration
                 function processCustomer() {
                     let orderId = Math.random();  // Function scope
                     const TAX_RATE = 0.08;        // Block scope constant
                     
                     if (orderId > 0.5) {
                         var premiumCustomer = true;  // var has function scope
                         let discountCode = "VIP10";  // let has block scope
                         console.log(`Discount applied: ${discountCode}`);
                     }
                     
                     // premiumCustomer is accessible here (var)
                     // discountCode is NOT accessible here (let)
                 }

                 // ============== MODULE 2: ARRAY/LOOP PATTERNS ==============
                 // Practice different array methods and loop patterns

                 const menuItems = [
                     { id: 1, name: "Pizza", category: "main", price: 12.99, available: true },
                     { id: 2, name: "Burger", category: "main", price: 9.99, available: true },
                     { id: 3, name: "Pasta", category: "main", price: 11.49, available: false },
                     { id: 4, name: "Salad", category: "appetizer", price: 7.99, available: true },
                     { id: 5, name: "Coke", category: "beverage", price: 2.49, available: true },
                     { id: 6, name: "Ice Cream", category: "dessert", price: 4.99, available: true }
                 ];

                 // 1. forEach - Log all items
                 console.log("=== Menu Items ===");
                 menuItems.forEach(item => {
                     console.log(`${item.name}: $${item.price}`);
                 });

                 // 2. map - Create formatted menu display
                 const formattedMenu = menuItems.map(item => 
                     `${item.name} (${item.category}) - $${item.price}`
                 );

                 // 3. filter - Get available items
                 const availableItems = menuItems.filter(item => item.available);

                 // 4. find - Find specific item
                 const pizzaItem = menuItems.find(item => item.name === "Pizza");

                 // 5. reduce - Calculate total value of all items
                 const totalMenuValue = menuItems.reduce((total, item) => total + item.price, 0);

                 // 6. Some/Every - Check conditions
                 const hasMainCourse = menuItems.some(item => item.category === "main");
                 const allHavePrice = menuItems.every(item => item.price > 0);

                 // 7. for...of loop with destructuring
                 for (const {name, price} of menuItems) {
                     if (price > 10) {
                         console.log(`Premium item: ${name}`);
                     }
                 }

                 // ============== MODULE 3: FUNCTION FORMS ==============
                 // Practice different function types

                 // 1. Function Declaration
                 function calculateTotal(price, quantity = 1) {
                     return price * quantity;
                 }

                 // 2. Function Expression
                 const applyDiscount = function(price, discountPercent) {
                     return price * (1 - discountPercent / 100);
                 };

                 // 3. Arrow Function
                 const calculateTax = (subtotal, taxRate = 0.08) => subtotal * taxRate;

                 // 4. Higher-Order Function
                 function createPriceFormatter(currency = "$") {
                     return function(amount) {
                         return `${currency}${amount.toFixed(2)}`;
                     };
                 }

                 // 5. Callback Function
                 function processOrder(items, callback) {
                     console.log("Processing order...");
                     // Simulate async operation
                     setTimeout(() => {
                         const total = items.reduce((sum, item) => sum + item.price, 0);
                         callback(total);
                     }, 1000);
                 }

                 // ============== INTEGRATED PROJECT ==============
                 // Let's put it all together

                 class RestaurantOrderSystem {
                     constructor() {
                         this.orders = [];
                         this.todaysOrders = [];
                         this.formatPrice = createPriceFormatter("$");
                     }

                     // Method using arrays and loops
                     addOrder(orderItems) {
                         const orderId = this.orders.length + 1;
                         const orderTime = new Date();
                         
                         // Calculate total using array methods
                         const subtotal = orderItems.reduce((sum, item) => {
                             const menuItem = menuItems.find(m => m.id === item.id);
                             return sum + (menuItem?.price || 0) * item.quantity;
                         }, 0);
                         
                         const tax = calculateTax(subtotal);
                         const total = subtotal + tax;
                         
                         const order = {
                             id: orderId,
                             items: orderItems,
                             subtotal,
                             tax,
                             total,
                             time: orderTime,
                             status: "pending"
                         };
                         
                         this.orders.push(order);
                         this.todaysOrders.push(order);
                         
                         return order;
                     }

                     // Method using different function forms
                     processOrders() {
                         console.log("\n=== Processing All Orders ===");
                         
                         this.todaysOrders.forEach((order, index) => {
                             // Using regular function
                             console.log(`Order ${index + 1}: ${this.formatOrderDetails(order)}`);
                             
                             // Using arrow function for status update
                             const updateStatus = (newStatus) => {
                                 order.status = newStatus;
                                 console.log(`Order ${order.id} is now ${newStatus}`);
                             };
                             
                             // Simulate processing
                             if (order.total > 20) {
                                 updateStatus("priority");
                             } else {
                                 updateStatus("completed");
                             }
                         });
                     }

                     // Helper method
                     formatOrderDetails(order) {
                         const itemCount = order.items.reduce((count, item) => count + item.quantity, 0);
                         return `${itemCount} items - Total: ${this.formatPrice(order.total)}`;
                     }

                     // Method using array patterns for analytics
                     generateReport() {
                         console.log("\n=== Daily Report ===");
                         
                         // Group orders by status
                         const ordersByStatus = this.todaysOrders.reduce((groups, order) => {
                             const status = order.status;
                             if (!groups[status]) groups[status] = [];
                             groups[status].push(order);
                             return groups;
                         }, {});
                         
                         // Calculate statistics
                         const totalRevenue = this.todaysOrders.reduce((sum, order) => sum + order.total, 0);
                         const averageOrderValue = totalRevenue / this.todaysOrders.length;
                         
                         console.log(`Total Orders: ${this.todaysOrders.length}`);
                         console.log(`Total Revenue: ${this.formatPrice(totalRevenue)}`);
                         console.log(`Average Order: ${this.formatPrice(averageOrderValue)}`);
                         
                         console.log("\nOrders by Status:");
                         for (const [status, orders] of Object.entries(ordersByStatus)) {
                             console.log(`  ${status}: ${orders.length} orders`);
                         }
                     }
                 }

                 // ============== TEST YOUR IMPLEMENTATION ==============
                 // Run this to test your understanding

                 const restaurant = new RestaurantOrderSystem();

                 // Add some orders
                 restaurant.addOrder([
                     { id: 1, quantity: 2 },  // 2 Pizzas
                     { id: 5, quantity: 3 }   // 3 Cokes
                 ]);

                 restaurant.addOrder([
                     { id: 2, quantity: 1 },  // 1 Burger
                     { id: 6, quantity: 2 }   // 2 Ice Creams
                 ]);

                 restaurant.addOrder([
                     { id: 4, quantity: 3 },  // 3 Salads
                     { id: 5, quantity: 2 }   // 2 Cokes
                 ]);

                 // Process orders
                 restaurant.processOrders();

                 // Generate report
                 restaurant.generateReport();

                 // ============== YOUR TASKS ==============
                 // Implement these features to practice more:

                 // TASK 1: Create a function that finds the most popular menu item
                 function findMostPopularItem(orders) {
                     // Your code here
                     // Hint: Use array methods to count item occurrences
                 }

                 // TASK 2: Implement a discount system using higher-order functions
                 function createDiscountApplier(discountType) {
                     // Return a function that applies specific discount
                     // Example: 'VIP' gives 15% off, 'STUDENT' gives 10% off
                 }

                 // TASK 3: Create inventory management using array methods
                 const inventory = [
                     { item: "flour", quantity: 100, unit: "kg" },
                     { item: "cheese", quantity: 50, unit: "kg" },
                     { item: "tomato", quantity: 200, unit: "pieces" }
                 ];

                 // TASK 4: Implement order filtering by various criteria
                 // - Filter by date range
                 // - Filter by minimum order value
                 // - Filter by item category

                 // TASK 5: Create a menu search with multiple filters
                 function searchMenu(criteria) {
                     // criteria could be: { category: 'main', maxPrice: 15, available: true }
                 }

                 // TASK 6: Practice closure - Create a counter for daily specials
                 function createSpecialCounter() {
                     let count = 0;
                     // Return functions to increment, decrement, and get count
                 }


                 */