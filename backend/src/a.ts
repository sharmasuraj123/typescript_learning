// implementing the interface using the class.

interface People {
  name: string;
  age: number;
  greet():string;
}

class Employee implements People {
  name: string;
  age: number;
  constructor(a: string, b: number) {
    this.name = a;
    this.age = b;
  }

  greet(): string {
    return "hello";
  }
}

const manager = new Employee("suraj",23);
console.log(manager);
console.log(manager.greet())
