class BankAccount {

    // Properties with access modifiers
    public accountHolder: string;
    private accountNumber: number;
    protected balance: number;

    // Constructor
    constructor(
        accountHolder: string,
        accountNumber: number,
        balance: number
    ) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Public method
    public displayAccountDetails(): void {
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    }

    // Public method to deposit money
    public deposit(amount: number): void {
        this.balance += amount;
        console.log("Deposited Amount:", amount);
    }

    // Public method to get balance
    public getBalance(): number {
        return this.balance;
    }

    // Private method
    private calculateInterest(): number {
        return this.balance * 0.05;
    }

    // Public method accessing private method
    public showInterest(): void {
        console.log("Interest:", this.calculateInterest());
    }
}


// Child class
class SavingsAccount extends BankAccount {

    private interestRate: number;

    constructor(
        holder: string,
        number: number,
        balance: number,
        interestRate: number
    ) {
        super(holder, number, balance);
        this.interestRate = interestRate;
    }

    // Accessing protected property
    public displaySavingsDetails(): void {
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

let savings = new SavingsAccount(
    "Alice",
    987654,
    75000,
    6
);

console.log("Savings Account Details");
savings.displaySavingsDetails();