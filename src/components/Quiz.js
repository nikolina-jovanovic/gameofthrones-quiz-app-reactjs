import React from 'react';
import questionsAndAnswers from "./QuestionsAndAnswersDB";
import { useState } from "react";

const Quiz = ({ name }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [tryAgain, setTryAgain] = useState(false);

  const tryAgainFun = () => {
    setTryAgain(true);
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsAndAnswers.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setTryAgain(false);
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score">
          <h3 style={{ marginTop: "20px", width: "80%" }}>
            You scored {score} questions out of {questionsAndAnswers.length} !
          </h3>
          {score < 8 ? (
            <p>
              {name}, your score of this quiz is quite low! 😕 We suggest
              getting some popcorn and re-watching our favorite show! 🍿
            </p>
          ) : score >= 8 && score <= 15 ? (
            <p>
              {name}, not bad! Maybe you should re-watch few episodes and
              remember some details! 🙃
            </p>
          ) : score > 15 ? (
            <p>
              {name}, woooho, great job! You are super-fan of this show!
              Congrats! 😍{" "}
            </p>
          ) : (
            ""
          )}
          <button
            style={{ marginTop: "20px", marginBottom: "20px" }}
            className="tryAgain-btn"
            onClick={tryAgainFun}
          >
            Try again
          </button>
          {tryAgain && <Quiz name={name} />}
        </div>
      ) : (
        <div className="quiz">
          <h6>
            question {currentQuestion + 1}/{questionsAndAnswers.length}
          </h6>
          <br />
          <div className="question-section">
            <h2
              style={{ width: "650px", minHeight: "20vh", marginTop: "20px" }}
            >
              {questionsAndAnswers[currentQuestion].question}
            </h2>
          </div>
          <div style={{ padding: "0px", margin: "0px" }}>
            {questionsAndAnswers[currentQuestion].answerOptions.map(
              (answerOption) => (
                <>
                  <button
                    className="answer-section"
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answer}
                  </button>
                  <br />
                </>
              )
            )}
            <button className="next-btn" onClick={nextQuestion}>
              <strong>&gt;&gt;</strong>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
