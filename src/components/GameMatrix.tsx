import { useContext } from "react";
import GameContext from "../utils/GameContext";

const GameMatrix = () => {
  const { state, dispatch } = useContext(GameContext);

  const handleClick = (idx: number) => {
    if (!state.gameOver && state.board[idx] === "") {
      dispatch({ type: "PLAY_MOVE", payload: { idx } });
      dispatch({ type: "INCREMENT_MOVE_COUNT" });
      dispatch({ type: "CHANGE_PLAYER" });
      dispatch({ type: "GAME_OVER" });
    }
  };

  // TODO: Add color coding to table cells and winner color
  return (
    <>
      <table className="gamematrix" border={2} align="center">
        <tbody>
          <tr>
            <td onClick={() => handleClick(0)}>{state.board[0]}</td>
            <td onClick={() => handleClick(1)}>{state.board[1]}</td>
            <td onClick={() => handleClick(2)}>{state.board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(3)}>{state.board[3]}</td>
            <td onClick={() => handleClick(4)}>{state.board[4]}</td>
            <td onClick={() => handleClick(5)}>{state.board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(6)}>{state.board[6]}</td>
            <td onClick={() => handleClick(7)}>{state.board[7]}</td>
            <td onClick={() => handleClick(8)}>{state.board[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GameMatrix;
