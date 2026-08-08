"use strict";
// Count element frequency
let nums = [1, 2, 2, 3, 1];
let count = {};
for (let n of nums) {
    if (count[n])
        count[n]++;
    else
        count[n] = 1;
}
console.log(count);
