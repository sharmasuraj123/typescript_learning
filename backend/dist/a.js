"use strict";
// learning the Pick
// making the another type taking the keys of the existing interfaces
Object.defineProperty(exports, "__esModule", { value: true });
function display(arg) {
    if (arg.userId !== undefined)
        return `${arg.name} and ${arg.userId} `;
    else
        return `${arg.name}  `;
}
const user = {
    name: "suraj",
    // no need to write even a single key because all user is partial . so if user:pickUser = {} , it is fine.
};
console.log(display(user));
//# sourceMappingURL=a.js.map