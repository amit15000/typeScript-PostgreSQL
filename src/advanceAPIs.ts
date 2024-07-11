interface User {
  readonly name: string;
  age: number;
  email?: string;
}

// type updatedUser = Pick<User, "email" | "age">;

// function updateUser(user: updatedUser) {
//   console.log(`Email : ${user.email} , Age : ${user.age}`);
// }

// type partialUpdatedUser = Partial<updatedUser>;

// function partialUpdateU(user: partialUpdatedUser) {
//   console.log("asdsad");
// }

type UserS = {
  name: string;
  age: number;
};

const user1: Readonly<UserS> = {
  name: "Amit",
  age: 132,
};

// user1.name = "sadasd";

const user2: Readonly<User> = {
  name: "Sumit",
  age: 12,
};
