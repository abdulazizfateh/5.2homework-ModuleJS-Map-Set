import { ShopProduct, Timer, Flight, Point, Product, Cart, Post, BankCard, Grade } from "./app.js";
// TASK 1
const chocolate = new ShopProduct("Snickers", 10, 4);
console.log(chocolate.totalPrice);




// TASK 2
const time = new Timer(4);
// time.start();




// TASK 3
const flight001 = new Flight("Tashkent", "London", 5);
console.log(flight001.info);




// TASK 4
const point1 = new Point(10, 12);
console.log(point1.distance);




// TASK 5
const product1 = new Product("Watermelon", 4);
const product2 = new Product("Melon", 6);
const product3 = new Product("HP Laptop", 1000);
const product4 = new Product("Charger", 10);

const cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);

console.log(cart.getTotal());




// TASK 6
const post1 = new Post("JS", "ModuleJS", 100);
console.log(post1.like());




// TASK 7
const bankCard1 = new BankCard("Abdulaziz", 2000, 10000);
console.log(bankCard1.withdraw(1000));




// TASK 8
const student1 = new Grade("Abdulaziz", [90, 90, 100, 100]);
console.log(student1.getAverage());
console.log(student1.isPassed());