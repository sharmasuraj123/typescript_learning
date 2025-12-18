// interfaces extends interfaces , so  all properties will go to child interfaces. if we make a obj of the
// child interface then , we must include the parent keys , else it throw an error . it is just like & in types

// interface A {
//   x: number;
//   y: number;
// }

// interface A {
//   name: string;
// }

// const persion: A = {
//   x: 4,
//   y: 5,
//   name: "su",
// };



interface A {
  x: number;
  y: number;
}

interface B extends A {
  name: string;
}

const newpersioin: B = {
  x: 4,
  y: 6,
  name: "suraj",
};
