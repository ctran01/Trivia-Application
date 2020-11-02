import { render } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import Results from "./Results";
const Question = () => {
  const {
    questions,
    currentQuestion,
    setScore,
    score,
    // nextQuestion,
    questionNumber,
    setQuestionNumber,
    setCurrentQuestion,
    setGameState,
    gameState,
    results,
    setResults,
  } = useContext(GameContext);
  const [answerChoices, setAnswerChoices] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const shuffleAnswers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (selectedAnswer) {
      if (selectedAnswer === currentQuestion.correct) {
        setCorrectAnswer(true);
        setScore(score + 1);
        // console.log(questionNumber);
      } else if (selectedAnswer !== currentQuestion.correct) {
        setCorrectAnswer(false);
        // console.log(questionNumber);
      }
    }
  };

  useEffect(() => {
    // console.log(currentQuestion);
    let newList = currentQuestion.incorrect;
    newList.push(currentQuestion.correct);
    // let newNew = shuffleAnswers(newList);
    setAnswerChoices(newList);
  }, [currentQuestion]);

  const nextQuestion = () => {
    if (questionNumber <= questions.length) {
      console.log(answerChoices);
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(questions[questionNumber - 1]);
      setAnswerChoices(shuffleAnswers(answerChoices));
      setSelectedAnswer();
      setCorrectAnswer(null);
      console.log(gameState);
      console.log(questionNumber);
    } else {
      setGameState(false);
    }
  };

  const showResults = () => {
    setResults(true);
  };
  return (
    <>
      {results === false ? (
        <div className="question-container">
          <div className="question">
            <h2 className="question__header">{currentQuestion.question}</h2>
            <div className="question-answer-container">
              {answerChoices.map((answerChoice, index) => {
                return (
                  <div key={index} className="question-answer__input">
                    <label>
                      <input
                        key={index}
                        type="radio"
                        name="selected"
                        value={answerChoice}
                        onClick={handleChange}
                        readOnly={true}
                        checked={selectedAnswer === answerChoice}
                      />
                      {answerChoice}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {correctAnswer === null && questionNumber <= 10 && (
            <div className="submitButton">
              <button onClick={checkAnswer}>Submit</button>
            </div>
          )}
          {correctAnswer !== null && questionNumber <= 10 && (
            <div className="nextButton">
              {questionNumber === 10 ? (
                <button onClick={showResults}>Show Results</button>
              ) : (
                <button onClick={nextQuestion}>Next Question</button>
              )}
            </div>
          )}
          <div className="Result Container">
            {correctAnswer !== null && correctAnswer === true && (
              <div>
                Correct! The correct answer choice was {currentQuestion.correct}
              </div>
            )}
            {correctAnswer !== null && correctAnswer === false && (
              <div>
                Incorrect! The correct answer choice was{" "}
                {currentQuestion.correct}{" "}
              </div>
            )}
          </div>
        </div>
      ) : (
        <Results></Results>
      )}
    </>
  );
};

export default Question;
