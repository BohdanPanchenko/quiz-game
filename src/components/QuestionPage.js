import "./QuestionPage.css";
import React, { useEffect } from "react";
const QuestionPage = (props) => {
  const [counterStarted, setCounterStarted] = React.useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = React.useState(null);
  const progressBarLength =
    ((props.currentQuestion + 1) * 100) / props.questionsNumber;
  const [countDownTimer, setCountDownTimer] = React.useState(30);
  const [timerId, setTimerId] = React.useState(null);
  useEffect(() => {
    if (props.counterStarted) {
      let localTimerId = setInterval(() => {
        setCountDownTimer((prev) => prev - 1);
      }, 1000);
      setTimerId(() => localTimerId);
    } //
  }, []);
  useEffect(() => {
    if (countDownTimer === 0) {
      clearInterval(timerId);
      props.checkTimer();
      setCountDownTimer(() => 30);
    }
  }, [countDownTimer]);

  return (
    <div className="question-container" style={{ zIndex: props.zIndex }}>
      <div className="question-timer">
        <div className="countdown-number">{countDownTimer}</div>
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
      <div className="question-body">{props.question.question}</div>
      <ul className="question-options">
        {props.question.options.map((el, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={
                  selectedButtonIndex !== index
                    ? "option-item"
                    : "option-item selected"
                }
                onClick={(e) => {
                  setSelectedButtonIndex(() => index);
                  setCountDownTimer(() => 30);
                  if (props.question.options[index].isCorrect) {
                    props.nextQuestion(true);
                  } else props.nextQuestion(false);
                }}
              >
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
