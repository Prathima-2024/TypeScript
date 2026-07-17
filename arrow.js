"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FunctionDemo {
    // Traditional Function
    add(a, b) {
        return a + b;
    }
    // Arrow Function
    subtract = (a, b) => {
        return a - b;
    };
    // Shorthand Arrow Function (Implicit Return)
    multiply = (a, b) => a * b;
}
// Creating object
let obj = new FunctionDemo();
// Calling Traditional Function
let addition = obj.add(20, 10);
console.log("Addition using Traditional Function:", addition);
// Calling Arrow Function
let subtraction = obj.subtract(20, 10);
console.log("Subtraction using Arrow Function:", subtraction);
// Calling Shorthand Arrow Function
let multiplication = obj.multiply(20, 10);
console.log("Multiplication using Shorthand Arrow Function:", multiplication);
//# sourceMappingURL=arrow.js.map