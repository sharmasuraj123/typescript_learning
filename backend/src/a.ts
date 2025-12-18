// array in TS

// let arr: number[] = [23, 4, 45, 6];

// function masValue(a: number[]) {
//   let max = -Infinity;
//   for (let num of a) {
//     if (num>max) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log("the max value of arr is :  "+ masValue(arr) )



// find the legal user from user list.

function isLegal(users: User[]): string[] {
  let legalUser: string[] = [];
  for (const user of users) {
    if (user.age > 18) {
      legalUser.push(user.name);
    }
  }
  return legalUser;
}

interface Address {
  city: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address[];
}

let users: User[] = [
  {
    name: "suraj",
    age: 12,
    address: [
      { city: "dubai", pincode: 111111 },
      { city: "jaipur", pincode: 999999 },
    ],
  },
  {
    name: "raju",
    age: 21,
    address: [
      { city: "dubai", pincode: 111111 },
      { city: "jaipur", pincode: 999999 },
    ],
  },
  {
    name: "raja ji",
    age: 32,
    address: [
      { city: "dubai", pincode: 111111 },
      { city: "jaipur", pincode: 999999 },
    ],
  },
];

console.log(isLegal(users));