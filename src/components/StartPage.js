import "./StartPage.css";
const StartPage = () => {
  return (
    <>
      <div className="start-page-container">
        <div className="start-img">
          <img src={require("./images/quiz.png")} alt="start-img" />
        </div>
        <button className="btn start-btn">Start</button>
      </div>
    </>
  );
};

export default StartPage;
