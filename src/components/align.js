import React, { useState } from "react";

export default function Align() {
  const [alignment, setAlignment] = useState("center");

  const handleAlign = (pos) => {
    setAlignment(pos);
  };

  return (
    <div>
      <hr />
      <div className="align-content" style={{ justifyContent: `${alignment}` }}>
        <div>
          <h1>Push Me</h1>
        </div>
      </div>

      <button onClick={() => handleAlign("left")}>Left</button>
      <button onClick={() => handleAlign("center")}>Center</button>
      <button onClick={() => handleAlign("flex-end")}>Right</button>
    </div>
  );
}
