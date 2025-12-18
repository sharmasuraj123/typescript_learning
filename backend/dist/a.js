"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegel(user) {
    return user.age >= 18;
}
const user = {
    firstName: "suraj",
    lastName: "sharma",
    email: "surja@gmail.com",
    age: 3,
    address: {
        city: "jaipur",
        pincode: 485748,
    },
};
const uer2 = {
    firstName: "kailash",
    email: "sur@gmain",
    age: 56,
    // no need to wright the lastName.
};
console.log(isLegel(user));
//# sourceMappingURL=a.js.map