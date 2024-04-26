interface UserType {
  username: string;
  phone: number;
  createdAt: Date;
}

const displayUser = (user: UserType) => {
  console.log(`Name ${user.username}, Phone : ${user.phone}`);
};
displayUser({
  username: "Amit",
  phone: 123123,
  createdAt: new Date(),
});
