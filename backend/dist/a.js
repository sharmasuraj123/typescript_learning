"use strict";
// array in TS
Object.defineProperty(exports, "__esModule", { value: true });
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
function isLegal(users) {
    let legalUser = [];
    for (const user of users) {
        if (user.age > 18) {
            legalUser.push(user.name);
        }
    }
    return legalUser;
}
let users = [
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
//# sourceMappingURL=a.js.map