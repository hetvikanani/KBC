import React, { useState } from "react";
import "../App.css";

const Trivia = ({ data, question, timer, setQuestion }) => {
  const [className, setClassName] = useState("");
  const [currentId, setCurrentId] = useState("");

  const answerHandler = (ele) => {
    setClassName("active");
    setCurrentId(ele.text);
    setTimeout(() => {
      ele.correct === true ? setClassName("correct") : setClassName("wrong");
    }, 3000);

    setTimeout(() => {
      if (ele.correct) {
        setQuestion(question + 1);
      } else {
        timer(true);
        console.log(question);
      }
    }, 5000);
  };

  return (
    <div className="trivia">
      <div className="question">{data[question].question}</div>
      <div className="answers">
        {data[question].answers.map((ele) => (
          <div
            className={`answer ${currentId === ele.text ? className : null}`}
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
