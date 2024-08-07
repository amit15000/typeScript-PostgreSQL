// type Direction = "up" | "down" | "left" | "right";

// enum Direction {
//   up,
//   down,
//   left,
//   right,
// }

// Initialize enum

// enum Direction {
//   up = 20,
//   down,
//   left = 50,
//   right,
// }

// enum Direction {
//   up = "UP",
//   down = "Down",
//   left = 7,
//   right,
// }
// async function keyStroke(key: Direction) {
//   console.log(key);

//   if (key === Direction.up) {
//     console.log("Up key");
//   }
// }

// keyStroke(Direction.up);

// enum ResponseStatus {
//   success = 200,
//   error = 404,
//   notFound = 500,
// }

// app.get("/", (req, res) => {
//   res.status(ResponseStatus.notFound).json({
//     success: "false",
//     message: "Error",
//   });
// });

// Generics

type arrStrNum = string | number;

// function firstElm(arr: string[] | number[]) {
//   return arr[0];
// }

// const r = firstElm(["Amit", "Sumit"]);
// r.toUpperCase();

//  Generic Type
function identify<T>(arr: T[]) {
  return arr[0];
}

const r1 = identify<string>(["Amit", "Sumit"]);
const r2 = identify([1, 2, 3, 4, "A", "Asdsad"]);
const r3 = identify([1, 2, 3, 4]);

console.log(r1.toUpperCase());
