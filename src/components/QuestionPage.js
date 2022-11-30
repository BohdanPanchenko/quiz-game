import "./QuestionPage.css";
const QuestionPage = (props) => {
  return (
    <div className="question-container">
      <div className="question-timer">
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
          {props.currentQuestion + " of " + props.questions.length}
        </div>
        <div className="progress-bar" style={{ width: props.stage }}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
