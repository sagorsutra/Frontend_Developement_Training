function calculatePizzaPrice(size, toppings) {
    let pizzaSizeMultiplier = 1;
    let basePrice = 10;


    if (size == "medium") {
        pizzaSizeMultiplier = 1.5;
    } else if (size == "large") {
        pizzaSizeMultiplier = 2;
    }

    let addTopping = toppings * 2;

    let pizzaPrize = (basePrice * pizzaSizeMultiplier) + addTopping;

    return pizzaPrize;

}
let orderPizza = calculatePizzaPrice("large", 3)

console.log(`Your pizza costs : $${orderPizza}`)