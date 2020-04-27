import React, { useState } from "react";

export default function Grow() {
  const [growth, setGrowth] = useState(25);

  const handleGrowth = (i) => {
    setGrowth(growth + i);
  };

  return (
    <div>
      <hr />
      <h2
        style={{
          fontSize: `${growth}px`,
        }}
      >
        {growth}px
      </h2>
      <button onClick={() => handleGrowth(-5)}>Shrink</button>
      <button onClick={() => handleGrowth(5)}>Grow</button>
    </div>
  );
}
