class Employee {

    // Properties with access modifiers
    private id: number;
    public name: string;
    protected department: string;
    private salary: number;

    // Constructor Overloading
    constructor();
    constructor(id: number, name: string);
    constructor(id: number, name: string, department: string, salary: number);

    // Constructor Implementation
    constructor(
        id: number = 0,
        name: string = "Unknown",
        department: string = "Not Assigned",
        salary: number = 0
    ) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Method to display employee details
    public displayDetails(): void {
        console.log("Employee ID:", this.id);
        console.log("Employee Name:", this.name);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }

    // Method to calculate annual salary
    public calculateAnnualSalary(): number {
        return this.salary * 12;
    }

    // Method to update salary
    public updateSalary(newSalary: number): void {
        this.salary = newSalary;
        console.log("Salary updated successfully");
    }
}


// Child class demonstrating inheritance
class Manager extends Employee {

    private teamSize: number;

    constructor(
        id: number,
        name: string,
        department: string,
        salary: number,
        teamSize: number
    ) {
        super(id, name, department, salary);
        this.teamSize = teamSize;
    }

    // Method overriding
    public displayManagerDetails(): void {
        this.displayDetails();
        console.log("Team Size:", this.teamSize);
    }
}


// Creating objects
let emp1 = new Employee();
let emp2 = new Employee(101, "John");
let emp3 = new Employee(102, "Alice", "IT", 50000);

let manager = new Manager(
    103,
    "Robert",
    "Development",
    80000,
    10
);


// Calling methods
console.log("Employee 1 Details");
emp1.displayDetails();

console.log("----------------------");

console.log("Employee 2 Details");
emp2.displayDetails();

console.log("----------------------");

console.log("Employee 3 Details");
emp3.displayDetails();

console.log("Annual Salary:", emp3.calculateAnnualSalary());

console.log("----------------------");

console.log("Manager Details");
manager.displayManagerDetails();

console.log("----------------------");

emp3.updateSalary(60000);
console.log("New Annual Salary:", emp3.calculateAnnualSalary());