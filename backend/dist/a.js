"use strict";
// implementing the interface using the class.
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    greet() {
        return "hello";
    }
}
const manager = new Employee("suraj", 23);
console.log(manager);
console.log(manager.greet());
//# sourceMappingURL=a.js.map