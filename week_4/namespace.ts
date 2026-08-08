// Creating a namespace

namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

// Using namespace

console.log("Addition:", Calculator.add(20, 10));
console.log("Subtraction:", Calculator.subtract(20, 10));
console.log("Multiplication:", Calculator.multiply(20, 10));
console.log("Division:", Calculator.divide(20, 10));