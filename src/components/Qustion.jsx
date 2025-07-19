import React from 'react';
import './Question.css';

const Question = ({ question, handleAnswerClick, selectedAnswer }) => {
  return (
    <div className="question-container">
      <h2 className="question-text">{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer !== null
                ? option.isCorrect
                  ? 'correct'
                  : option.text === selectedAnswer
                  ? 'incorrect'
                  : ''
                : ''
            }`}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;