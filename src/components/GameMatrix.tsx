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
            <td className={state.colorboard[0]} onClick={() => handleClick(0)}>
              {state.board[0]}
            </td>
            <td className={state.colorboard[1]} onClick={() => handleClick(1)}>
              {state.board[1]}
            </td>
            <td className={state.colorboard[2]} onClick={() => handleClick(2)}>
              {state.board[2]}
            </td>
          </tr>
          <tr>
            <td className={state.colorboard[3]} onClick={() => handleClick(3)}>
              {state.board[3]}
            </td>
            <td className={state.colorboard[4]} onClick={() => handleClick(4)}>
              {state.board[4]}
            </td>
            <td className={state.colorboard[5]} onClick={() => handleClick(5)}>
              {state.board[5]}
            </td>
          </tr>
          <tr>
            <td className={state.colorboard[6]} onClick={() => handleClick(6)}>
              {state.board[6]}
            </td>
            <td className={state.colorboard[7]} onClick={() => handleClick(7)}>
              {state.board[7]}
            </td>
            <td className={state.colorboard[8]} onClick={() => handleClick(8)}>
              {state.board[8]}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GameMatrix;
