import "./App.css";
import Quiz from "./components/Quiz";
import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";

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
  return (
    <div className="App">
      <Quiz>
        <QuestionPage questions={questions[0]} />
      </Quiz>
    </div>
  );
}

export default App;
