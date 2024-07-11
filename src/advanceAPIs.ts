interface User {
  name: string;
  age: number;
  email: string;
}

type updatedUser = Pick<User, "email" | "age">;

function updateUser(user: updatedUser) {
  console.log(`Email : ${user.email} , Age : ${user.age}`);
}

type partialUpdatedUser = Partial<updatedUser>;

function partialUpdateU(user: partialUpdatedUser) {
  console.log("asdsad");
}
