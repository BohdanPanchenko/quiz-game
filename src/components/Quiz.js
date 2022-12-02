import "./Quiz.css";
import StartPage from "./StartPage";
import QuestionPage from "./QuestionPage";
import ResultPage from "./ResultPage";
import React from "react";
const Quiz = (props) => {
  const questions = [
    {
      question: "how do you do, fella kids?",
      options: [
        { marker: "A", content: "asdadadadsda", isCorrect: true },
        { marker: "B", content: "asdadadadsda", isCorrect: false },
        { marker: "C", content: "asdadadadsda", isCorrect: false },
        { marker: "D", content: "asdadadadsda", isCorrect: false },
      ],
    },
    {
      question: "Lorem asd asda sasd da  s",
      options: [
        { marker: "A", content: "asdadadadsda", isCorrect: true },
        { marker: "B", content: "asdadadadsda", isCorrect: false },
        { marker: "C", content: "asdadadadsda", isCorrect: false },
        { marker: "D", content: "asdadadadsda", isCorrect: false },
      ],
    },
    {
      question: "Lorem asd asda sasd da  s",
      options: [
        { marker: "A", content: "asdadadadsda", isCorrect: true },
        { marker: "B", content: "asdadadadsda", isCorrect: false },
        { marker: "C", content: "asdadadadsda", isCorrect: false },
        { marker: "D", content: "asdadadadsda", isCorrect: false },
      ],
    },
    {
      question: "Lorem asd asda sasd da  s",
      options: [
        { marker: "A", content: "asdadadadsda", isCorrect: true },
        { marker: "B", content: "asdadadadsda", isCorrect: false },
        { marker: "C", content: "asdadadadsda", isCorrect: false },
        { marker: "D", content: "asdadadadsda", isCorrect: false },
      ],
    },
  ];
  const [gameStarted, setGameStarted] = React.useState(false);
  const [gameFinished, setGamefinished] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(null);

  function startGame() {
    setGameStarted((prev) => !prev);
    setCurrentQuestion(() => 0);
  }
  return (
    <div className="quiz-wrapper">
      <div className="quiz">
        <div className="quiz-body">
          {!gameStarted && <StartPage OnGameStart={startGame} />}
          {gameStarted && (
            <>
              <QuestionPage
                questions={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                questionsNumber={questions.length}
                zIndex={10}
              />
              <QuestionPage
                questions={questions[currentQuestion + 1]}
                currentQuestion={currentQuestion + 1}
                questionsNumber={questions.length}
                zIndex={1}
              />
            </>
          )}
          {!gameStarted && gameFinished && <ResultPage />}
        </div>
      </div>
    </div>
  );
};
export default Quiz;
