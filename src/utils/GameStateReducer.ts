import { gameEnd } from "./GameLogic";

export const initialState = {
  board: Array(9).fill(""),
  colorboard: Array(9).fill(""),
  player: false,
  moveCount: 0,
  gameOver: false,
};

export const gameReducer = (state: any, action: any) => {
  switch (action.type) {
    case "PLAY_MOVE":
      return {
        ...state,
        board: (() => {
          const updatedArray = [...state.board];
          updatedArray[action.payload?.idx] = state.player ? "O" : "X";
          return updatedArray;
        })(),
        colorboard: (() => {
          const updatedColorBoard = [...state.colorboard];
          updatedColorBoard[action.payload?.idx] = state.player
            ? "blueCell"
            : "redCell";
          return updatedColorBoard;
        })(),
      };
    case "CHANGE_PLAYER":
      return { ...state, player: !state.player };
    case "INCREMENT_MOVE_COUNT":
      return { ...state, moveCount: state.moveCount + 1 };
    case "GAME_OVER":
      return { ...state, gameOver: gameEnd(state.board, state.moveCount) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
