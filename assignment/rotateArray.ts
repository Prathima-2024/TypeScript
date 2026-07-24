// Rotate array left by 2 positions

let numbers = [1, 2, 3, 4, 5];

let pos = 2;

let rotated = numbers.slice(pos).concat(numbers.slice(0, pos));

console.log(rotated);