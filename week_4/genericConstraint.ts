// Generic constraint

interface Person {
    name: string;
}

function printName<T extends Person>(obj: T): void {
    console.log("Name:", obj.name);
}

printName({ name: "Rahul" });
printName({ name: "Priya" });