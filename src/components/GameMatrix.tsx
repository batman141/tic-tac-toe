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
      <section className="playerInfoContainer">
        <div className="playerInfo">
          <span>Player 1: X</span>
          <span>Player 2: O</span>
        </div>
      </section>
      <table className="gamematrix" border={2} align="center">
        <tbody>
          <tr>
            <td
              className={`${state.colorboard[0]} ${
                !state.gameOver && state.board[0] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(0)}
            >
              {state.board[0]}
            </td>
            <td
              className={`${state.colorboard[1]} ${
                !state.gameOver && state.board[1] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(1)}
            >
              {state.board[1]}
            </td>
            <td
              className={`${state.colorboard[2]} ${
                !state.gameOver && state.board[2] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(2)}
            >
              {state.board[2]}
            </td>
          </tr>
          <tr>
            <td
              className={`${state.colorboard[3]} ${
                !state.gameOver && state.board[3] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(3)}
            >
              {state.board[3]}
            </td>
            <td
              className={`${state.colorboard[4]} ${
                !state.gameOver && state.board[4] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(4)}
            >
              {state.board[4]}
            </td>
            <td
              className={`${state.colorboard[5]} ${
                !state.gameOver && state.board[5] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(5)}
            >
              {state.board[5]}
            </td>
          </tr>
          <tr>
            <td
              className={`${state.colorboard[6]} ${
                !state.gameOver && state.board[6] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(6)}
            >
              {state.board[6]}
            </td>
            <td
              className={`${state.colorboard[7]} ${
                !state.gameOver && state.board[7] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(7)}
            >
              {state.board[7]}
            </td>
            <td
              className={`${state.colorboard[8]} ${
                !state.gameOver && state.board[8] === "" ? "pointer" : ""
              }`}
              onClick={() => handleClick(8)}
            >
              {state.board[8]}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GameMatrix;
