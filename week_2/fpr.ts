// Function with parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Function with string parameter and no return value
function greet(name: string): void {
    console.log("Hello, " + name);
}

// Function with no parameters and string return type
function getMessage(): string {
    return "Welcome to TypeScript";
}

// Function with number parameter and boolean return type
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Function with array parameter and void return type
function displayNumbers(numbers: number[]): void {
    console.log("Numbers:", numbers);
}

// Function with object parameter and string return type
function studentDetails(student: { name: string; age: number }): string {
    return "Name: " + student.name + ", Age: " + student.age;
}


// Calling functions
let result: number = add(10, 20);
console.log("Addition:", result);

greet("Alice");

let message: string = getMessage();
console.log(message);

let check: boolean = isEven(6);
console.log("Is 6 even?", check);

displayNumbers([1, 2, 3, 4, 5]);

let details: string = studentDetails({ name: "John", age: 21 });
console.log(details);