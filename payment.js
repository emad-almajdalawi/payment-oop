// "use strict";

/**
 * A class to create user objects which contains name and userId (which is a unique id).
 * @param {String} name The user's name.
 */
class User {
    static id = 1

    constructor(name, balance) {
        this.userId = User.id.toString()
        this.name = name
        this.bankAccount = new Bank(balance)
        User.id++
    }

    /**
     * A method to inqure about the user's informations.
     * @returns {String} A message of the User's information (the name and id).
     */
    get userInfo() {
        return ` ${this.name} is the owner of the account with the id ${this.userId}`
    }
}


/**
 * A class to create a new product's object that have a name and price.
 * @param {String} name The name of the product.
 * @param {Number} price The price of the product.
 */
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    /**
     * A methhod to make a sale on a product (update its price).
     * @param {Number} percentage The percentage of the sale as a float number between 0 and 1
     * @returns {String} The new price of the product.
     */
    sale(percentage) {
        if (typeof percentage == 'number') {
            if (percentage <= 1 && percentage >= 0) {
                this.price = this.price - this.price * percentage
                return `The new price of ${this.name} is $${this.price}`
            }
            else return 'Please enter a number between 0 and 1'
        }
        else return 'Please enter a number!'
    }
}


/**
 * A class to create bank objects which contains the bank-account id and its balance.
 * @param {Number} balance The intial balance of the bank account.
 */
class Bank {
    static id = 1

    constructor(balance) {
        this.accountId = Bank.id.toString()
        this.balance = balance
        Bank.id++
    }

    /**
     * A method to enquire about the balance of the account.
     * @returns {String} A message of the bank account's id and balance.
     */
    bankStatuse() {
        return `The balance of the account ${this.accountId} is $${this.balance}`
    }

    /**
     * A method to diposit money in the bank account.
     * @param {Number} amount The amount of money to be deposited in the bank acount.
     * @returns {String} A message of the added amount and the new balance of the bank account
     */
    deposit(amount) {
        if (typeof (amount) == 'number') {
            this.balance += amount
            return `Successfull, $${amount} has been added to your account, the current balance is $${this.balance}`
        }
        else return 'Please enter a number!'
    }

    /**
     * A method to withdraw money from the bank account.
     * @param {Number} amount The amount of money to be withdrowed from the bank acount.
     * @returns {String} A message of the subtracted amount and the new balance of the bank account
     */
    withdraw(amount) {
        if (typeof (amount) == 'number') {
            this.balance -= amount
            return `Successfull, $${amount} has been withdrown from your account, the current balance is $${this.balance}`
        }
        else return 'Please enter a number!'
    }

    /**
     * A method to buy a product (to subtract the price of the product from the bank account).
     * @param {Product} product An object of the product which consist of product name and price.
     * @returns A message of the product's name and price and the new balance of the bank account.
     */
    buy(product) {
        if (product instanceof Product) {
            if (this.balance >= product.price) {
                this.balance = this.balance - product.price
                return `Payment succeded, you bought a ${product.name} for $${product.price}, and your balance now is $${this.balance}`
            }
            else return `The balance is $${this.balance}, which is not sufficient to buy ${product.name}, its price is $${product.price}`
        }
        else return "Product not found, Please enter the product's object!"
    }
}



// Products instances
phone = new Product('Phone', 500)
laptop = new Product('LapTop', 1000)
car = new Product('Car', 12000)
car2 = new Product('Car2', 10000)

console.log(car2.sale(10))
console.log(car2.sale(0.1))

console.log(phone)
console.log(laptop)
console.log(car)
console.log(car2)


// Users instances
mohammad = new User('Mohammad', 400)
jehad = new User('Jehad', 1500)
emad = new User('Emad', 15000)

console.log(mohammad)
console.log(mohammad.userInfo)
console.log(jehad)
console.log(jehad.userInfo)
console.log(emad)
console.log(emad.userInfo)


// deposits
console.log(mohammad.bankAccount.deposit('50'))
console.log(mohammad.bankAccount.deposit(50))


//withdraw
console.log(mohammad.bankAccount.withdraw('50'))
console.log(mohammad.bankAccount.withdraw(50))


// buy 
console.log(mohammad.bankAccount.buy('car'))
console.log(mohammad.bankAccount.buy(car))
console.log(mohammad.bankAccount.buy(car))
console.log(emad.bankAccount.buy(car))