import { useReducer, type ReactNode } from "react";
import GameContext from "./GameContext";
import { gameReducer, initialState } from "./GameStateReducer";

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
