import { useState } from "react";
import "./app.css";

function App() {

  const [que, setQue] = useState(6)

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



  return (
    <div className="app">
      <div className="image"></div>
      <div className="moneySection">
        <ul className="moneyList">
          {priceList.map((ele) => {
            return (
              <li className={que === ele.id ? "moneyListItem active" : "moneyListItem"} >
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
