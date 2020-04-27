import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCrementer = (i) => {
    setCount(count + i);
  };

  return (
    <div>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => handleCrementer(1)}>Add</button>
      <button onClick={count > 0 ? () => handleCrementer(-1) : null}>
        Subtract
      </button>
    </div>
  );
}
