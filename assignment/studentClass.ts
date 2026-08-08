// Student class

class StudentClass {

    constructor(
        public name: string,
        public age: number
    ) {}

    display() {
        console.log(this.name, this.age);
    }
}

let s = new StudentClass("Rahul", 20);

s.display();