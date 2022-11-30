import "./QuestionPage.css";
const QuestionPage = (props) => {
  return (
    <div className="question-container">
      <div className="question-timer"></div>
      <div className="question-body"></div>
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
      <div className="question-progress"></div>
    </div>
  );
};

export default QuestionPage;
