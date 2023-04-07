import React from "react";
import "../app.css";

const Trivia = ({ data, question, timer }) => {
  //   console.log(data[question].answers);

  const answerHandler = (ele) => {
    if (ele.correct === true) {
    } else {
    }
  };

  return (
    <div className="trivia">
      <div className="question">{data[question].question}</div>
      <div className="answers">
        {data[question].answers.map((ele) => (
          <div className="answer" onClick={() => answerHandler(ele)}>
            {ele.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
