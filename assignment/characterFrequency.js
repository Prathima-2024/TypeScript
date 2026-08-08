"use strict";
// Character frequency
let str = "apple";
let freq = {};
for (let ch of str) {
    if (freq[ch]) {
        freq[ch]++;
    }
    else {
        freq[ch] = 1;
    }
}
console.log(freq);
