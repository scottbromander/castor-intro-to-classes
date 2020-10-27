class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduceSelf() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}!`);
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position) {
        super(firstName, lastName, age);
        this.position = position;
    }
}

const newPerson = new Person('Rachael', 'Bromander', 38);
const newEmployee = new Employee('Scott', 'Bromander', 37, 'Instructor');

console.log(newPerson);
console.log(newEmployee);
newEmployee.introduceSelf();


// Developer Files -> Compiler -> Output Files