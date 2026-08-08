// Strong Number

let n = 145;
let temp1 = n;
let result = 0;

while (temp1 > 0) {

    let digit = temp1 % 10;

    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    result += fact;

    temp1 = Math.floor(temp1 / 10);
}

console.log(result == n ? "Strong Number" : "Not Strong Number");