// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Up)
// console.log(Direction.Left)

enum Direction {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Down)
console.log(Direction.Down);