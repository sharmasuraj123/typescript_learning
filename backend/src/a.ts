// types

type User = {
  name: string;
  userid: number;
};

type Admin = {
  name: string;
  adminid: number;
};

type AdminOrUser = Admin | User;

function fun(person: AdminOrUser): string {
  return `welcome ${person.name}`;// you can't user person.userid because it can be or can't be.
}

let person: AdminOrUser = {
  name: "surj",
  userid: 45,
  adminid: 56,
};

console.log(fun(person))
