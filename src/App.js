import React, { useState, useEffect } from "react";
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
  const [correctAnswer, setCorrectAnswer] = useState(null);

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
  useEffect(() => {
    setQuestions(getQuestions);
  }, []);

  const onStart = () => {
    setGameState(true);
    setQuestions(getQuestions);
    console.log(questions);
    setQuestionNumber(1);
    setCurrentQuestion(questions[0]);
    setResults(false);
  };

  const onRestart = () => {
    setResults(false);
    setCorrectAnswer(null);
    setQuestions(getQuestions);
    console.log(questions);
    setQuestionNumber(1);
    setScore(0);
    setCurrentQuestion(questions[0]);
    setGameState(true);
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
    questionNumber,
    setQuestionNumber,
    results,
    setResults,
    correctAnswer,
    setCorrectAnswer,
  };

  return (
    <GameContext.Provider value={context}>
      <Main />
    </GameContext.Provider>
  );
};

export default App;
