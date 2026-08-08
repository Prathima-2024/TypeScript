// Generic function

function display<T>(value: T): T {
    return value;
}

console.log(display<number>(100));
console.log(display<string>("Welcome"));
console.log(display<boolean>(true));