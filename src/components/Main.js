import React, { useContext, useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
import GameContext from "../context/GameContext";
import Question from "./Question";
const Main = () => {
  const {
    questions,
    setQuestions,
    onStart,
    setCurrentQuestion,
    currentQuestion,
    gameState,
    getQuestions,
  } = useContext(GameContext);

  // const questionList = data.map((question) => {
  //   return <div>{question.question}</div>;
  // });
  useEffect(() => {
    setQuestions(getQuestions);
  }, []);

  return (
    <div>
      <LeftMenu />
      <main className="main-content-container">
        <h1 className="header">Trivia Game! </h1>
        {gameState === false ? (
          <>
            <div className="main-content">
              Welcome to my Trivia Game! Click start to begin!
            </div>
            <div>
              <button onClick={onStart}>Start!</button>
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
