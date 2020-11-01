import React, { useState } from "react";
import Main from "./components/Main";
import GameContext from "./context/GameContext";
import data from "./data/questions.json";
const App = () => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState();
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [results, setResults] = useState(false);

  const getQuestions = () => {
    let questionList = [];
    let questionCount = 0;
    while (questionCount < 10) {
      let randIndex = Math.floor(Math.random() * data.length);
      let randQuestion = data[randIndex];
      if (!questionList.includes(randQuestion)) {
        questionList.push(randQuestion);
        questionCount++;
      }
    }
    return questionList;
  };

  const onStart = () => {
    setGameState(true);
    setQuestions(getQuestions);
    setQuestionNumber(1);
    setCurrentQuestion(questions[0]);
  };

  const onRestart = () => {
    setQuestions(getQuestions);
    setQuestionNumber(1);
    setScore(0);
    setCurrentQuestion(questions[0]);
    setGameState(true);
    setResults(false);
  };

  const nextQuestion = () => {
    if (questionNumber < questions.length) {
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(questions[questionNumber - 1]);
    } else if (questionNumber + 1 > questions.length) {
      setGameState(false);
    }
  };
  const prevQuestion = () => {
    if (questionNumber > 0)
      setCurrentQuestion(questions.indexOf(currentQuestion) - 1);
  };
  const context = {
    score,
    setScore,
    gameState,
    setGameState,
    questions,
    setQuestions,
    getQuestions,
    currentQuestion,
    setCurrentQuestion,
    onStart,
    onRestart,
    nextQuestion,
    prevQuestion,
    questionNumber,
    setQuestionNumber,
    results,
    setResults,
  };

  return (
    <GameContext.Provider value={context}>
      <Main />
    </GameContext.Provider>
  );
};

export default App;
