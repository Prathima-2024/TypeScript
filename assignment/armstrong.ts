// Check Armstrong number

let number = 153;
let temp = number;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}

if (sum == number)
    console.log("Armstrong");
else
    console.log("Not Armstrong");