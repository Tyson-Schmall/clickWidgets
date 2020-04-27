import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [intervalTime, setIntervalTime] = useState(0);

  const counter = () => {
    setTime(new Date());
  };

  useEffect(() => {
    setIntervalTime(setInterval(() => counter(), 1000));

    return function () {
      clearInterval(intervalTime);
    };
  }, []);

  console.log(intervalTime);

  return (
    <div>
      <hr />
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
