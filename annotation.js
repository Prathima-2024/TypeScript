"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variable annotations
let studentName = "Rahul";
let age = 20;
let isStudent = true;
// Array annotation
let marks = [85, 90, 95];
// Function with parameter and return type annotations
function calculateAverage(scores) {
    let total = 0;
    for (let mark of scores) {
        total += mark;
    }
    return total / scores.length;
}
// Function call
let average = calculateAverage(marks);
// Display the values
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Marks:", marks);
console.log("Average:", average);
//# sourceMappingURL=annotation.js.map