import React, { useState } from "react";
import "../app.css";

const Trivia = ({ data, question, timer }) => {
  const [className, setClassName] = useState("");

  const answerHandler = (ele) => {
    setClassName("active");

    setTimeout(() => {
      ele.correct === true ? setClassName("correct") : setClassName("wrong");
    }, 3000);
  };

  return (
    <div className="trivia">
      <div className="question">{data[question].question}</div>
      <div className="answers">
        {data[question].answers.map((ele) => (
          <div
            className={`answer ${className}`}
            onClick={() => answerHandler(ele)}
          >
            {ele.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
