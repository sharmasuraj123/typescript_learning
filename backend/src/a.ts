// learning the Pick
// making the another type taking the keys of the existing interfaces

// interface User {
//   name: string;
//   userId: number;
//   pincode: number;
// }

// type PickedUser = Pick<User, "name" | "userId">;

// function display(arg: PickedUser): string {
//   return `${arg.name} and ${arg.userId} `;
// }



// Partial learning 

// interface User {
//   name: string;
//   userId: number;
//   pincode: number;
// }

// type pickUser = Partial<User>;

// function display(arg: pickUser) {
//   if (arg.userId !== undefined) return `${arg.name} and ${arg.userId} `;
//   else return `${arg.name}  `;
// }

// const user: pickUser = {
//   name: "suraj",
//   // no need to write even a single key because all user is partial . so if user:pickUser = {} , it is fine.
// };
// console.log(display(user));




// explation of Readonly

interface User {
  name: string;
  userId: number;
  pincode: number;
}

type pickUser = Readonly<User>;

function display(arg: pickUser) {
  if (arg.userId !== undefined) return `${arg.name} and ${arg.userId} `;
  else return `${arg.name}  `;
}

let user: pickUser = {
  name: "suraj",       
  userId:123,
  pincode:1111
};

// let user.name = "mohan";   // we can't change the any key of the user because it is Readonly type.
console.log(display(user));

