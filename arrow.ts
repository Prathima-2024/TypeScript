class FunctionDemo {

    // Traditional Function
    add(a: number, b: number): number {
        return a + b;
    }


    // Arrow Function
    subtract = (a: number, b: number): number => {
        return a - b;
    };


    // Shorthand Arrow Function (Implicit Return)
    multiply = (a: number, b: number): number => a * b;

}


// Creating object
let obj = new FunctionDemo();


// Calling Traditional Function
let addition: number = obj.add(20, 10);
console.log("Addition using Traditional Function:", addition);


// Calling Arrow Function
let subtraction: number = obj.subtract(20, 10);
console.log("Subtraction using Arrow Function:", subtraction);


// Calling Shorthand Arrow Function
let multiplication: number = obj.multiply(20, 10);
console.log("Multiplication using Shorthand Arrow Function:", multiplication);