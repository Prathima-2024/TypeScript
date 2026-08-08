// Access modifiers

class Employee {

    public name = "John";

    private salary = 50000;

    protected department = "IT";

    display() {

        console.log(this.name);

        console.log(this.salary);

        console.log(this.department);
    }
}

let emp = new Employee();

emp.display();