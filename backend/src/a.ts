function isLegel(user: User): boolean {
  return user.age >= 18;
}

interface Address {
  city?: string;
  countary?: string;
  pincode: number;
}
interface User {
  firstName: string;
  lastName?: string; // ? tells that this is optional key.
  email: string;
  age: number;
  address?: Address;
}
const user: User = {
  firstName: "suraj",
  lastName: "sharma",
  email: "surja@gmail.com",
  age: 3,
  address: {
    city: "jaipur",
    pincode: 485748,
  },
};

const uer2: User = {
  firstName: "kailash",
  email: "sur@gmain",
  age: 56,
  // no need to wright the lastName.
};

console.log(isLegel(user));
