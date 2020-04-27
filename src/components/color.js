import React, { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("black");

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div>
      <hr />
      <h1 style={{ color: `${color}` }}>{color}</h1>

      <input id="color" type="text" placeholder="Enter a color" />
      <button
        onClick={() =>
          handleColorChange(document.getElementById("color").value)
        }
      >
        Change Color
      </button>
    </div>
  );
}
