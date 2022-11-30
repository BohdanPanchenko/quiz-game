import "./App.css";
import Quiz from "./components/Quiz";
import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";
import React from "react";
function App() {
  const questions = [
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
  const [currentQuestion, setCurrentQuestion] = React.useState(null);
  function startGame() {
    setGameStarted((prev) => !prev);

    setCurrentQuestion(() => 0);
  }
  return (
    <div className="App">
      <Quiz>
        {!gameStarted && <StartPage OnGameStart={startGame} />}
        {gameStarted && (
          <QuestionPage
            questions={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            questionsNumber={questions.length}
          />
        )}
      </Quiz>
    </div>
  );
}

export default App;
