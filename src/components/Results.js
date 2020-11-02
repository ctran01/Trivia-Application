import React, { useContext } from "react";
import GameContext from "../context/GameContext";

const Results = () => {
  const { score, onRestart } = useContext(GameContext);

  return (
    <div className="results-container">
      <h1 style={{ fontSize: "80px" }}> Game Over!</h1>
      <h2 style={{ fontSize: "50px" }}>You scored {score} out 10!</h2>
      <div style={{ fontSize: "25px" }}>Would you like to play again? </div>
      <button className="restart-button" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
};

export default Results;
