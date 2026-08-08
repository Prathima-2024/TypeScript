// Readonly property

class StudentReadonly {

    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    display() {
        console.log(this.id);
    }
}

let student = new StudentReadonly(101);

student.display();