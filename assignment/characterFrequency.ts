// Character frequency

let str = "apple";

let freq: any = {};

for (let ch of str) {

    if (freq[ch]) {
        freq[ch]++;
    } else {
        freq[ch] = 1;
    }
}

console.log(freq);