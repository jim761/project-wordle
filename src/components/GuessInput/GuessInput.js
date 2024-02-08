import React, { useState } from "react";

function GuessInput({ submitInput }) {
  const [guess, setGuess] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length == 0) {
          return;
        }
        submitInput(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
