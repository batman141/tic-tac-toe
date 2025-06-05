import "./styles.css";
import GameMatrix from "./components/GameMatrix";
import Header from "./components/Header";
import Logger from "./components/Logger";
import { GameStateProvider } from "./components/GameStateProvider";
import ResetGame from "./components/ResetGame";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <GameStateProvider>
        <GameMatrix />
        <Logger />
        <ResetGame />
      </GameStateProvider>
    </div>
  );
}
export default App;
