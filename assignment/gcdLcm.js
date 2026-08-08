"use strict";
// Find GCD and LCM
let a = 12;
let b = 18;
let gcd = 1;
// Find GCD
for (let i = 1; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
        gcd = i;
    }
}
// Find LCM
let lcm = (a * b) / gcd;
console.log("GCD =", gcd);
console.log("LCM =", lcm);
