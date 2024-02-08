import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guesses, correct }) {
  const rowsFull = range(NUM_OF_GUESSES_ALLOWED);
  const collums = range(5);

  return (
    <div className="guess-results">
      {rowsFull.map((id) => (
        <p className="guess" key={id}>
          {collums.map((ids) => (
            <span
              className={`cell ${
                id < guesses.length ? correct[id][ids].status : ""
              }`}
              key={ids}
            >
              {id < guesses.length && guesses[id].name.charAt(ids)}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
