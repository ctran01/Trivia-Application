import React, { useContext } from "react";
import GameContext from "../context/GameContext";

const LeftMenu = () => {
  const { score, gameState, onRestart, onStart, questionNumber } = useContext(
    GameContext
  );

  return (
    <div className="left-menu-container">
      <div className="left-menu-container-top"></div>
      <div className="left-menu-container-middle">
        Question Number: {questionNumber}
      </div>
      <div className="left-menu-container-middle">Score: {score}</div>
      {gameState === true ? null : (
        <div className="left-menu-container-bottom" onClick={onStart}>
          <button className="left-menu-container-bottom__button">Start</button>
        </div>
      )}
      <div className="left-menu-container-bottom" onClick={onRestart}>
        <button className="left-menu-container-bottom__button">
          Start Over
        </button>
      </div>
    </div>
  );
};

export default LeftMenu;
