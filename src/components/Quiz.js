import "./Quiz.css";
const Quiz = (props) => {
  return (
    <div className="quiz-wrapper">
      <div className="quiz-body">{props.children}</div>
    </div>
  );
};
export default Quiz;
