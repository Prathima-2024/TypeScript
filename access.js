"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    // Properties with access modifiers
    accountHolder;
    accountNumber;
    balance;
    // Constructor
    constructor(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Public method
    displayAccountDetails() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    }
    // Public method to deposit money
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited Amount:", amount);
    }
    // Public method to get balance
    getBalance() {
        return this.balance;
    }
    // Private method
    calculateInterest() {
        return this.balance * 0.05;
    }
    // Public method accessing private method
    showInterest() {
        console.log("Interest:", this.calculateInterest());
    }
}
// Child class
class SavingsAccount extends BankAccount {
    interestRate;
    constructor(holder, number, balance, interestRate) {
        super(holder, number, balance);
        this.interestRate = interestRate;
    }
    // Accessing protected property
    displaySavingsDetails() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
        console.log("Interest Rate:", this.interestRate + "%");
    }
}
// Creating objects
let account = new BankAccount("John", 123456, 50000);
console.log("Bank Account Details");
account.displayAccountDetails();
console.log("-------------------");
account.deposit(10000);
console.log("Current Balance:", account.getBalance());
console.log("-------------------");
account.showInterest();
console.log("-------------------");
let savings = new SavingsAccount("Alice", 987654, 75000, 6);
console.log("Savings Account Details");
savings.displaySavingsDetails();
//# sourceMappingURL=access.js.map