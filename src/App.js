import { useState } from "react";
import "./App.css";
import Timer from "./Components/Timer";
import Trivia from "./Components/Trivia";

function App() {
  const [queNum, setQueNum] = useState(0);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState(0);

  const priceList = [
    { id: 16, price: "7 Crore" },
    { id: 15, price: "1 Crore" },
    { id: 14, price: "50,00,000" },
    { id: 13, price: "25,00,000" },
    { id: 12, price: "12,50,000" },
    { id: 11, price: "6,40,000" },
    { id: 10, price: "3,20,000" },
    { id: 9, price: "1,60,000" },
    { id: 8, price: "80,000" },
    { id: 7, price: "40,000" },
    { id: 6, price: "20,000" },
    { id: 5, price: "10,000" },
    { id: 4, price: "5,000" },
    { id: 3, price: "3,000" },
    { id: 2, price: "2,000" },
    { id: 1, price: "1,000" },
  ];

  const questionsData = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="image">
        {timeOut ? (
          <h1 className="endText">You Earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer timeout={setTimeOut} question={queNum} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={questionsData}
                timer={setTimeOut}
                question={queNum}
                setQuestion={setQueNum}
              />
            </div>
          </>
        )}
      </div>
      <div className="moneySection">
        <ul className="moneyList">
          {priceList.map((ele) => {
            return (
              <li
                className={
                  queNum === ele.id ? "moneyListItem active" : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{ele.id}</span>
                <span className="moneyListItemAmount">{ele.price}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
