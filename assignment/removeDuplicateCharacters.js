"use strict";
// Remove duplicate characters
let text = "programming";
let result1 = "";
for (let ch of text) {
    if (!result1.includes(ch)) {
        result1 += ch;
    }
}
console.log(result1);
