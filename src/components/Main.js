import React, { useContext } from "react";
import LeftMenu from "./LeftMenu";
import GameContext from "../context/GameContext";
import Question from "./Question";
const Main = () => {
  const { onStart, gameState } = useContext(GameContext);

  return (
    <div>
      <LeftMenu />
      <main className="main-content-container">
        <div className="header-container">
          <h1 className="header">Trivia Game!</h1>{" "}
        </div>
        {gameState === false ? (
          <>
            <div className="main-content">
              <h1>Welcome to my Trivia Game! Click start to begin!</h1>
            </div>
            <div>
              <button className="start-button" onClick={onStart}>
                Start!
              </button>
            </div>
          </>
        ) : (
          <Question />
        )}
      </main>
    </div>
  );
};

export default Main;
