class Employee {

    // Readonly property
    readonly employeeId: number;

    // Static property
    static companyName: string = "Tech Solutions";

    // Normal properties
    public name: string;
    public salary: number;

    // Constructor
    constructor(id: number, name: string, salary: number) {
        this.employeeId = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public displayDetails(): void {
        console.log("Employee ID:", this.employeeId);
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Company:", Employee.companyName);
    }

    // Static method
    static changeCompanyName(newName: string): void {
        Employee.companyName = newName;
    }
}


// Creating objects
let emp1 = new Employee(101, "John", 50000);
let emp2 = new Employee(102, "Alice", 60000);


// Display employee details
console.log("Employee 1 Details");
emp1.displayDetails();

console.log("--------------------");

console.log("Employee 2 Details");
emp2.displayDetails();

console.log("--------------------");


// Accessing static property using class name
console.log("Original Company Name:", Employee.companyName);


// Changing static property using static method
Employee.changeCompanyName("Global Tech");


console.log("Updated Company Name:", Employee.companyName);

console.log("--------------------");


// Readonly property cannot be changed
// emp1.employeeId = 200;  // Error: Cannot assign to 'employeeId' because it is a read-only property