"use strict";
// let name:string = "suraj";
// console.log(name);
// name = "56";
// console.log(name);
Object.defineProperty(exports, "__esModule", { value: true });
// problem 1
// function Greet(firstName:string){
//    console.log("hello " + firstName);
// }
// Greet("raj");
// PROBLEM 2
// function Sum (a:number,b:number):number{
//     return a+b;
// }
// const sum:number = Sum(3,45);
// console.log(sum);
// PROBLEM 3
// function isLegal(age: number): boolean {
//   return age >= 18 ? true : false;
// }
// console.log(isLegal(45));
// PROBLEM 4
function Greet(fun) {
    setTimeout(fun, 1000);
}
Greet(function () {
    console.log("hello");
});
//# sourceMappingURL=a.js.map