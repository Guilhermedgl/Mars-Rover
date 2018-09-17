// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [
    ["x:0, y:0"]
  ]
}

// ======================

function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W"
  } else if (rover.direction === "W") {
    rover.direction = "S"
  } else if (rover.direction === "S") {
    rover.direction = "E"
  } else if (rover.direction === "E") {
    rover.direction = "N"
  }
  console.log("turnLeft was called!", rover);
}

function turnRight(rover) {
  if (rover.direction === "N") {
    rover.direction = "E"
  } else if (rover.direction === "E") {
    rover.direction = "S"
  } else if (rover.direction === "S") {
    rover.direction = "W"
  } else if (rover.direction === "W") {
    rover.direction = "N"
  }
  console.log("turnRight was called!", rover);
}

function moveForward(rover) {
  if (rover.direction === "N") {
    rover.y--
  } else if (rover.direction === "W") {
    rover.x--
  } else if (rover.direction === "S") {
    rover.y++
  } else if (rover.direction === "E") {
    rover.x++
  }
  rover.travelLog.push([`x:${rover.x}, y:${rover.y}`])
  console.log("moveForward was called", rover)
}


function commands(list) {
  list = list.split("")
  for (var i = 0; i < list.length; i++) {
    if (list[i] === "f") {
      moveForward(rover)
    } else if (list[i] === "l") {
      turnLeft(rover)
    } else if (list[i] === "r") {
      turnRight(rover)
    }
  }
}

console.log(rover);