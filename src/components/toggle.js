import React, { useState } from "react";

export default function Toggle() {
  const [word, setWord] = useState("Hello");

  return (
    <div>
      <hr />
      <h1>{word}</h1>
      <button
        onClick={() => {
          word === "Hello" ? setWord("Goodbye") : setWord("Hello");
        }}
      >
        Toggle Me!
      </button>
    </div>
  );
}
