"use strict";
// Missing number from 1 to 5
let array = [1, 2, 4, 5];
let totalSum = 5 * 6 / 2;
let arrSum = 0;
for (let n1 of array)
    arrSum += n1;
console.log(totalSum - arrSum);
