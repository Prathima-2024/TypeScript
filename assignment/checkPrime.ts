// Check whether a number is prime

let num: number = 17;
let isPrime: boolean = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime" : "Not Prime");