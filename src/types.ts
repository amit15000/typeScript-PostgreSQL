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

// Union | means one of several types
// similarly and &
type stringORnumber = string | number;

function age(a: stringORnumber) {
  console.log("Age : ", a);
}

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// For a profile display, only pick `name` and `email`
type UserProfile = Pick<User, "name"> & { email?: string };

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

// You can pass an object with both properties
displayUserProfile({
  name: "Amit",
  email: "amit@example.com",
});

// You can pass an object with only the name property
displayUserProfile({
  name: "Amit",
});

displayUserProfile({
  name: "Amit",
  email: "A12321@gams.com",
});

type UserProfile2 = { name: string } | { email: string };

const displayUserProfile2 = (user: UserProfile2) => {
  if ("name" in user) {
    console.log(`Name: ${user.name}`);
  }
  if ("email" in user) {
    console.log(`Email: ${user.email}`);
  }
};

// You can pass an object with only the name property
displayUserProfile2({
  email: "Amit",
});
