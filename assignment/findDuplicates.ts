// Print duplicate elements

let values = [1, 2, 2, 3, 4, 4];

let seen: any = {};

for (let v of values) {

    if (seen[v]) {
        console.log(v);
    } else {
        seen[v] = true;
    }
}