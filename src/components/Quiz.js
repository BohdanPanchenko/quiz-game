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
  const [gameFinished, setGameFinished] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [timeIsUp, setTimeIsUp] = React.useState(false);

  React.useEffect(() => {
    if (timeIsUp) {
      getToTheNextQuestion(false);
      setTimeIsUp(() => false);
    }
  }, [timeIsUp]);
  function startGame() {
    setGameStarted((prev) => !prev);
  }
  function getToTheNextQuestion(isCorrect) {
    if (currentQuestion === questions.length - 1) {
      console.log(questions.length);
      setGameStarted((prev) => !prev);
      setGameFinished((prev) => !prev);
      if (isCorrect) {
        setScore((prev) => prev + 1);
        console.log("correct");
      }
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    if (isCorrect) {
      setScore((prev) => prev + 1);
      console.log("correct");
    }
  }
  function checkIfTimeIsUp() {
    setTimeIsUp(() => true);
  }
  return (
    <div className="quiz-wrapper">
      <div className="quiz">
        <div className="quiz-body">
          {!gameStarted && !gameFinished && (
            <StartPage OnGameStart={startGame} />
          )}
          {gameStarted && (
            <>
              <QuestionPage
                question={questions[currentQuestion]}
                currentQuestion={currentQuestion}
                questionsNumber={questions.length}
                nextQuestion={getToTheNextQuestion}
                counterStarted={true}
                zIndex={10}
                checkTimer={checkIfTimeIsUp}
              />
              {currentQuestion < questions.length - 2 && (
                <QuestionPage
                  question={questions[currentQuestion + 1]}
                  currentQuestion={currentQuestion + 1}
                  questionsNumber={questions.length}
                  nextQuestion={getToTheNextQuestion}
                  counterStarted={false}
                  zIndex={1}
                />
              )}
            </>
          )}
          {!gameStarted && gameFinished && (
            <ResultPage score={score} questionsNumber={questions.length} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Quiz;
