import "./App.css";
import GameMatrix from "./components/GameMatrix";
import Header from "./components/Header";
import Logger from "./components/Logger";
import { GameStateProvider } from "./utils/GameStateProvider";

function App() {
  return (
    <>
      <Header />
      <GameStateProvider>
        <GameMatrix />
        <Logger />
      </GameStateProvider>
    </>
  );
}
export default App;
