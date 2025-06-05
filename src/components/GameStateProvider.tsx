import { useReducer, type ReactNode } from "react";
import GameContext from "../utils/GameContext";
import { gameReducer, initialState } from "../utils/GameStateReducer";

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
