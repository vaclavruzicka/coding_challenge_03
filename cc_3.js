//Task 1 - Product Price Managment Scenario

//Declaring an array with five numerical values.
let prices = [37.99, 115.99, 121.99, 124.99, 129.99]

//Add a new price to the array.
prices.push(134.99)

//Remove the first price from the array.
prices.shift()

//Log the updated price list.
console.log("Prices:", prices)

//Task 2 - Modifying Customer Orders Scenario

//Declaring an array.
let orders = [12, 15, 18, 23, 30]

//Modifying the third value in the array.
orders.splice(2, 2, 19, 23);

//Calculating the sum of the array.
let total_orders = orders.reduce((sum, order) => sum + order, 0)

//Log the updated array and the total of the array
console.log("Orders:", orders)
console.log("Sum of Orders:", total_orders)

//Task 3 - Employee Performance Tracking Scenario

//Declaring an object with properties.
let employee = {
    name: "John Smith",
    role: "Manager",
    performanceScore: 9.5,
    isActive: true
};

//Updating property withing an object.
employee.performanceScore = 9.7

//Adding a new property to the an object.
employee.promotionEligible = false

//Log the updated object to the console.
console.log("John Smith Information:", employee)