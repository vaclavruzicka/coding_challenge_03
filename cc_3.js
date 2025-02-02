//Task 1 - Product Price Managment Scenario

//Declaring an array with five numerical values.
let prices = [37.99, 115.99, 121.99, 124.99, 129.99]

//Adding a new price to the array.
prices.push(134.99)

//Removing the first price from the array.
prices.shift()

//Loggin the updated price list.
console.log("Prices:", prices)

//Task 2 - Modifying Customer Orders Scenario

//Declaring an array.
let orders = [12, 15, 18, 23, 30]

//Modifying the third value in the array.
orders.splice(2, 2, 19, 23);

//Calculating the sum of the array.
let total_orders = orders.reduce((sum, order) => sum + order, 0)

//Logging the updated array and the total of the array
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

//Logging the updated object to the console.
console.log("John Smith Information:", employee)

//Task 4 - Customer Feedback Records

//Declaring objects and creating an array out of the objects.
let maggieWaters = {
    customerName: "Maggie Waters",
    feedbackText: "Great customer service and good product.",
    rating: 9
}
let graysonWhite = {
    customerName: "Grayson White",
    feedbackText: "Nice enough staff and solid product.",
    rating: 7
}
let janePaulson = {
    customerName: "Jane Paulson",
    feebackText: "Unfriendly Staff and horrible product.",
    rating: 2
}

let customers = [maggieWaters, graysonWhite, janePaulson]

//Creating new object and adding it to the existing array.
let kennethJohnson = {
    customerName: "Kenneth Johnson",
    feebackText: "Amazing serivce. I loved it!",
    rating: 10
}

customers.push(kennethJohnson)

//Logging full array.
console.log("Customer Feedback:", customers)

//Task 5 Inventory Management System Scenario

//Declaring an object with properties.
let inventory = {
    itemName: "Hockey Stick",
    stockCount: 368,
    price: 185
}

//Adding a method the multiplies two numerical properties.
inventory.calculateTotalValue = inventory.stockCount * inventory.price

//Logging the updated object.
console.log("Hockey Stick Inventory:", inventory)