import React, { useContext } from "react";
import GameContext from "../context/GameContext";

const LeftMenu = () => {
  const { score, gameState, onRestart, onStart, questionNumber } = useContext(
    GameContext
  );

  return (
    <div className="left-menu-container">
      <div
        className="left-menu-container-stats"
        style={{ flexDirection: "column" }}
      >
        <div className="left-menu-container-question">
          Question Number: {questionNumber}
        </div>
        <div className="left-menu-container-score">Score: {score}</div>
        {gameState === true ? null : (
          <div className="left-menu-container-start" onClick={onStart}>
            <button className="left-menu-container-bottom__button">
              Start
            </button>
          </div>
        )}
        {gameState === false ? null : (
          <div className="left-menu-container-bottom" onClick={onRestart}>
            <button className="left-menu-container-bottom__button">
              Start Over
            </button>
          </div>
        )}
      </div>

      <div className="social">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Created by Chris Tran</p>
          <a href="https://github.com/ctran01">
            <p>GitHub</p>
          </a>
          <a href=" https://www.linkedin.com/in/chris-tran-/">
            <p>LinkedIn</p>
          </a>
          <a href="https://chrismtran.com/">
            <p>Personal Portfolio</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
