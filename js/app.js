export { ShopProduct, Timer, Flight, Point, Product, Cart, Post, BankCard, Grade };

// TASK 1
class ShopProduct {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    get totalPrice() {
        return this.price * this.quantity;
    }
}




// TASK 2
class Timer {
    constructor(seconds) {
        this.seconds = seconds;
    }
    start() {
        for (let i = 1; i <= this.seconds; i++) {
            setTimeout(() => {
                console.log(`${i} seconds passed`);
            }, i * 1000);
        }
    }
}




// TASK 3
class Flight {
    constructor(from, to, duration) {
        this.from = from;
        this.to = to;
        this.duration = duration;
    }
    get info() {
        return `${this.from} → ${this.to} (${this.duration} hours)`;
    }
}




// TASK 4
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get distance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}




// TASK 5
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart extends Product {
    constructor(name, price) {
        super(name, price);
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    getTotal() {
        for (let item of this.products) {
            console.log(`${item.name}: $${item.price}`);
        }
        const total = this.products.reduce((sum, item) => {
            return sum + item.price;
        }, 0);
        return `TOTAL COST: $${total}`;
    }
}




// TASK 6
class Post {
    constructor(title, content, likes) {
        this.title = title;
        this.content = content;
        this.likes = likes;
    }
    like() {
        return ++this.likes;
    }
}




// TASK 7
class BankCard {
    constructor(owner, balance, limit) {
        this.owner = owner;
        this.balance = balance;
        this.limit = limit;
    }
    withdraw(amount) {
        return amount > this.limit && amount > this.balance ? "Error, the maximum withdrawal at a time is $10,000" : `Succesfully withdrawn: $${amount}`;
    }
}




// TASK 8
class Grade {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }
    getAverage() {
        const totalScores = this.scores.reduce((sum, item) => {
            return sum + item;
        }, 0);
        const averageScores = totalScores / this.scores.length;
        return averageScores;
    }
    isPassed() {
        return this.getAverage() > 60;
    }
}