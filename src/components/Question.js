import React, { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import Results from "./Results";
const Question = () => {
  const {
    questions,
    currentQuestion,
    setScore,
    score,
    questionNumber,
    setQuestionNumber,
    setCurrentQuestion,
    setGameState,
    gameState,
    results,
    setResults,
    correctAnswer,
    setCorrectAnswer,
  } = useContext(GameContext);
  const [answerChoices, setAnswerChoices] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState();

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
      } else if (selectedAnswer !== currentQuestion.correct) {
        setCorrectAnswer(false);
      }
    }
  };

  useEffect(() => {
    let newList = shuffleAnswers(
      currentQuestion.incorrect.concat(currentQuestion.correct)
    );
    setAnswerChoices(newList);
  }, [currentQuestion]);

  const nextQuestion = () => {
    if (questionNumber <= questions.length) {
      console.log(answerChoices);
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(questions[questionNumber - 1]);

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
    setCorrectAnswer(null);
    setSelectedAnswer();
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
          {/* Shows submit button only if answer has not been checked and there are still more questions */}
          {correctAnswer === null && questionNumber <= 10 && (
            <div className="submitButton button">
              <button
                className="button"
                onClick={checkAnswer}
                style={{ fontSize: "15px" }}
              >
                Submit
              </button>
            </div>
          )}
          {/* Shows end results page if number of questions = 10 else show next question button */}
          {correctAnswer !== null && questionNumber <= 10 && (
            <div className="nextButton button">
              {questionNumber === 10 ? (
                <button
                  className="button"
                  onClick={showResults}
                  style={{ fontSize: "15px" }}
                >
                  Show Results
                </button>
              ) : (
                <button
                  className="button"
                  onClick={nextQuestion}
                  style={{ fontSize: "15px" }}
                >
                  Next Question
                </button>
              )}
            </div>
          )}

          <div className="Result Container">
            {/* If correct answer, message shows up letting user know */}
            {correctAnswer !== null && correctAnswer === true && (
              <div>
                <p style={{ fontSize: "20px", backgroundColor: "lightgreen" }}>
                  Correct! The correct answer choice was{" "}
                  {currentQuestion.correct}.
                </p>
              </div>
            )}
            {/* if incorrect answer, message shows correct answer */}
            {correctAnswer !== null &&
              correctAnswer === false &&
              gameState === true && (
                <div>
                  <p style={{ fontSize: "20px", backgroundColor: "lightpink" }}>
                    Incorrect! The correct answer choice was{" "}
                    {currentQuestion.correct} .
                  </p>
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
