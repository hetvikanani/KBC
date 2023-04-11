import React, { useEffect, useState } from "react";

const Timer = ({ timeout, question }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    setTimer(30);
  }, [question]);

  setTimeout(() => {
    if (timer > 0) {
      setTimer(timer - 1);
    } else {
      timeout(true);
    }
  }, 1000);

  return timer;
};

export default Timer;
