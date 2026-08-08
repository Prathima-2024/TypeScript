"use strict";
// Access modifiers
class Employee {
    constructor() {
        this.name = "John";
        this.salary = 50000;
        this.department = "IT";
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let emp = new Employee();
emp.display();
