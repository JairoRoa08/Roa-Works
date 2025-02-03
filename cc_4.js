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



