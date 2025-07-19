import React, { useState } from 'react';
import questions from '../data/questions';
import Question from './Qustion';
import './Quiz.css';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option.text);
    if (option.isCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="title">Interactive Quiz</h1>
      {showResult ? (
        <div className="result-section">
          <h2>Your Final Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="score-section">Score: {score}</div>
          <Question
            question={questions[currentIndex]}
            handleAnswerClick={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;