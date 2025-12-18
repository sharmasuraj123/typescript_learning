// implementing the interface using the class.

abstract class People {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }
  abstract greet(): string;

  hello() {
    return "hello raja ji";
  }
}

class Employee extends People {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    super(a, b);
    this.name = a;
    this.age = b;
  }

  greet(): string {
    return "hello";
  }
}

const manager = new Employee("suraj", 23);

console.log(manager.greet());
console.log(manager.hello());
