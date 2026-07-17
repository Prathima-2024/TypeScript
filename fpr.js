"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function with parameters and return type
function add(a, b) {
    return a + b;
}
// Function with string parameter and no return value
function greet(name) {
    console.log("Hello, " + name);
}
// Function with no parameters and string return type
function getMessage() {
    return "Welcome to TypeScript";
}
// Function with number parameter and boolean return type
function isEven(num) {
    return num % 2 === 0;
}
// Function with array parameter and void return type
function displayNumbers(numbers) {
    console.log("Numbers:", numbers);
}
// Function with object parameter and string return type
function studentDetails(student) {
    return "Name: " + student.name + ", Age: " + student.age;
}
// Calling functions
let result = add(10, 20);
console.log("Addition:", result);
greet("Alice");
let message = getMessage();
console.log(message);
let check = isEven(6);
console.log("Is 6 even?", check);
displayNumbers([1, 2, 3, 4, 5]);
let details = studentDetails({ name: "John", age: 21 });
console.log(details);
//# sourceMappingURL=fpr.js.map