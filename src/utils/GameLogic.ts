const horizontalWin = (board: string[]): boolean => {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== "")
    return true;
  if (board[3] === board[4] && board[4] === board[5] && board[3] !== "")
    return true;
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== "")
    return true;
  return false;
};

const verticalWin = (board: string[]): boolean => {
  if (board[0] === board[3] && board[3] === board[6] && board[0] !== "")
    return true;
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== "")
    return true;
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== "")
    return true;
  return false;
};

const diagonalWin = (board: string[]): boolean => {
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== "")
    return true;
  if (board[2] === board[4] && board[4] === board[6] && board[2] !== "")
    return true;
  return false;
};

const gameEndLogic = (board: string[]): boolean => {
  if (horizontalWin(board)) {
    return true;
  }
  if (verticalWin(board)) {
    return true;
  }
  if (diagonalWin(board)) {
    return true;
  }
  return false;
};

export const gameEnd = (board: string[], moves: number): boolean => {
  if (moves >= 9) {
    return true;
  } else if (gameEndLogic(board)) {
    return true;
  }
  return false;
};

export const gameEndInDraw = (board: string[], moves: number): boolean => {
  return !gameEndLogic(board) && moves >= 9;
};
