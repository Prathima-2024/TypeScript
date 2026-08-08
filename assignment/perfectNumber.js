"use strict";
// Perfect Number
let num1 = 28;
let total = 0;
for (let i = 1; i < num1; i++) {
    if (num1 % i == 0)
        total += i;
}
if (total == num1)
    console.log("Perfect Number");
else
    console.log("Not Perfect");
