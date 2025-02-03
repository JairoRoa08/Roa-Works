// Task 1
let purchaseAmount = 120;
let discount = 0;
if (purchaseAmount > 100) {
    discount = purchaseAmount * 0.2;
}

let finalAmount = purchaseAmount - discount;
console.log(`Final amount after discount: $${finalAmount.toFixed(2)}`);

// Task 2
let sales= [10, 20, 30, 40, 50];
let totalSales = 0;
for (let i =0; i< sales.length; i++) {
    totalSales += sales[i];
}

console.log('Total Sales: $$(totalSales)');

// Task 3

let stock = 10;
while (stock > 0) {
    console.log('Stock value: ${stock}');

stock--;
}
console.log('Stock is zero');

// Task 4
let responses = 0;
do {
    console.log('Response count: ${responses}');
    responses++;

} while (responses < 3);

console.log('Collected 3 responss');

// Task 5
let employee= {
    name: "Jimmy",
    position: "Technician",
    salary: 50000
};

for (let property in employee) {
    console.log('${property}: $employee[property]');
}

// Task 6

let products = ["PC", "Mouse", "Mousepad"];
for (let product of products) {
    console.log('Product: ${product}');

}

// Task 7
let orders = [111, 112, 113];
orders.forEach(function(orderId) {
    console.log('Order ID: ${orderId}');

});
