"use strict";
// Readonly property
class StudentReadonly {
    constructor(id) {
        this.id = id;
    }
    display() {
        console.log(this.id);
    }
}
let student = new StudentReadonly(101);
student.display();
