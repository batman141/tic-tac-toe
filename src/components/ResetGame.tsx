import { useContext } from "react";
import GameContext from "../utils/GameContext";

export default function ResetGame() {
  const { dispatch } = useContext(GameContext);
  function handleClick() {
    dispatch({ type: "RESET" });
  }

  return (
    <>
      <button className="resetGame" onClick={handleClick}>
        Reset Game
      </button>
    </>
  );
}
