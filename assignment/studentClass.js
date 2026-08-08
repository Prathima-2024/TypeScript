"use strict";
// Student class
class StudentClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name, this.age);
    }
}
let s = new StudentClass("Rahul", 20);
s.display();
