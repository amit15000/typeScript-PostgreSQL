type Direction = "up" | "down" | "left" | "right";

async function keyStroke(key: Direction) {
  if (key == "up") {
    console.log("UP");
  }
}

keyStroke("up");
