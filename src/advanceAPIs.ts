// interface User {
//   readonly name: string;
//   age: number;
//   email?: string;
// }

// type updatedUser = Pick<User, "email" | "age">;

// function updateUser(user: updatedUser) {
//   console.log(`Email : ${user.email} , Age : ${user.age}`);
// }

// type partialUpdatedUser = Partial<updatedUser>;

// function partialUpdateU(user: partialUpdatedUser) {
//   console.log("asdsad");
// }

// type UserS = {
//   name: string;
//   age: number;
// };

// const user1: Readonly<UserS> = {
//   name: "Amit",
//   age: 132,
// };

// // user1.name = "sadasd";

// const user2: Readonly<User> = {
//   name: "Sumit",
//   age: 12,
// };

//                                                        Record

// Complex Way

// type Users = {
//   [key: string]: {
//     readonly name: string;
//     age: number;
//   };
// };

// Easier Way by using Record

// type Users = Record<string, { name: string; age: number }>;

// const users: Users = {
//   id1: {
//     name: "Amit",
//     age: 12,
//   },
//   id2: {
//     name: "Amit",
//     age: 12,
//   },
// };

//                                                                 Map

type User = {
  name: string;
  age: number;
  email: string;
};
const users = new Map<string, User>();

users.set("user1", { name: "Amit", age: 12, email: "amit@sumit.com" });
users.set("user2", { name: "Amit", age: 12, email: "amit@sumit.com" });
// users.set("user3", { name: "Amit", age: 12 });     // Error bcz email is not partial
console.log(users.get("user1"));
users.delete("user1");
console.log(users.get("user1"));
