import React, { useState } from "react";
import Main from "./components/Main";
import GameContext from "./context/GameContext";

const App = () => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(false);

  const context = {
    score,
    setScore,
    gameState,
    setGameState,
  };

  return (
    <GameContext.Provider value={context}>
      <Main />
    </GameContext.Provider>
  );
};

export default App;
