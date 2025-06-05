import "./styles.css";
import GameMatrix from "./components/GameMatrix";
import Header from "./components/Header";
import Logger from "./components/Logger";
import { GameStateProvider } from "./components/GameStateProvider";
import ResetGame from "./components/ResetGame";

function App() {
  return (
    <>
      <Header />
      <GameStateProvider>
        <GameMatrix />
        <Logger />
        <ResetGame />
      </GameStateProvider>
    </>
  );
}
export default App;
