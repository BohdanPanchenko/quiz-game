import "./QuestionPage.css";
import React, { useEffect } from "react";
const QuestionPage = (props) => {
  const [progressBarLength, setProgressBarLength] = React.useState(null);
  useEffect(() => {
    setProgressBarLength(
      () => ((props.currentQuestion + 1) * 100) / props.questionsNumber
    );
  }, []);
  return (
    <div className="question-container" style={{ zIndex: props.zIndex }}>
      <div className="question-timer">
        <div className="countdown-number">30</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="108px"
          height="108px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>

          <circle cx="54" cy="54" r="50" strokeLinecap="round" />
        </svg>
      </div>
      <div className="question-body">{props.questions.question}</div>
      <ul className="question-options">
        {props.questions.options.map((el, index) => {
          return (
            <li key={index}>
              <button type="button" className="option-item">
                <span>{el.marker}</span>
                {el.content}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="question-progress">
        <div className="question-number">
          {props.currentQuestion + 1 + " of " + props.questionsNumber}
        </div>
        <div className="progress-bar">
          <span style={{ width: progressBarLength + "%" }}></span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
