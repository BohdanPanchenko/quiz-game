import React from "react";
import "./ResultPage.css";
const ResultPage = (props) => {
  const circleWidth = 2 * Math.PI * 45;
  const strokeWidth = (props.score / 10) * circleWidth;
  return (
    <div className="result-page-container">
      <div className="result-percentage">
        <div className="percentage-circle">
          <img src={require("./images/trophy.png")} alt="medal-img" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="200px"
            height="200px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="90"
              strokeLinecap="round"
              strokeDashoffset={String(strokeWidth)}
            />
          </svg>
        </div>
        <div className="percentage-number">{props.score * 10 + "% Score"}</div>
      </div>
    </div>
  );
};

export default ResultPage;
