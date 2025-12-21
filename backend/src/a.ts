// Map and Record

// 1 Record
/*
  it is used to make key value pair in better way.
 */

// interface User {
//   name: string;
//   id: number;
// }

// type user = Record<string, User>;

// const person: user = {
//   "per1": { name: "suraj", id: 45 },
//   "per2": { name: "suraj", id: 45 },
// };

// 2 Map

/*
  it is used to make key value pair in better way.
 */

// const userMap = new Map();

// userMap.set("per1", { name: "suraj", id: 49 });
// userMap.set("per2", { name: "sharma", id: 19 });
// userMap.set("per3", { name: "rohit" });

// console.log(userMap.get("per1"));

// when we fix the structure in Map

interface User {
  name: string;
  id: number;
}

const userMap = new Map<string, User>();

userMap.set("per1", { name: "suraj", id: 49 });
userMap.set("per2", { name: "sharma", id: 19 });
// userMap.set("per3", { name: "rohit" });  // this will show the error.

console.log(userMap.get("per1"));
