"use strict";
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function doSomething(keyPressed: Direction) {
// 	// do something.
// }
// doSomething(Direction.Up)
// console.log(Direction.Left)
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something.
}
doSomething(Direction.Down);
console.log(Direction.Down);
//# sourceMappingURL=a.js.map