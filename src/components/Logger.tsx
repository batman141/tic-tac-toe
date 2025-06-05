import { useContext } from "react";
import GameContext from "../utils/GameContext";

export default function Logger() {
  const { state } = useContext(GameContext);
  const logMessage = `${state.player ? "Player 2" : "Player 1"}'s turn`;
  return (
    <section className="gameloggerContainer">
      <ul className="gamelogger">
        <li>{state.gameOver ? "Game Over" : logMessage}</li>
      </ul>
    </section>
  );
}
