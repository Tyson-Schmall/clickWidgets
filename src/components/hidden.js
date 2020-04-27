import React, { useState } from "react";

export default function Hidden() {
  const [stash, setStash] = useState("block");

  const handleStash = (stashing) => {
    setStash(stashing);
  };

  return (
    <div>
      <hr />
      <h2 style={{ display: `${stash}` }}>Hide Me</h2>

      <button
        onClick={
          stash === "block"
            ? () => handleStash("none")
            : () => handleStash("block")
        }
      >
        I hide the text
      </button>
    </div>
  );
}
