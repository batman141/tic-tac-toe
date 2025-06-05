import { useContext } from "react";
import GameContext from "../utils/GameContext";
import { gameEndInDraw } from "../utils/GameLogic";

export default function Logger() {
  const { state } = useContext(GameContext);
  const logMessage = `${state.player ? "Player 2" : "Player 1"}'s turn`;
  const gameOverMessage = `${
    gameEndInDraw(state.board, state.moveCount)
      ? "Draw !"
      : state.player
      ? "Player 1 wins!"
      : "Player 2 wins!"
  } `;

  return (
    <section className="gameloggerContainer">
      <ul className="gamelogger">
        <li>
          <strong>Game Log</strong>
        </li>
        <li>{state.gameOver ? gameOverMessage : logMessage}</li>
      </ul>
    </section>
  );
}
