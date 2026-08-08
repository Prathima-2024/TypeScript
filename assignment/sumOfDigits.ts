// Sum of digits

let num2 = 1234;
let sum1 = 0;

while (num2 > 0) {
    sum1 += num2 % 10;
    num2 = Math.floor(num2 / 10);
}

console.log(sum1);