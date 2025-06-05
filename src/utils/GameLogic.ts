const horizontalWin = (value: any[]): boolean => {
  if (value[0] === value[1] && value[1] === value[2] && value[0] !== "")
    return true;
  if (value[3] === value[4] && value[4] === value[5] && value[3] !== "")
    return true;
  if (value[6] === value[7] && value[7] === value[8] && value[6] !== "")
    return true;
  return false;
};

const verticalWin = (value: any[]): boolean => {
  if (value[0] === value[3] && value[3] === value[6] && value[0] !== "")
    return true;
  if (value[1] === value[4] && value[4] === value[7] && value[1] !== "")
    return true;
  if (value[2] === value[5] && value[5] === value[8] && value[2] !== "")
    return true;
  return false;
};

const diagonalWin = (value: any[]): boolean => {
  if (value[0] === value[4] && value[4] === value[8] && value[0] !== "")
    return true;
  if (value[2] === value[4] && value[4] === value[6] && value[2] !== "")
    return true;
  return false;
};

const gameEndLogic = (value: any[]): boolean => {
  if (horizontalWin(value)) {
    console.log("horizontal wins");
    return true;
  }
  if (verticalWin(value)) {
    console.log("vertical wins");
    return true;
  }
  if (diagonalWin(value)) {
    console.log("diagonal wins");
    return true;
  }
  return false;
};

export const gameEnd = (value: any[], moves: number): boolean => {
  if (moves >= 9) {
    console.log("Game end: draw");
    return true;
  } else if (gameEndLogic(value)) {
    console.log("Player wins and game end");
    return true;
  }
  return false;
};
