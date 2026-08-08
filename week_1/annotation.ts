// Variable annotations
let studentName: string = "Rahul";
let age: number = 20;
let isStudent: boolean = true;

// Array annotation
let marks: number[] = [85, 90, 95];

// Function with parameter and return type annotations
function calculateAverage(scores: number[]): number {
    let total: number = 0;

    for (let mark of scores) {
        total += mark;
    }

    return total / scores.length;
}

// Function call
let average: number = calculateAverage(marks);

// Display the values
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Student:", isStudent);
console.log("Marks:", marks);
console.log("Average:", average);